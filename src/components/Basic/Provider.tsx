'use client'

import { LayoutProps } from '@shared/types/layout';
import { SessionProvider } from 'next-auth/react';

export default function Provider({ children, session }: LayoutProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}