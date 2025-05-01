import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Crypto Fortune</h1>
        <p className={styles.description}>
          Get your daily crypto and life predictions!
        </p>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Daily Fortune</h2>
            <p>Get your personal fortune for today</p>
            <a href="/frame" className={styles.button}>Try Fortune Frame</a>
          </div>
          
          <div className={styles.feature}>
            <h2>Crypto Predictions</h2>
            <p>Special predictions for crypto traders</p>
            <a href="/crypto" className={styles.button}>View Crypto Fortunes</a>
          </div>
          
          <div className={styles.feature}>
            <h2>Share Fortune</h2>
            <p>Share your fortune on Warpcast</p>
            <a href="https://warpcast.com/~/compose?text=Get%20your%20fortune%20at%20" 
               className={styles.button}>Share</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>Made for Warpcast with ❤️</p>
          <div className={styles.social}>
            <a href="https://warpcast.com/incoreid" target="_blank" rel="noopener noreferrer">
              Follow on Warpcast
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
