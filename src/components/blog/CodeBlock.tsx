import React, { useState } from 'react';
import { Copy, Check, Download, Code2, Terminal, Database, Cpu, Flame } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text', fileName }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extMap: Record<string, string> = {
      spl: 'spl',
      splunk: 'spl',
      yaml: 'yaml',
      yml: 'yaml',
      json: 'json',
      sql: 'sql',
      dql: 'dql',
      python: 'py',
      javascript: 'js',
      typescript: 'ts',
      bash: 'sh',
    };
    const ext = extMap[language.toLowerCase()] || 'txt';
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || `code-snippet.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Helper badge icon based on language/tool
  const getLanguageBadge = (lang: string) => {
    const l = lang.toLowerCase();
    if (l === 'spl' || l === 'splunk') {
      return { label: 'Splunk SPL', icon: <Flame className="w-3.5 h-3.5 text-amber-400" />, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' };
    }
    if (l === 'cribl' || l === 'json') {
      return { label: 'Cribl / JSON', icon: <Terminal className="w-3.5 h-3.5 text-teal-400" />, color: 'text-teal-400 border-teal-500/30 bg-teal-500/10' };
    }
    if (l === 'dql' || l === 'dynatrace') {
      return { label: 'Dynatrace DQL', icon: <Cpu className="w-3.5 h-3.5 text-purple-400" />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' };
    }
    if (l === 'sql') {
      return { label: 'SQL Query', icon: <Database className="w-3.5 h-3.5 text-blue-400" />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' };
    }
    if (l === 'yaml' || l === 'yml') {
      return { label: 'OTel YAML', icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' };
    }
    return { label: lang.toUpperCase(), icon: <Code2 className="w-3.5 h-3.5 text-gray-400" />, color: 'text-gray-400 border-gray-500/30 bg-gray-500/10' };
  };

  const badge = getLanguageBadge(language);

  return (
    <div className="my-6 rounded-xl border border-white/10 bg-[#070b14] overflow-hidden shadow-xl group">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090e1b] border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${badge.color}`}>
            {badge.icon}
            {badge.label}
          </span>
          {fileName && (
            <span className="text-xs font-mono text-gray-400 truncate max-w-[200px] sm:max-w-[300px]">
              {fileName}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleDownload}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Download snippet"
            aria-label="Download snippet"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Container */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-gray-200 bg-[#050810]">
        <pre className="whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
