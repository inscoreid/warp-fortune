'use client';

import { useState, useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';
import styles from './crypto/page.module.css';
import ShareButton from './components/ShareButton';

const regularFortunes = [
  // Общие предсказания
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
  "Success is near",
  // Новые предсказания
  "A new friendship brings unexpected joy",
  "Your patience will be rewarded today",
  "A creative solution appears when needed",
  "Your positive energy attracts success",
  "An old dream finds new life",
  "Your intuition guides you perfectly",
  "A small step leads to big changes",
  "Your smile brightens someone's day",
  "A chance encounter brings opportunity",
  "Your wisdom helps others grow"
];

const cryptoFortunes = [
  // Крипто-предсказания
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
  // Новые позитивные предсказания
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
  // Негативные предсказания (для баланса)
  "Market volatility tests your patience",
  "A temporary dip requires strong hands",
  "Your portfolio faces a short-term challenge"
];

function getRandomFortune(type: 'regular' | 'crypto' = 'regular'): string {
  const fortuneArray = type === 'crypto' ? cryptoFortunes : regularFortunes;
  return fortuneArray[Math.floor(Math.random() * fortuneArray.length)];
}

export default function Home() {
  const [fortuneType, setFortuneType] = useState<'regular' | 'crypto'>('regular');
  const [fortune, setFortune] = useState(getRandomFortune(fortuneType));

  useEffect(() => {
    // Initialize Farcaster SDK
    const initFarcaster = async () => {
      try {
        await sdk.actions.ready();
        console.log('Farcaster SDK initialized');
      } catch (error) {
        console.error('Failed to initialize Farcaster SDK:', error);
      }
    };

    initFarcaster();
  }, []);

  const handleRefresh = () => {
    setFortune(getRandomFortune(fortuneType));
  };

  const handleTypeChange = (type: 'regular' | 'crypto') => {
    setFortuneType(type);
    setFortune(getRandomFortune(type));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fortune Teller</h1>
        <p className={styles.description}>
          Get your daily dose of inspiration and guidance
        </p>

        <div className={styles.typeSelector}>
          <button 
            className={`${styles.typeButton} ${fortuneType === 'regular' ? styles.active : ''}`}
            onClick={() => handleTypeChange('regular')}
          >
            Daily Fortune
          </button>
          <button 
            className={`${styles.typeButton} ${fortuneType === 'crypto' ? styles.active : ''}`}
            onClick={() => handleTypeChange('crypto')}
          >
            Crypto Fortune
          </button>
        </div>

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
      </div>
    </main>
  );
}
