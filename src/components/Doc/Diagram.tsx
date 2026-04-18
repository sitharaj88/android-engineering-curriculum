import React from 'react';
import styles from './Diagram.module.css';

interface DiagramProps {
  title?: string;
  caption?: string;
  children: React.ReactNode;
  variant?: 'default' | 'centered' | 'flow';
}

export default function Diagram({ title, caption, children, variant = 'default' }: DiagramProps) {
  return (
    <figure className={`${styles.diagram} ${styles[variant]}`}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.canvas}>{children}</div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
