import React from 'react';
import Navbar from '../Header/Navbar';
import Hero from '../Hero Section/Hero';
import Featured from '../Featured/Featured';
import Moto from '../Moto/Moto';
import NewsLetter from '../Newsletter/NewsLetter';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Moto />
      <NewsLetter />
    </main>
  );
};

export default Home;
