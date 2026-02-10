import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TeluguVoice - The Voice of the People',
  description: 'Breaking news, politics, and entertainment from Andhra Pradesh and Telangana.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} antialiased bg-charcoal-900 text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
