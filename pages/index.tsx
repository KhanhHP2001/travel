
import Hero from '@/components/Hero/Hero';
import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';

import React, { useState } from 'react'

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />
      {/* Hero */}
      <Hero />
    </div>
  );
}
export default Homepage