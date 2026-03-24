import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AllRemotes | Premium Australian Remote Controls - Coming Soon',
  description: "AllRemotes is Australia's leading store for garage door, car, and gate remote controls. 12-month warranty & free shipping across Australia.",
  keywords: "remote controls, garage door remotes, car remotes, gate remotes, replacement key fob, automotive remotes, AllRemotes Australia",
  authors: [{ name: "AllRemotes Australia" }],
  creator: "AllRemotes",
  openGraph: {
    title: 'AllRemotes | Premium Australian Remote Controls',
    description: "Australia's leading store for garage door, car, and gate remote controls. Free AU shipping and 12-month warranty.",
    url: 'https://allremotes.com.au',
    siteName: 'AllRemotes',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'AllRemotes Australia - Premium Remote Controls',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllRemotes | Premium Australian Remote Controls',
    description: "Australia's leading store for garage door, car, and gate remote controls.",
    images: ['/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
