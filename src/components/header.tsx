import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-end py-3 px-6">
      <Link href="/">
        <a className="pr-3">Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
};

export default Header;
