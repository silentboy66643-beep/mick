import type {Metadata} from 'next';
import {Space_Grotesk, Inter} from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sauchiehall Barbers | Premium Barber Shop in Glasgow',
  description: 'Experience Glasgow\'s trusted barber shop with thousands of five-star reviews, expert barbers, and premium grooming services.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#0B0B0B] text-[#F7F7F7] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
