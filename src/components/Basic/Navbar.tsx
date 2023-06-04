'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

import logo from '@/public/logo.svg';
import { Provider } from '@shared/types/auth';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<any>(null);
  
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })()
  }, [])

  return (
    <nav className='navbar'>
      <div className='flex-center gap-2'>
        <Image
          src={logo}
          alt='Website logotype'
          width={40}
          height={40}
        />
        <h3 className='font-bold font-inter'>Weather</h3>
      </div>
      <div className='flex-center'>
        {session ? (
          <div className='flex-center gap-3'>
            <button className='btn'>
              Profile
            </button>
            <Image
              src={session.user.image}
              alt='Website logotype'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
        ) : (
          <div className='flex-center'>
            {providers && 
              Object.values(providers).map((provider: Provider | any) => (
                <button 
                  className='btn' 
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Sign in
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  )
}