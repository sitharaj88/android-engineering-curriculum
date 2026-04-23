import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Android Engineering Curriculum',
  tagline: 'Enterprise-Grade Android Development — From Kotlin Fundamentals to Play Store',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sitharaj88.github.io',
  baseUrl: '/android-engineering-curriculum/',

  organizationName: 'sitharaj88',
  projectName: 'android-engineering-curriculum',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/sitharaj88/android-engineering-curriculum/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 80,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'android, kotlin, jetpack compose, training, enterprise android, mobile development, MVVM, MVI, clean architecture, firebase, hilt, room, retrofit, gradle, modularization, baseline profiles, OWASP MASVS, kotlin multiplatform, compose multiplatform, wear os'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:type', content: 'website'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'training_announcement_v2',
      content: '⚡ 20 Modules · 100+ Topics · 44 Weeks · Enterprise-Grade Android Curriculum — <a href="/android-engineering-curriculum/docs/intro">Start Learning →</a>',
      backgroundColor: '#3DDC84',
      textColor: '#0F172A',
      isCloseable: true,
    },
    navbar: {
      title: 'Android Curriculum',
      hideOnScroll: true,
      logo: {
        alt: 'Android Engineering Curriculum',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'curriculumSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          to: '/docs/architecture/overview',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/patterns/design-patterns',
          label: 'Patterns',
          position: 'left',
        },
        {
          href: 'https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf',
          label: 'Brochure',
          position: 'right',
        },
        {
          href: 'https://www.sitharaj.in',
          label: 'Sitharaj.in',
          position: 'right',
        },
        {
          href: 'https://github.com/sitharaj88',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Foundations',
          items: [
            {label: 'Kotlin Foundation', to: '/docs/kotlin-foundation/overview'},
            {label: 'Jetpack Compose', to: '/docs/jetpack-compose/overview'},
            {label: 'Architecture & Patterns', to: '/docs/architecture-patterns/overview'},
            {label: 'Testing & Quality', to: '/docs/testing-quality/overview'},
          ],
        },
        {
          title: 'Enterprise Engineering',
          items: [
            {label: 'Gradle & Build Systems', to: '/docs/gradle-build/overview'},
            {label: 'Modularization at Scale', to: '/docs/modularization/overview'},
            {label: 'Security & Compliance', to: '/docs/security-compliance/overview'},
            {label: 'CI/CD & DevOps', to: '/docs/cicd-devops/overview'},
            {label: 'Observability', to: '/docs/observability/overview'},
          ],
        },
        {
          title: 'Projects & Career',
          items: [
            {label: 'Capstone Projects', to: '/docs/projects'},
            {label: 'Enterprise UX', to: '/docs/enterprise-ux/overview'},
            {label: 'Career & Interview', to: '/docs/career-interview/overview'},
            {label: 'Architecture Guide', to: '/docs/architecture/overview'},
            {label: 'Design Patterns', to: '/docs/patterns/design-patterns'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Download Brochure', href: 'https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf'},
            {label: 'Sitharaj.in', href: 'https://www.sitharaj.in'},
            {label: 'GitHub', href: 'https://github.com/sitharaj88'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/sitharaj08'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {label: 'Email Training Inquiry', href: 'mailto:sitharaj.info@gmail.com'},
            {label: 'View All Trainings', href: 'https://www.sitharaj.in/training'},
            {label: 'Developer Tools', href: 'https://www.sitharaj.in/ai-tools'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sitharaj Seenivasan. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'kotlin', 'java', 'groovy', 'markup', 'yaml', 'sql', 'toml', 'properties', 'diff'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
