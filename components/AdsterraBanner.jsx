'use client'

export default function AdsterraBanner({ className = '' }) {
  const adHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : '7df90fe5abb39b8251ede5f36a781904',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://www.highrevenueformat.com/7df90fe5abb39b8251ede5f36a781904/invoke.js"></script>
  </body>
</html>`

  return (
    <div
      className={`ad-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '28px 0',
        minHeight: '275px',
      }}
    >
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-muted, #7A8499)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '6px',
        }}
      >
        Advertisement
      </span>
      <div
        style={{
          width: '300px',
          height: '250px',
          overflow: 'hidden',
          borderRadius: 'var(--r-md, 8px)',
          border: '1px solid var(--tarmac-border, #242938)',
          background: 'var(--tarmac-surface, #141824)',
        }}
      >
        <iframe
          title="Sponsored Advertisement"
          srcDoc={adHtml}
          width="300"
          height="250"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
        />
      </div>
    </div>
  )
}
