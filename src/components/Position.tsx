import React from 'react';
import styles from './Position.module.scss';

const produceSpans = (text: string, animation: string) => {
    return text.split("").map((letter, index) => (
        <span
            key={index}
            className={`${styles.inlineBlock} ${styles.transformStyle3d} ${styles.originBottom} ${styles[animation]}`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
      {letter === " " ? "\u00A0" : letter}
    </span>
    ));
};

const Position: React.FC = () => {
    return (
        <div className={styles.position}>
            <div className={styles.textContainer}>
                <div className={`${styles.text} ${styles.first}`} aria-label="Software Developer">
                    {produceSpans("Software Developer", "animateTextRotate1")}
                </div>
                <div className={`${styles.text} ${styles.second}`} aria-label="Content Creator">
                    {produceSpans("Content Creator", "animateTextRotate2")}
                </div>
            </div>
        </div>
    );
};

export default Position;