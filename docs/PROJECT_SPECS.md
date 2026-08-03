# 📑 `o11y.works` Platform & Blog Master Project Specification

**Sub-Project Path**: `projects/o11y-works`  
**GitHub Repository**: [`https://github.com/o11yworks/o11y-works`](https://github.com/o11yworks/o11y-works)  
**Live Application URL**: [`https://o11y.works`](https://o11y.works)  
**Version**: 1.1.0  
**Last Updated**: 2026-08-02  

---

## 🏛️ 1. Project Vision & Architecture Overview

`o11y.works` is an open, vendor-neutral observability engineering platform, knowledge hub, and developer tools ecosystem.

### 1.1 Application Architecture Scope
* **Single Unified React Application**: Built with React 18, TypeScript, Vite 5, Tailwind CSS, and React Router v6.
* **Core Web Platform**: Serves the primary marketing, learning paths (`/knowledge`), tools incubator (`/ecosystem`), community (`/community`), and foundation mission (`/about`).
* **Integrated Git-CMS Blog Engine**: Serves technical articles, tutorials, incident playbooks, and architecture specs at `/blog` and `/blog/:slug`.
* **Zero Backend Hosting Cost**: 100% static site generation (SSG / client-side routing) deployed automatically to GitHub Pages via GitHub Actions.

---

## 🎯 2. Master Functional Requirements Specification

### 2.1 Core Navigation & Routing Matrix
| Route Path | View / Component | Purpose & Description |
| :--- | :--- | :--- |
| `/` | `Home.tsx` | Hero banner, OpenTelemetry YAML code preview, 3 core pillars grid, guiding principles. |
| `/ecosystem` | `Ecosystem.tsx` | 6 Ecosystem Incubator Pillars (*Projects, Knowledge, Research, Labs, Resources, Community*). |
| `/knowledge` | `Knowledge.tsx` | 4 structured learning paths (*Fundamentals, Engineering, Architecture, Advanced eBPF*) + 4 operational runbooks. |
| `/community` | `Community.tsx` | Working groups, GitHub discussions link (`https://github.com/o11yworks`), newsletter digest. |
| `/about` | `About.tsx` | Mission, Vision, and 5 Guiding Principles (*Open, Practical, Community-driven, Vendor-neutral, Engineering-focused*). |
| `/blog` | `BlogIndex.tsx` | 3D Taxonomy filter bar, global search input, featured article hero, article card grid. |
| `/blog/:slug` | `BlogPost.tsx` | Article layout, sticky Table of Contents (ToC), syntax-highlighted code blocks, downloadable YAML cards. |
| `/admin` | `Keystatic Admin` | Local / GitHub OAuth visual WYSIWYG editor for writing and publishing articles directly to Git. |

### 2.2 3-Dimensional Blog Taxonomy Filter Bar
Blog articles MUST be filterable across 3 independent dimensions:
1. **Signal / Domain**: `All Signals` | `Logging` | `APM & Tracing` | `Metrics & Infra` | `SIEM & Security` | `RUM` | `eBPF`
2. **Platform / Tool**: `All Tools` | `OpenTelemetry` | `Prometheus` | `Splunk` | `Grafana` | `Elastic` | `Kubernetes`
3. **Content Format**: `All Formats` | `Deep Dive Article` | `Hands-on Tutorial` | `Incident Runbook` | `Architecture Spec`

### 2.3 Interactive Article Reading Experience
* **Sticky Table of Contents (ToC)**: Scroll-synced sidebar highlighting active headers.
* **Interactive Code Blocks**: Copy button, line numbers, syntax highlighting (Shiki / Prism), and collapsible long snippets.
* **Downloadable YAML Cards**: 1-click download button embedded in runbooks for `.yaml` configs.

---

## 🎨 3. UI/UX Design System & Theme Specs

### 3.1 Color Tokens & Theme Matrix
* **Primary Theme Default**: **Dark-Mode Midnight (`#030712`)** for high utility during NOC shifts and continuous monitoring.
* **Runbook Reader Theme**: **Adaptive Light-First (`#ffffff`)** available for printable runbooks and high-glare environments.
* **Color Palette Tokens**:
  * `Background`: `#030712`
  * `Surface`: `#090d16` (Base), `#0d1322` (Card), `#131b2e` (Hover)
  * `Brand Cyan`: `#06b6d4` (Primary telemetry highlight, focal dot `.`, active focus rings)
  * `Brand Blue`: `#3b82f6` (Primary CTA buttons, links)
  * `Brand Violet`: `#8b5cf6` (eBPF tags, ambient card glows)
  * `Brand Emerald`: `#10b981` (System health badges, verified status)

### 3.2 Typography & Master Logo Lockup
* **Sans Font**: `Inter`, `-apple-system`, `sans-serif`
* **Mono Font**: `JetBrains Mono`, `Menlo`, `Monaco`, `monospace`
* **Master Logo Component** ([`Logo.tsx`](file:///Users/vgeriti/Desktop/o11yworks/projects/o11y-works/src/components/ui/Logo.tsx)):
  * **Icon Mark**: Rounded squircle container with cyan dot (`#06b6d4`) + blue EKG waveform path (`#3b82f6`).
  * **Wordmark**: `o11y` (White) + **`.`** (Cyan) + `works` (Muted Slate).

---

## 📝 4. Content Engine & Git-CMS Schema Standards

### 4.1 Content File Storage
Articles are stored as MDX files inside `src/content/blog/`:
```
src/content/blog/
├── otel-collector-pipeline-optimization.mdx
├── promql-cardinality-cost-control.mdx
└── splunk-ta-ado-alerts-setup.mdx
```

### 4.2 Article Frontmatter Schema
```yaml
---
title: "OpenTelemetry Collector Pipeline Optimization"
summary: "A practical guide to configuring memory_limiter, batching, and sampling processors."
publishedDate: "2026-08-02"
author: "Venkatesh Geriti"
signal: "Tracing"        # Logging | Tracing | Metrics | SIEM | RUM | eBPF
tool: "OpenTelemetry"    # OpenTelemetry | Prometheus | Splunk | Grafana | Kubernetes
contentType: "Runbook"   # Deep Dive | Tutorial | Runbook | Architecture Spec
featured: true
readTimeMinutes: 8
---
```

---

## 🛡️ 5. Security, Storage & Performance Standards

- **Zero Backend Security Footprint**: No live SQL database or server runtime. Content is pre-built statically into client bundles.
- **PAT & Token Vault**: Personal Access Tokens and secrets MUST NEVER be committed to Git.
- **Asset Optimization**: Master vector SVGs in `docs/assets/brand/svg/`, WebP images for raster screenshots.

---

## 🧪 6. Verification & Testing Specs

- **Automated Build Audit**: Run `npm run push:website:dry-run` (`tsc -b && vite build`) to verify 0 compilation errors before any commit.
- **WCAG 2.1 AA Accessibility**: Minimum 4.5:1 text contrast ratio, keyboard focus rings (`focus-visible:ring-brand-cyan`).
- **SEO Audit**: Open Graph meta tags, XML sitemap (`public/sitemap.xml`), and `public/robots.txt` active.

---

## 🚀 7. Release Roadmap

- [x] **Phase 1 (Completed)**: Core web platform, master brand guide, 5 core pages, dark midnight design tokens.
- [ ] **Phase 2 (Current Sprint)**:
  - [ ] Implement Git-CMS Blog Engine (`src/content/blog/` + `/blog` index + `/blog/:slug` reader view).
  - [ ] Interactive **OTel Collector Config Generator UI**.
  - [ ] Interactive **PromQL Query Helper & Explainer**.
- [ ] **Phase 3 (Next Sprint)**: Global `Cmd + K` search modal across `/knowledge` and `/blog`.
