import { config, fields, collection } from '@keystatic/core';

// Automatically detect local development vs production website domain
const isLocal =
  typeof window !== 'undefined'
    ? window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    : process.env.NODE_ENV !== 'production';

export default config({
  storage: isLocal
    ? {
        kind: 'local',
      }
    : {
        kind: 'github',
        repo: 'o11yworks/o11y-works',
        branchPrefix: 'contributor-drafts/',
      },
  collections: {
    blog: collection({
      label: 'Blog Posts & Runbooks',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Article Title' } }),
        summary: fields.text({ label: 'Summary / Excerpt', multiline: true }),
        publishedDate: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author Name', defaultValue: 'Venkatesh Geriti' }),
        coverImage: fields.image({
          label: 'Article Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        tool: fields.select({
          label: 'Platform / Tool Filter',
          options: [
            { label: 'Splunk', value: 'Splunk' },
            { label: 'Cribl', value: 'Cribl' },
            { label: 'Dynatrace', value: 'Dynatrace' },
            { label: 'SQL', value: 'SQL' },
            { label: 'OTel', value: 'OTel' },
            { label: 'Prometheus', value: 'Prometheus' },
            { label: 'K8s', value: 'K8s' },
          ],
          defaultValue: 'OTel',
        }),
        signal: fields.select({
          label: 'Telemetry Signal Filter',
          options: [
            { label: 'Logs', value: 'Logs' },
            { label: 'Traces', value: 'Traces' },
            { label: 'Metrics', value: 'Metrics' },
            { label: 'SIEM', value: 'SIEM' },
            { label: 'RUM', value: 'RUM' },
            { label: 'eBPF', value: 'eBPF' },
          ],
          defaultValue: 'Traces',
        }),
        type: fields.select({
          label: 'Content Format Type',
          options: [
            { label: 'Playbook', value: 'Playbook' },
            { label: 'Guide', value: 'Guide' },
            { label: 'Deep Dive', value: 'Deep Dive' },
            { label: 'Roadmap', value: 'Roadmap' },
            { label: 'Benchmark', value: 'Benchmark' },
          ],
          defaultValue: 'Playbook',
        }),
        featured: fields.checkbox({ label: 'Featured Article (Hero Card)', defaultValue: false }),
        readTimeMinutes: fields.integer({ label: 'Read Time (Minutes)', defaultValue: 8 }),
        content: fields.mdx({
          label: 'Article Body (MDX)',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),
  },
});
