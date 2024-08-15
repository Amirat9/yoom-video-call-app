import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Yoom Video Call Service',
  description: 'A revloution in video calling services',
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='container flex items-center justify-center h-screen'>
      {children}
    </div>
  );
}
