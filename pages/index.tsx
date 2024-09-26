
import Hero from '@/components/Hero/Hero';
import Hotels from '@/components/Hotels/Hotels';
import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import TopDestination from '@/components/TopDestination/TopDestination';

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
      <TopDestination />
      {/* Hotels */}
      <Hotels />
    </div>
  );
}
export default Homepage