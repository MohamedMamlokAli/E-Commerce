import React from 'react';
import Button from '../Buttons/Button';
import img1 from '../images/hero-lg.jpg';
import img2 from '../images/hero-sm.jpg';

const Hero = () => {
  return (
    <section id='hero' className='pl-5 mt-20 h-screen'>
      <div
        id='hero__container'
        className='flex  flex-row justify-between  max-w-6xl mx-auto h-4/6'
      >
        <div
          id='hero__left__side'
          className='max-w-2xl flex flex-col justify-center flex-1 '
        >
          <h1 className='text-3xl lg:text-6xl font-bold tracking-wide text-gray-800'>
            Design your<br></br>
            <span className='mt-2 block'>comfort zone</span>
          </h1>
          <p className='text-gray-400 text-base lg:text-lg leading-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel
            quod illum aliquid repudiandae distinctio dolorum eius quibusdam
            repellat quaerat commodi quidem incidunt neque accusamus, autem
            possimus accusantium. Itaque, quia!
          </p>
          <Button name='SHOP NOW' />
        </div>
        <div
          id='hero__right__side'
          className='relative hidden lg:flex flex-1 justify-end'
        >
          <img
            className='  object-contain absolute right-0 h-full'
            src={img1}
            alt=''
          />
          <img
            src={img2}
            alt=''
            className='w-32 h-24 absolute bottom-0 left-0 object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
