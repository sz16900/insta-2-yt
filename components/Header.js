import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-betweeen bg-white max-w-6xl">
      <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
        <Image src="https://links.papareact.com/ocw" height={500} width={500} />
      </div>
      <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
        <Image src="https://links.papareact.com/jjm" height={500} width={500} />
      </div>
    </div>
  );
}

export default Header;
