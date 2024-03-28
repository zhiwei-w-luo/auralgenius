import type { Metadata } from 'next';
import './globals.css';
import ConvexClientProvider from './ConvexClientProvider';
import Footer from '@/components/ui/Footer';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

let title = 'AuralGenius - Take notes with your voice';
let description = 'Generate action items from your notes in seconds';
let url = 'https://auralgenius.com';
let ogimage = 'https://auralgenius.com/images/og-image.png';
let sitename = 'AuralGenius.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/agicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {children}
          <Analytics />
          <Footer />
          <Toaster position="bottom-left" reverseOrder={false} />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
