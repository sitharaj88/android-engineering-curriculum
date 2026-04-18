import React from 'react';
import styles from './FeatureGrid.module.css';

interface Feature {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
      {features.map((f, i) => (
        <div key={i} className={styles.card}>
          {f.icon && <div className={styles.icon}>{f.icon}</div>}
          <h4 className={styles.title}>{f.title}</h4>
          <p className={styles.description}>{f.description}</p>
        </div>
      ))}
    </div>
  );
}
