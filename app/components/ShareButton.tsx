'use client';

import styles from '../crypto/page.module.css';

interface ShareButtonProps {
  fortune: string;
}

export default function ShareButton({ fortune }: ShareButtonProps) {
  const handleShare = () => {
    const text = `My crypto fortune: "${fortune}" - Get yours at `;
    window.open(`https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`);
  };

  return (
    <button 
      className={styles.shareButton}
      onClick={handleShare}
    >
      Share on Warpcast
    </button>
  );
} 