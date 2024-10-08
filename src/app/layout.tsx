import React, { ReactNode } from 'react';
import RootLayout from './RootLayout'; // Server component
import ClientLayout from './ClientLayout'; // Client component

interface LayoutProps {
  children: ReactNode; 
}

export default function Layout({ children }: LayoutProps) {
  return (
    <RootLayout>
      <ClientLayout>
        {children}
      </ClientLayout>
    </RootLayout>
  );
}
