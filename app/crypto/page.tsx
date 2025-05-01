'use client';

import { useState } from 'react';
import styles from './page.module.css';
import ShareButton from '../components/ShareButton';

const cryptoFortunes = [
  "Your portfolio will shine green",
  "HODL - patience brings rewards",
  "A bullish trend approaches",
  "Smart trades bring profits",
  "Your NFTs gain value",
  "Blockchain fortune awaits",
  "Your tokens moon soon",
  "Wise investments pay off",
  "Crypto wisdom guides you",
  "DeFi brings good returns",
  "Your altcoin picks outperform BTC",
  "A new token listing brings fortune",
  "Your staking rewards exceed expectations",
  "A successful airdrop is coming",
  "Your yield farming strategy pays off",
  "A major partnership announcement boosts your holdings",
  "Your technical analysis proves accurate",
  "A new DeFi protocol brings high APY",
  "Your NFT collection appreciates",
  "A successful ICO is in your future",
  "Market volatility tests your patience",
  "A temporary dip requires strong hands",
  "Your portfolio faces a short-term challenge"
];

function getRandomFortune() {
  return cryptoFortunes[Math.floor(Math.random() * cryptoFortunes.length)];
}

export default function CryptoPage() {
  const [fortune, setFortune] = useState(getRandomFortune());

  const handleRefresh = () => {
    setFortune(getRandomFortune());
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Crypto Fortune</h1>
        <p className={styles.description}>
          Special predictions for crypto traders and investors
        </p>

        <div className={styles.fortuneContainer}>
          <div className={styles.fortuneCard}>
            <div className={styles.fortuneIcon}>🔮</div>
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
          <a href="/frame" className={styles.tryButton}>
            Try Daily Fortune →
          </a>
        </div>
      </div>
    </main>
  );
} 