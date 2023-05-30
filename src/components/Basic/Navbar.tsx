import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function Navbar() {
  const isSignedIn = false;
  
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
        {isSignedIn ? (
          <div className='flex-center gap-3'>
            <button className='btn'>
              Profile
            </button>
            <Image
              src={logo}
              alt='Website logotype'
              width={40} 
              height={40} 
            />
          </div>
        ) : (
          <div className='flex-center'>
            <button className='btn'>
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}