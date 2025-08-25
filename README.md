<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>CarryMinati — Roast Bot | README</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root{
      --bg:#0b0b10;
      --card:#141420;
      --ink:#e9e9f1;
      --muted:#a6a6bb;
      --accent:#ff4d4f;
      --accent2:#7c4dff;
      --ring:rgba(255,77,79,.25);
      --code:#0f111a;
      --code-ink:#e6e9ef;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
      color:var(--ink);
      background: radial-gradient(1200px 600px at 10% -10%, rgba(124,77,255,.25), transparent),
                  radial-gradient(1000px 500px at 120% 10%, rgba(255,77,79,.15), transparent),
                  var(--bg);
      line-height:1.6;
      padding: 40px 20px;
    }
    .wrap{max-width:980px;margin:0 auto}
    .card{
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01)) , var(--card);
      border:1px solid rgba(255,255,255,.06);
      border-radius:16px;
      padding:28px;
      box-shadow:0 10px 30px rgba(0,0,0,.35);
    }
    h1,h2,h3{line-height:1.2;margin: 0.2em 0 0.5em}
    h1{font-size: clamp(28px, 5vw, 44px);}
    h2{font-size: clamp(20px, 3vw, 28px); margin-top:1.2em}
    p{margin:0.4em 0 1em;color:var(--ink)}
    .muted{color:var(--muted)}
    .badges{display:flex;gap:8px;flex-wrap:wrap;margin:.6em 0 1.2em}
    .badge{
      font-size:12px;
      padding:6px 10px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.14);
      background:rgba(255,255,255,.04);
    }
    .links{display:flex;gap:12px;flex-wrap:wrap;margin:14px 0 22px}
    .btn{
      padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.14);
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
      color:var(--ink); text-decoration:none; font-weight:600;
      transition:.18s transform, .18s box-shadow, .18s border-color;
      display:inline-flex; align-items:center; gap:8px;
    }
    .btn:hover{transform:translateY(-1px); box-shadow:0 10px 24px var(--ring); border-color:var(--accent)}
    .btn.primary{background:linear-gradient(180deg, rgba(255,77,79,.25), rgba(255,77,79,.12)); border-color:var(--accent)}
    .btn.secondary{background:linear-gradient(180deg, rgba(124,77,255,.22), rgba(124,77,255,.10)); border-color:var(--accent2)}
    .grid{display:grid; gap:16px}
    @media(min-width:800px){ .grid.two{grid-template-columns:1fr 1fr} }
    .callout{
      border-left:4px solid var(--accent);
      padding:10px 14px; background:rgba(255,77,79,.08); border-radius:8px;
    }
    code, pre{
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      background: var(--code); color: var(--code-ink);
      border:1px solid rgba(255,255,255,.08); border-radius:12px;
    }
    code{padding:2px 6px}
    pre{padding:14px; overflow:auto}
    .list{padding-left:18px; margin:.4em 0 1em}
    .kicker{color:var(--accent); font-weight:800; letter-spacing:.08em; text-transform:uppercase; font-size:12px}
    .hr{height:1px;background:linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent); margin:20px 0}
    .foot{font-size:12px;color:var(--muted);margin-top:20px}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="kicker">Wreckathon • Oblivion'25 • d’Code NSUT</div>
      <h1>🎤 CarryMinati — The Roast Bot You Never Knew You Needed 🔥</h1>

      <div class="badges">
        <span class="badge">Team: <strong>Code Crushers</strong></span>
        <span class="badge">Made for: <strong>Wreckathon</strong></span>
        <span class="badge">Stack: <strong>Next.js + Tailwind</strong></span>
        <span class="badge">Deploy: <strong>Vercel</strong></span>
      </div>

      <div class="links">
        <a class="btn primary" href="https://carry-minati.vercel.app/" target="_blank">🚀 Live Demo</a>
        <a class="btn secondary" href="https://github.com/Aafreen18/CarryMinati" target="_blank">💻 GitHub Repo</a>
        <a class="btn" href="https://unstop.com/hackathons/wreckathon-oblivion25-dcode-nsut-1533528" target="_blank">🏆 Hackathon Page</a>
      </div>

      <h2>🧩 About the Project</h2>
      <p>
        Ever wished CarryMinati himself could roast you for your <em>life choices</em>, <em>love life</em>, or those <em>cringe one-liners</em>?  
        We made it happen. This chatbot channels India’s roast king: ask about love, life, or relationships and get <strong>brutally honest burns</strong> that hit harder than your semester results.
      </p>

      <div class="grid two">
        <div>
          <h2>🚀 Features</h2>
          <ul class="list">
            <li><strong>Instant Roasts</strong> — Savage replies at lightning speed.</li>
            <li><strong>Relationship Advisor 😈</strong> — Brutal honesty, zero sugarcoating.</li>
            <li><strong>Creative Edge</strong> — Fun, desi, and built for hackathon vibes.</li>
            <li><strong>CarryMinati Energy</strong> — Savage + entertaining at the same time.</li>
          </ul>
        </div>
        <div>
          <h2>🛠 Tech Stack</h2>
          <ul class="list">
            <li><strong>Frontend:</strong> Next.js + Tailwind CSS</li>
            <li><strong>Deployment:</strong> Vercel</li>
            <li><strong>Tone:</strong> Roast-first, advice-later 😅</li>
          </ul>
        </div>
      </div>

      <div class="hr"></div>

      <h2>👥 Team — <em>Code Crushers</em></h2>
      <ul class="list">
        <li>🧑‍💻 <strong>Yashika</strong> — Coder • Roast victim #1</li>
        <li>👩‍💻 <strong>Aafreen</strong> — Designer • Roast supplier</li>
        <li>👨‍💻 <strong>Krishna</strong> — Debugger • Roast survivor</li>
      </ul>

      <h2>📸 Sneak Peek</h2>
      <div class="callout">
        <em>“Bhai tu advice lene aaya hai ya apne future loneliness ka trailer dekhne?”</em>
      </div>

      <h2>🏁 Quickstart (Local)</h2>
      <pre><code># Clone the repo
git clone https://github.com/Aafreen18/CarryMinati.git

# Enter folder
cd CarryMinati

# Install deps
npm install

# Start dev server
npm run dev
</code></pre>

      <h2>🏆 Built for Wreckathon (Oblivion'25)</h2>
      <p>
        Created for an online hackathon — a mix of creativity, coding, and CarryMinati vibes.  
        If we win, the bot promised not to roast us for a week. <strong>(Let’s see 🤞)</strong>
      </p>

      <h2>🎉 Acknowledgments</h2>
      <ul class="list">
        <li>CarryMinati — for inspiring spicy comebacks.</li>
        <li>Hackathon spirit — kept us motivated throughout.</li>
        <li>Our teamwork — crushed it like Code Crushers do 💪.</li>
      </ul>

      <p class="foot">© Team Code Crushers — Yashika • Aafreen • Krishna</p>
    </div>
  </div>
</body>
</html>
