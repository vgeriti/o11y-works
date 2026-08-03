import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Observability Runbooks & Articles',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Article Title' } }),
        summary: fields.text({
          label: 'Summary / Excerpt',
          multiline: true,
        }),
        publishedDate: fields.date({
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Author Name',
          defaultValue: 'Venkatesh Geriti',
        }),
        tool: fields.select({
          label: 'Platform / Tool',
          options: [
            { label: 'OpenTelemetry', value: 'OTel' },
            { label: 'Splunk', value: 'Splunk' },
            { label: 'Cribl', value: 'Cribl' },
            { label: 'Dynatrace', value: 'Dynatrace' },
            { label: 'SQL & DB', value: 'SQL' },
            { label: 'Prometheus', value: 'Prometheus' },
            { label: 'Kubernetes', value: 'K8s' },
          ],
          defaultValue: 'OTel',
        }),
        signal: fields.select({
          label: 'Telemetry Signal / Domain',
          options: [
            { label: 'Logs', value: 'Logs' },
            { label: 'Traces & APM', value: 'Traces' },
            { label: 'Metrics & Infra', value: 'Metrics' },
            { label: 'SIEM & Security', value: 'SIEM' },
            { label: 'Real User Monitoring (RUM)', value: 'RUM' },
            { label: 'eBPF Kernel', value: 'eBPF' },
          ],
          defaultValue: 'Traces',
        }),
        type: fields.select({
          label: 'Format Type',
          options: [
            { label: 'Incident Runbook', value: 'Runbook' },
            { label: 'Hands-on Guide', value: 'Guide' },
            { label: 'Deep Dive Article', value: 'Deep Dive' },
            { label: 'Architecture Spec', value: 'Architecture Spec' },
            { label: 'Benchmark', value: 'Benchmark' },
            { label: 'Playbook', value: 'Playbook' },
          ],
          defaultValue: 'Guide',
        }),
        featured: fields.checkbox({
          label: 'Featured Hero Article',
          defaultValue: false,
        }),
        readTimeMinutes: fields.number({
          label: 'Estimated Read Time (Minutes)',
          defaultValue: 8,
        }),
        content: fields.markdoc({
          label: 'Article Body Content (Markdown / MDX)',
        }),
      },
    }),
  },
});
