import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  curriculumSidebar: [
    'intro',
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Foundations</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Module 01 — Kotlin Foundation',
      collapsed: true,
      items: [
        'kotlin-foundation/overview',
        'kotlin-foundation/coroutines-deep-dive',
        'kotlin-foundation/advanced-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Module 02 — Android Fundamentals',
      collapsed: true,
      items: ['android-fundamentals/overview'],
    },
    {
      type: 'category',
      label: 'Module 03 — Jetpack Compose',
      collapsed: true,
      items: [
        'jetpack-compose/overview',
        'jetpack-compose/performance',
        'jetpack-compose/custom-layouts-gestures',
      ],
    },
    {
      type: 'category',
      label: 'Module 04 — Architecture & Patterns',
      collapsed: true,
      items: [
        'architecture-patterns/overview',
        'architecture-patterns/mvi-state-machines',
        'architecture-patterns/offline-first',
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Data & Services</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Module 05 — Data & Persistence',
      collapsed: true,
      items: ['data-persistence/overview'],
    },
    {
      type: 'category',
      label: 'Module 06 — Networking & API',
      collapsed: true,
      items: [
        'networking-api/overview',
        'networking-api/graphql-websocket-grpc',
      ],
    },
    {
      type: 'category',
      label: 'Module 07 — Firebase & Cloud',
      collapsed: true,
      items: ['firebase-cloud/overview'],
    },
    {
      type: 'category',
      label: 'Module 08 — Advanced Components',
      collapsed: true,
      items: ['advanced-components/overview'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Quality & Performance</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Module 09 — Testing & Quality',
      collapsed: true,
      items: ['testing-quality/overview'],
    },
    {
      type: 'category',
      label: 'Module 10 — Performance',
      collapsed: true,
      items: [
        'performance/overview',
        'performance/baseline-profiles',
      ],
    },
    {
      type: 'category',
      label: 'Module 11 — Publishing',
      collapsed: true,
      items: ['publishing/overview'],
    },
    {
      type: 'category',
      label: 'Module 12 — Advanced & Trending',
      collapsed: true,
      items: ['advanced-trending/overview'],
    },
    {
      type: 'category',
      label: 'Module 13 — Version Control',
      collapsed: true,
      items: ['version-control/overview'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Enterprise Engineering</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Module 14 — Gradle & Build Systems',
      collapsed: true,
      items: ['gradle-build/overview'],
    },
    {
      type: 'category',
      label: 'Module 15 — Modularization at Scale',
      collapsed: true,
      items: ['modularization/overview'],
    },
    {
      type: 'category',
      label: 'Module 16 — Security & Compliance',
      collapsed: true,
      items: ['security-compliance/overview'],
    },
    {
      type: 'category',
      label: 'Module 17 — CI/CD & DevOps',
      collapsed: true,
      items: ['cicd-devops/overview'],
    },
    {
      type: 'category',
      label: 'Module 18 — Observability',
      collapsed: true,
      items: ['observability/overview'],
    },
    {
      type: 'category',
      label: 'Module 19 — Enterprise UX',
      collapsed: true,
      items: ['enterprise-ux/overview'],
    },
    {
      type: 'category',
      label: 'Module 20 — Career & Interview',
      collapsed: true,
      items: ['career-interview/overview'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Capstone Projects</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Capstone Projects',
      collapsed: true,
      items: [
        'projects/overview',
        'projects/ecommerce',
        'projects/social-media',
        'projects/food-delivery',
        'projects/fitness-tracker',
        'projects/news-aggregator',
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"><span>Reference</span></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Architecture Guide',
      collapsed: true,
      items: [
        'architecture/overview',
        'architecture/clean-architecture',
        'architecture/project-structure',
      ],
    },
    {
      type: 'category',
      label: 'Design Patterns',
      collapsed: true,
      items: [
        'patterns/design-patterns',
        'patterns/state-patterns',
        'patterns/component-patterns',
      ],
    },
  ],
};

export default sidebars;
