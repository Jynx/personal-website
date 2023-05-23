import './globals.css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

const openGraph: OpenGraph = {
  type: 'website',
  url: 'https://www.phteven.io',
  title: 'Steve Volocyk - Software developer, tinkerer, gamer ',
  description: 'I’m Steve, a software engineer and gamer based in of Chicago',
  images: [
    {
      url: 'https://www.phteven.io/personal-avatar.jpg',
    },
  ],
};

const twitter: Twitter = {
  creator: '@Jynx',
  site: '@Jynx',
  card: 'summary_large_image',
  images: 'https://www.phteven.io/personal-avatar.jpg',
  title: 'Steve Volocyk - Software developer, tinkerer, gamer ',
  description: 'I’m Steve, a software engineer and gamer based in of Chicago',
};

export const metadata: Metadata = {
  title: 'Steve Volocyk - Software developer, tinkerer, gamer ',
  description: 'I’m Steve, a software engineer and gamer based in of Chicago',
  colorScheme: 'dark light',
  openGraph: openGraph,
  twitter: twitter,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center bg-zinc-50 dark:bg-black sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
