import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    locale: 'id_ID',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#fff8ed',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='id'>
      <body>{children}</body>
    </html>
  );
}