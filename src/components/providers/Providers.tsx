import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoPlacement: 'inside',
          logoImageUrl: '/icons/logo.svg',
        },
        variables: {
          colorPrimary: '#0e78f9',
          colorBackground: '#1c1f2e',
          colorText: 'white',
          colorInputBackground: '#252a41',
          colorInputText: 'white',
        },
      }}>
      {children}
    </ClerkProvider>
  );
};

export default Providers;
