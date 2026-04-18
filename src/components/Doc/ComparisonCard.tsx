import React from 'react';
import styles from './ComparisonCard.module.css';

interface ComparisonSide {
  label: string;
  title: string;
  points: string[];
  variant?: 'old' | 'new' | 'neutral';
}

interface ComparisonCardProps {
  left: ComparisonSide;
  right: ComparisonSide;
}

export default function ComparisonCard({ left, right }: ComparisonCardProps) {
  return (
    <div className={styles.wrap}>
      <ComparisonColumn side={left} />
      <div className={styles.arrow}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
      <ComparisonColumn side={right} />
    </div>
  );
}

function ComparisonColumn({ side }: { side: ComparisonSide }) {
  const variant = side.variant ?? 'neutral';
  return (
    <div className={`${styles.col} ${styles[variant]}`}>
      <div className={styles.label}>{side.label}</div>
      <h4 className={styles.title}>{side.title}</h4>
      <ul className={styles.points}>
        {side.points.map((p, i) => (
          <li key={i}>
            <span className={styles.bullet} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
