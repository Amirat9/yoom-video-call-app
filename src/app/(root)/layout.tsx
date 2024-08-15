import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'Yoom Video Call Service',
  description: 'A revloution in video calling services',
};

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <div>sider</div>
      {children}
    </div>
  );
}
