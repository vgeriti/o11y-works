import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  Share2, 
  Lightbulb, 
  CheckSquare, 
  MessagesSquare, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const participationWays = [
  {
    icon: Share2,
    title: 'Share Knowledge',
    badge: 'cyan',
    description: 'Author practical engineering notes, query guides, and real-world troubleshooting playbooks based on your operational experiences.'
  },
  {
    icon: Lightbulb,
    title: 'Contribute Ideas',
    badge: 'blue',
    description: 'Propose open-source telemetry tools, collector utility features, and reference architecture specifications for foundation incubation.'
  },
  {
    icon: CheckSquare,
    title: 'Review Projects',
    badge: 'violet',
    description: 'Participate in peer architecture reviews, validate configuration templates, and evaluate open community RFC proposals.'
  },
  {
    icon: MessagesSquare,
    title: 'Participate in Discussions',
    badge: 'emerald',
    description: 'Engage with fellow observability practitioners in vendor-neutral technical discussions without sales pitches or marketing chatter.'
  }
];

const communityChannels = [
  {
    icon: GithubIcon,
    title: 'GitHub Organization & Discussions',
    status: 'Active',
    badge: 'cyan',
    description: 'The primary codebase hub for o11y.works tools, specification RFCs, and community Q&A discussions.',
    linkText: 'Visit GitHub Organization',
    url: 'https://github.com/o11yworks'
  },
  {
    icon: MessageSquare,
    title: 'Community Technical Forum',
    status: 'Opening Q3',
    badge: 'blue',
    description: 'A dedicated asynchronous forum for deep-dive technical troubleshooting, PromQL optimization, and collector configs.',
    linkText: 'Join Waitlist & Forum Interest',
    url: '#'
  },
  {
    icon: Mail,
    title: 'Foundation Engineering Dispatch',
    status: 'Monthly Digest',
    badge: 'violet',
    description: 'A noise-free monthly newsletter curating verified open telemetry architecture papers, incident playbooks, and tool releases.',
    linkText: 'Subscribe to Newsletter',
    url: '#'
  },
  {
    icon: Calendar,
    title: 'Working Groups & Community Sessions',
    status: 'Planning Stage',
    badge: 'emerald',
    description: 'Virtual working groups focused on specific domains like eBPF telemetry, high-cardinality metrics, and OTel collector patterns.',
    linkText: 'View Working Group Charter',
    url: '#'
  }
];

export const Community: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="violet" size="md" className="mb-4">
            Community Platform
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Join the o11y.works Community
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            o11y.works is built around peer collaboration. We bring together observability practitioners, SREs, and open-source maintainers to share knowledge and build open resources.
          </p>
        </div>

        {/* SECTION 1: HOW YOU CAN PARTICIPATE */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ways to Participate
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Four impactful avenues for engineers to shape the observability ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {participationWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <Card key={index} hoverEffect glow={way.badge as any} className="p-6 flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-lg bg-brand-${way.badge}/10 border border-brand-${way.badge}/20 flex items-center justify-center text-brand-${way.badge} mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{way.title}</h3>
                    <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                      {way.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10 text-xs font-mono text-gray-500">
                    Open Community Role
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: COMMUNITY CHANNELS */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ecosystem Channels
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Authentic collaboration channels for the initial foundation release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} hoverEffect glow={channel.badge as any} className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-brand-${channel.badge}/10 border border-brand-${channel.badge}/20 flex items-center justify-center text-brand-${channel.badge}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant={channel.badge as any} size="sm">
                        {channel.status}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <Button 
                      href={channel.url !== '#' ? channel.url : undefined} 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-between"
                    >
                      <span>{channel.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Vendor Neutral Guarantee Banner */}
        <div className="mt-20 max-w-4xl mx-auto p-6 rounded-xl bg-surface-card border border-white/10 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-brand-cyan shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-white">Vendor-Neutral Code of Conduct</h4>
            <p className="mt-1 text-xs text-gray-400 leading-relaxed">
              All community discussions and contributions are governed by our vendor-neutral code of conduct. Spam, commercial product promotion, and aggressive sales pitches are strictly prohibited in all official channels.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
