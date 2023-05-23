import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Steve Volocyk ',
  description: 'I’m Steve, a software engineer and gamer based in of Chicago',
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
