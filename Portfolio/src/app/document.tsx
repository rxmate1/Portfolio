export const Document: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="no">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portfolio</title>
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body>
      <div id="root">{children}</div>
      <script type="module" src="/src/client.tsx"></script>
    </body>
  </html>
);