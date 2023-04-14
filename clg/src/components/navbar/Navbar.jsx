import { useEffect, useState } from 'react';

export default function Navbar() {

  return (
    
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/logo_kuproy.svg`} alt="Logo" className="h-12  mr-10" />
      </div>
    </nav>
  );
};