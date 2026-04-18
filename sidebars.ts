import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 01 — Kotlin Foundation',
      collapsed: true,
      items: ['kotlin-foundation/overview'],
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
      items: ['jetpack-compose/overview'],
    },
    {
      type: 'category',
      label: 'Module 04 — Architecture & Patterns',
      collapsed: true,
      items: ['architecture-patterns/overview'],
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
      items: ['networking-api/overview'],
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
      type: 'category',
      label: 'Module 09 — Testing & Quality',
      collapsed: true,
      items: ['testing-quality/overview'],
    },
    {
      type: 'category',
      label: 'Module 10 — Performance',
      collapsed: true,
      items: ['performance/overview'],
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
