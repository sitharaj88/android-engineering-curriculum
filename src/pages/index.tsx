import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* ── Data ── */

const modules = [
  { num: 1, title: 'Kotlin Foundation', desc: 'Language, coroutines deep dive, advanced patterns — generics, DSLs, value classes, K2 compiler.', weeks: '3 Weeks', topics: '3 Chapters', link: '/docs/kotlin-foundation/overview' },
  { num: 2, title: 'Android Fundamentals', desc: 'Platform architecture, Activities, Intents, Fragments, ViewGroups, ConstraintLayout, resources.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/android-fundamentals/overview' },
  { num: 3, title: 'Jetpack Compose', desc: 'The definitive Compose deep dive — state, theming, lists, navigation, animations, forms, testing, interop, modifiers, performance, internals.', weeks: '4 Weeks', topics: '13 Chapters', link: '/docs/jetpack-compose/overview' },
  { num: 4, title: 'Architecture & Patterns', desc: 'MVVM, MVI state machines, Clean Architecture, offline-first with outbox pattern, Hilt DI.', weeks: '3 Weeks', topics: '3 Chapters', link: '/docs/architecture-patterns/overview' },
  { num: 5, title: 'Data & Persistence', desc: 'DataStore, Room, migrations, Content Providers, encrypted storage, caching strategies.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/data-persistence/overview' },
  { num: 6, title: 'Networking & API', desc: 'REST, GraphQL with Apollo, WebSocket, gRPC, Server-Sent Events — the full modern networking stack.', weeks: '3 Weeks', topics: '2 Chapters', link: '/docs/networking-api/overview' },
  { num: 7, title: 'Firebase & Cloud', desc: 'Auth, Firestore, Cloud Storage, FCM, Analytics, Crashlytics, Remote Config, App Check.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/firebase-cloud/overview' },
  { num: 8, title: 'Advanced Components', desc: 'Services, WorkManager, notification channels, permissions, CameraX, sensors, biometrics, Glance.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-components/overview' },
  { num: 9, title: 'Testing & Quality', desc: 'JUnit 5, MockK, Turbine, Espresso, Compose Testing, TDD, Kover, detekt, Konsist boundaries.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/testing-quality/overview' },
  { num: 10, title: 'Performance', desc: 'Memory profiling, LeakCanary, R8, baseline profiles, Macrobenchmark, startup optimization.', weeks: '2 Weeks', topics: '2 Chapters', link: '/docs/performance/overview' },
  { num: 11, title: 'Publishing', desc: 'Play Console, App Bundles, signing, in-app purchases, subscriptions, AdMob, ASO.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/publishing/overview' },
  { num: 12, title: 'Advanced & Trending', desc: 'Kotlin Multiplatform, Compose Multiplatform, ML Kit, Wear OS, Android TV, BLE/IoT, XR.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-trending/overview' },
  { num: 13, title: 'Version Control', desc: 'Git fundamentals, branching strategies, pull requests, code reviews, conventional commits.', weeks: '1 Week', topics: '1 Topic', link: '/docs/version-control/overview' },
  { num: 14, title: 'Gradle & Build Systems', desc: 'Kotlin DSL, version catalogs, convention plugins, configuration cache, build scans — enterprise build infrastructure.', weeks: '2 Weeks', topics: '4 Topics', link: '/docs/gradle-build/overview' },
  { num: 15, title: 'Modularization at Scale', desc: '30+ feature modules, API/impl separation, Konsist architectural tests, dynamic feature delivery.', weeks: '2 Weeks', topics: '4 Topics', link: '/docs/modularization/overview' },
  { num: 16, title: 'Security & Compliance', desc: 'OWASP MASVS, cert pinning, Keystore, Play Integrity, R8 tamper detection, GDPR/CCPA, Data Safety.', weeks: '2 Weeks', topics: '5 Topics', link: '/docs/security-compliance/overview' },
  { num: 17, title: 'CI/CD & DevOps', desc: 'GitHub Actions, Fastlane, Play Console API, staged rollouts with auto-halt, flaky test quarantine.', weeks: '2 Weeks', topics: '5 Topics', link: '/docs/cicd-devops/overview' },
  { num: 18, title: 'Observability', desc: 'Crashlytics, Firebase Performance, custom traces, OpenTelemetry distributed tracing, SLOs + alerting.', weeks: '2 Weeks', topics: '5 Topics', link: '/docs/observability/overview' },
  { num: 19, title: 'Enterprise UX', desc: 'Design systems, tokens, TalkBack, WCAG 2.2, i18n, RTL, Window Size Classes, foldables, motion.', weeks: '2 Weeks', topics: '5 Topics', link: '/docs/enterprise-ux/overview' },
  { num: 20, title: 'Career & Interview', desc: 'Leveling (L3-Principal), system design framework, 50+ question bank, portfolio strategy, negotiation.', weeks: '1 Week', topics: '5 Topics', link: '/docs/career-interview/overview' },
];

