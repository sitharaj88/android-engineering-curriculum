import React from 'react';
import styles from './LibraryGrid.module.css';

interface LibraryItem {
  name: string;
  tagline: string;
  description?: string;
  tags?: string[];
  install?: string;
  url?: string;
  stars?: string;
  recommended?: boolean;
  category?: string;
  icon?: string;
}

interface LibraryGridProps {
  libraries: LibraryItem[];
  columns?: 2 | 3;
}

export default function LibraryGrid({ libraries, columns = 2 }: LibraryGridProps) {
  return (
    <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
      {libraries.map((lib, i) => (
        <a
          key={i}
          href={lib.url}
          target={lib.url ? '_blank' : undefined}
          rel={lib.url ? 'noopener noreferrer' : undefined}
          className={`${styles.card} ${lib.recommended ? styles.recommended : ''}`}
        >
          {lib.recommended && <div className={styles.recommendedBadge}>Recommended</div>}
          <div className={styles.header}>
            {lib.icon && <div className={styles.icon}>{lib.icon}</div>}
            <div className={styles.headerText}>
              <div className={styles.name}>{lib.name}</div>
              {lib.stars && <div className={styles.stars}>★ {lib.stars}</div>}
            </div>
          </div>
          <div className={styles.tagline}>{lib.tagline}</div>
          {lib.description && <p className={styles.description}>{lib.description}</p>}
          {lib.tags && lib.tags.length > 0 && (
            <div className={styles.tags}>
              {lib.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          {lib.install && (
            <div className={styles.install}>
              <code>{lib.install}</code>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
