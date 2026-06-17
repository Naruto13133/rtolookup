import './globals.css'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const display = localFont({
  src: [
    { path: '../public/fonts/ChakraPetch-400.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/ChakraPetch-600.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/ChakraPetch-700.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--ff-display',
  display: 'swap',
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
})

const body = localFont({
  src: [
    { path: '../public/fonts/Inter-400.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Inter-500.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Inter-600.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Inter-700.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--ff-body',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const mono = localFont({
  src: [
    { path: '../public/fonts/JetBrainsMono-400.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/JetBrainsMono-600.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/JetBrainsMono-700.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--ff-mono',
  display: 'swap',
  fallback: ['Courier New', 'monospace'],
})

const SITE_URL = 'https://rtolookup.site'
const SITE_NAME = 'RTOLookup'
const SITE_DESC = 'Decode Indian vehicle number plates and RTO codes instantly. Plain-English guides for RC transfer, duplicate RC, and vehicle ownership checks — covering all 1,400+ RTOs across India.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Decode Any Indian Vehicle Number Plate`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: ['RTO code', 'vehicle registration', 'number plate decode', 'RC transfer', 'Parivahan', 'Indian RTO', 'HSRP', 'vehicle owner check'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Decode Any Indian Vehicle Number Plate`,
    description: SITE_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Decode Any Indian Vehicle Number Plate`,
    description: SITE_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESC,
        publisher: { '@id': `${SITE_URL}/#org` },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/rto/{search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
        description: 'A reference resource that explains Indian RTO codes and vehicle registration processes in plain English.',
      },
    ],
  }

  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0E1117" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F4F5F7" media="(prefers-color-scheme: light)" />
        {/* Anti-FOUC: set theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
