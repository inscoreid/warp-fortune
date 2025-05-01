// app/frame/route.ts
import { NextRequest } from "next/server";

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

export const dynamic = 'force-dynamic';

function getBaseUrl(request: NextRequest) {
  return 'https://' + request.headers.get('host');
}

function createImageUrl(text: string) {
  // Используем DiceBear для генерации фона
  const backgroundUrl = "https://api.dicebear.com/7.x/shapes/svg?seed=" + encodeURIComponent(text);
  
  // Используем Imgix для наложения текста на темный фон
  return `https://assets.imgix.net/~text?txt=${encodeURIComponent(text)}&w=800&h=400&txtsize=48&txtcolor=eae0d0&txtfont=Futura&bg=282828&txtclip=end&txtAlign=center,middle&txt-pad=20&blend=overlay&blend-mode=overlay&blend-alpha=100&blend-fit=max&blend-align=center,middle&blend-pad=0&blend-size=contain&blend-repeat=no-repeat&blend-url=${encodeURIComponent(backgroundUrl)}`;
}

function generateHtml(fortune: string, baseUrl: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Daily Fortune</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Required Open Graph tags -->
        <meta property="og:title" content="Daily Fortune" />
        <meta property="og:description" content="Get your daily fortune!" />
        <meta property="og:image" content="${createImageUrl(fortune + ' ✨')}" />
        
        <!-- Farcaster Frame tags -->
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="${createImageUrl(fortune + ' ✨')}" />
        <meta name="fc:frame:button:1" content="✨ New Fortune" />
        <meta name="fc:frame:post_url" content="${baseUrl}/frame" />

        <style>
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            color: #ffffff;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .container {
            text-align: center;
            padding: 2rem;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .fortune {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 1rem;
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }
          .icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            animation: float 3s ease-in-out infinite;
          }
          .buttonGroup {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
          }
          .refreshButton, .shareButton {
            background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
          }
          .refreshButton:hover, .shareButton:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(78, 205, 196, 0.3);
          }
          .cta {
            display: flex;
            justify-content: space-between;
            margin-top: 4rem;
            gap: 1rem;
          }
          .backButton, .tryButton {
            padding: 1rem 2rem;
            border-radius: 2rem;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
          }
          .backButton {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
          }
          .tryButton {
            background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
            color: white;
          }
          .backButton:hover, .tryButton:hover {
            transform: translateY(-2px);
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Daily Fortune</h1>
          <div class="fortune">
            <div class="icon">✨</div>
            <p>${fortune}</p>
            <div class="buttonGroup">
              <button onclick="window.location.reload()" class="refreshButton">
                🔄 New Fortune
              </button>
              <a href="https://warpcast.com/~/compose?text=${encodeURIComponent(`My daily fortune: "${fortune}" - Get yours at `)}" target="_blank" class="shareButton">
                Share on Warpcast
              </a>
            </div>
          </div>
          <div class="cta">
            <a href="/" class="backButton">
              ← Back to Home
            </a>
            <a href="/crypto" class="tryButton">
              Try Crypto Fortune →
            </a>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function GET(request: NextRequest) {
  const fortune = regularFortunes[Math.floor(Math.random() * regularFortunes.length)];
  const baseUrl = getBaseUrl(request);

  return new Response(generateHtml(fortune, baseUrl), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}

export async function POST(request: NextRequest) {
  const fortune = regularFortunes[Math.floor(Math.random() * regularFortunes.length)];
  const baseUrl = getBaseUrl(request);
  
  return new Response(generateHtml(fortune, baseUrl), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}

