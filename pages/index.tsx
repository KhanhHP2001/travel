
import Adventure from '@/Components/Adventure/Adventure';
import Hero from '@/Components/Hero/Hero';
import Hotels from '@/Components/Hotels/Hotels';
import MobileNav from '@/Components/Navbar/MobileNav';
import Navbar from '@/Components/Navbar/Navbar';
import TopDestination from '@/Components/TopDestination/TopDestination';

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
      <Adventure />
      {/* Hotels */}
      <Hotels />
    </div>
  );
}
export default Homepage