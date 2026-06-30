const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>nottath</title>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #fafafa;
      color: #222;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      gap: 0.4rem;
    }
    .name {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      font-weight: 500;
      letter-spacing: -0.03em;
    }
    .twitter {
      font-size: clamp(0.85rem, 2.5vw, 1rem);
      color: #222;
      text-decoration: none;
      opacity: 0.5;
      transition: opacity 0.15s;
    }
    .twitter:hover { opacity: 1; }
  </style>
</head>
<body>
  <p class="name">nottath.com</p>
  <a class="twitter" href="https://x.com/nottath" target="_blank" rel="noopener">@nottath</a>
</body>
</html>`;

export default {
  async fetch() {
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
