import React from 'react';
import Image from 'next/image';
import logo from '@/public/icons/logo.svg';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-primary py-8 px-7 text-white'>
      <div className='flex items-center gap-1'>
        <Image
          src={logo}
          alt='logo icon of the app'
        />
        <h1 className='leaeding-6 text-[26px] uppercase font-extrabold'>
          yoom
        </h1>
      </div>
      <UserButton />
      <Avatar className='mr-20'>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
