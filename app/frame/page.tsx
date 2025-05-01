'use client';

import { useState } from 'react';
import styles from '../crypto/page.module.css';
import ShareButton from '../components/ShareButton';

const regularFortunes = [
  "A lucky surprise is coming your way",
  "You will meet the right people today",
  "Focus and success will follow",
  "Trust your instincts today",
  "Something amazing will happen soon",
  "Your creativity leads to success",
  "New opportunities are coming",
  "Your hard work pays off soon",
  "Good news arrives by sunset",
  "An exciting journey begins",
  "Your dreams become reality",
  "Positive changes approach",
  "Fortune favors your decisions",
  "Your kindness returns tenfold",
  "Success is near"
];

function getRandomFortune() {
  return regularFortunes[Math.floor(Math.random() * regularFortunes.length)];
}

export default function FramePage() {
  const [fortune, setFortune] = useState(getRandomFortune());

  const handleRefresh = () => {
    setFortune(getRandomFortune());
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Daily Fortune</h1>
        <p className={styles.description}>
          Get your daily dose of inspiration and guidance
        </p>

        <div className={styles.fortuneContainer}>
          <div className={styles.fortuneCard}>
            <div className={styles.fortuneIcon}>✨</div>
            <p className={styles.fortuneText}>{fortune}</p>
            <div className={styles.buttonGroup}>
              <button onClick={handleRefresh} className={styles.refreshButton}>
                🔄 New Fortune
              </button>
              <ShareButton fortune={fortune} />
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/" className={styles.backButton}>
            ← Back to Home
          </a>
          <a href="/crypto" className={styles.tryButton}>
            Try Crypto Fortune →
          </a>
        </div>
      </div>
    </main>
  );
} 