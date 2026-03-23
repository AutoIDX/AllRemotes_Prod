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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛒</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
