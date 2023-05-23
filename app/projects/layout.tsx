import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Steve Volocyk ',
  description: 'Projects I have built or worked on',
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