const features = [
  { icon: '🤖', title: 'Modern Android Stack', desc: 'Kotlin 2.x + K2 compiler, Compose, Material 3, coroutines, Flow — the full stack top engineering teams actually ship.' },
  { icon: '🧩', title: 'Compose First', desc: 'Declarative UI with state hoisting, compiler metrics for performance, custom layouts, gestures, and Compose Multiplatform.' },
  { icon: '🏗️', title: 'Enterprise Architecture', desc: 'MVVM, MVI state machines, Clean Architecture, offline-first with outbox, Hilt DI, modular 30+ module codebases.' },
  { icon: '🧪', title: 'Test-Driven Mindset', desc: 'JUnit 5, MockK, Turbine, Compose Testing, Paparazzi snapshots, Macrobenchmark — confidence at every layer.' },
  { icon: '⚡', title: 'Production Performance', desc: 'Baseline profiles, R8 full mode, configuration cache, startup tracing, LeakCanary — measured wins, not vibes.' },
  { icon: '🚀', title: 'Ship to Production', desc: 'GitHub Actions, Fastlane, Play Console API, staged rollouts with auto-halt, SLO-based alerting.' },
  { icon: '🔐', title: 'Security & Compliance', desc: 'OWASP MASVS, cert pinning, Play Integrity, encrypted storage, R8 obfuscation, GDPR/CCPA data inventory.' },
  { icon: '🌍', title: 'World-Class UX', desc: 'Design tokens, TalkBack, WCAG 2.2 AA, i18n, RTL, foldables, Window Size Classes, motion design.' },
  { icon: '📈', title: 'Career-Ready', desc: 'Leveling from junior to principal, system design framework, 50+ interview questions, portfolio and negotiation guidance.' },
];

const techStack = [
  'Kotlin 2.x', 'Jetpack Compose', 'Material 3', 'Coroutines', 'Flow', 'StateFlow',
  'Hilt', 'Room', 'DataStore', 'Paging 3', 'Retrofit', 'OkHttp',
  'Apollo GraphQL', 'gRPC', 'WebSocket', 'Moshi', 'Coil', 'Navigation Compose',
  'WorkManager', 'CameraX', 'Glance', 'Firebase', 'FCM', 'Crashlytics',
  'Remote Config', 'Play Integrity', 'JUnit 5', 'MockK', 'Turbine', 'Espresso',
  'Compose Testing', 'Paparazzi', 'Macrobenchmark', 'Baseline Profiles', 'R8',
  'Gradle Kotlin DSL', 'Version Catalogs', 'Convention Plugins', 'KSP',
  'GitHub Actions', 'Fastlane', 'OpenTelemetry', 'KMP', 'Compose Multiplatform',
  'ML Kit', 'Wear OS', 'Health Connect', 'Konsist', 'Detekt', 'Kover',
];

const projects = [
  { icon: '🛒', title: 'E-Commerce App', desc: 'Catalog, cart, payments, and order tracking with Compose, Hilt, Room, and Retrofit.' },
  { icon: '💬', title: 'Social Media App', desc: 'Real-time chat with Firestore, push notifications via FCM, and media uploads to Cloud Storage.' },
  { icon: '🍔', title: 'Food Delivery App', desc: 'Live order tracking with Maps, Location services, and WebSocket-driven status updates.' },
  { icon: '💪', title: 'Fitness Tracker', desc: 'Sensor data collection, Wear OS companion, Health Connect, and DataStore persistence.' },
  { icon: '📰', title: 'News Aggregator', desc: 'Offline-first reading with Room caching, Paging 3, WorkManager sync, and Coil image loading.' },
];

const careers = [
  { icon: '🤖', title: 'Android Engineer (L3–L5)', desc: 'Native Android apps at top product and fintech companies' },
  { icon: '⚙️', title: 'Senior Android Engineer (L5–L6)', desc: 'Architecture, system design, mentorship, cross-team leadership' },
  { icon: '🏗️', title: 'Staff / Principal Engineer', desc: 'Platform direction, build infrastructure, organization-level impact' },
  { icon: '📱', title: 'Kotlin Multiplatform Engineer', desc: 'Share code across Android, iOS, Desktop, and Web with Compose Multiplatform' },
  { icon: '🔐', title: 'Mobile Security Engineer', desc: 'OWASP MASVS audits, Play Integrity, supply-chain hardening for banking/health apps' },
  { icon: '🚀', title: 'Mobile Platform / DevOps', desc: 'Build systems, CI/CD, observability, release automation' },
];

const prerequisites = [
  { icon: '📜', title: 'Any Programming Basics', desc: 'Familiarity with C, C++, Java, or Python — variables, loops, and functions are enough.' },
  { icon: '💻', title: '8 GB+ RAM Machine', desc: 'Windows, macOS, or Linux with at least 8 GB RAM to run Android Studio comfortably.' },
  { icon: '🛠️', title: 'Curiosity & Persistence', desc: 'Willingness to build real apps and debug — no prior Android experience required.' },
  { icon: '📦', title: 'Tools to Install', desc: 'Android Studio (latest), JDK 17+, and Git. We\'ll install everything in Module 02.' },
];

/* ── Trust Icons ── */

function CheckShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function Phone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}

function Zap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function Award() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function BookOpen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

/* ── Page ── */

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Android Development Complete Guide"
      description={siteConfig.tagline}
    >
      {/* HERO */}
      <header className="hero-section">
        <div className="hero-bg">
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>By Sitharaj Seenivasan — Senior Software Engineer</span>
          </div>

          <h1 className="hero-title">
            Android Engineering<br />
            <span className="hero-title-accent">World-Class Curriculum</span>
          </h1>

          <p className="hero-description">
            The world-class, enterprise-grade Android curriculum — 20 modules, 100+ topics,
            5 capstone projects. From Kotlin fundamentals to shipping, scaling, and operating
            apps at principal engineer level. The patterns and practices real teams use.
          </p>

          <div className="hero-actions">
            <Link to="/docs/intro" className="btn-primary">
              Explore Curriculum
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf"
              className="btn-secondary"
            >
              Download Brochure
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">20</div>
              <div className="hero-stat-label">Modules</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100+</div>
              <div className="hero-stat-label">Topics</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">44</div>
              <div className="hero-stat-label">Weeks</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">180h</div>
              <div className="hero-stat-label">Content</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">5</div>
              <div className="hero-stat-label">Capstones</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* TRUST BAR */}
        <section className="trust-bar">
          <div className="trust-bar-inner">
            <div className="trust-label">Modern Android Standards</div>
            <div className="trust-items">
              <div className="trust-item"><CheckShield /> Production Ready</div>
              <div className="trust-item"><Phone /> Kotlin + Compose</div>
              <div className="trust-item"><Zap /> Material 3</div>
              <div className="trust-item"><Award /> MVVM &amp; Clean Arch</div>
              <div className="trust-item"><BookOpen /> Hands-On Projects</div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Why Choose This Guide</div>
              <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
              <p className="section-description">
                A structured roadmap that starts from zero and ends at the Play Store —
                covering architecture, testing, performance, and modern Android best
                practices.
              </p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Complete Curriculum</div>
              <h2 className="section-title">20 Training Modules · 5 Phases</h2>
              <p className="section-description">
                Foundations → Data &amp; Services → Quality &amp; Performance → Enterprise Engineering → Career.
                Every module builds on the previous; enterprise phase separates senior from staff.
              </p>
            </div>
            <div className="modules-grid">
              {modules.map((m) => (
                <Link to={m.link} className="module-card" key={m.num}>
                  <div className="module-card-header">
                    <div className="module-num">{String(m.num).padStart(2, '0')}</div>
                    <h3>{m.title}</h3>
                  </div>
                  <p>{m.desc}</p>
                  <div className="module-meta">
                    <span className="module-tag">{m.weeks}</span>
                    <span className="module-tag">{m.topics}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TECH */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Tools &amp; Technologies</div>
              <h2 className="section-title">Master the Modern Android Stack</h2>
              <p className="section-description">
                Over 30 libraries and tools — every layer of a production Android app,
                from UI to CI/CD.
              </p>
            </div>
            <div className="tech-container">
              {techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Hands-On Experience</div>
              <h2 className="section-title">Projects You'll Build</h2>
              <p className="section-description">
                Real apps that demonstrate enterprise-level Android development skills.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREREQS */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Before You Start</div>
              <h2 className="section-title">Prerequisites</h2>
              <p className="section-description">What you need before beginning this program.</p>
            </div>
            <div className="prereq-grid">
              {prerequisites.map((p, i) => (
                <div className="prereq-card" key={i}>
                  <div className="prereq-icon-wrap">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Future</div>
              <h2 className="section-title">Career Paths</h2>
              <p className="section-description">Roles you'll be prepared for after completing this program.</p>
            </div>
            <div className="career-grid">
              {careers.map((c, i) => (
                <div className="career-card" key={i}>
                  <div className="career-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="instructor-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Instructor</div>
              <h2 className="section-title">Learn from an Expert</h2>
            </div>
            <div className="instructor-card">
              <div className="instructor-avatar">SS</div>
              <div className="instructor-info">
                <h3>Sitharaj Seenivasan</h3>
                <div className="instructor-title">Full Stack &amp; Senior Software Engineer</div>
                <p>
                  Experienced engineer specializing in Android, Kotlin, React Native, and
                  full-stack development. Passionate about helping teams build
                  high-quality mobile applications and adopt modern best practices.
                </p>
                <div className="instructor-links">
                  <a href="https://www.sitharaj.in" className="instructor-link" target="_blank" rel="noopener noreferrer">sitharaj.in</a>
                  <a href="https://github.com/sitharaj88" className="instructor-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/sitharaj08" className="instructor-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:sitharaj.info@gmail.com" className="instructor-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to Build Production Android Apps?</h2>
            <p>Start the complete Android development guide — Kotlin, Jetpack Compose, and beyond.</p>
            <div className="cta-actions">
              <Link to="/docs/intro" className="btn-primary">
                Start the Curriculum
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="mailto:sitharaj.info@gmail.com" className="btn-secondary">
                Contact for Training
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
