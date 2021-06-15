import React from 'react';
import Button from '../Buttons/Button';
import img1 from '../images/hero-lg.jpg';
import img2 from '../images/hero-sm.jpg';

const Hero = () => {
  return (
    <section id='hero' className='pl-5 mt-20'>
      <div
        id='hero__container'
        className='flex flex-row justify-between max-w-6xl mx-auto'
      >
        <div id='hero__left__side' className='space-y-8 max-w-2xl '>
          <h1 className='text-3xl lg:text-6xl font-bold tracking-wide'>
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
        <div id='hero__right__side' className='w-4/6 relative hidden lg:block'>
          <img
            className='w-full h-full object-contain inline-block absolute right-20'
            src={img1}
            alt=''
          />
          <img
            className='inline-block absolute bottom-0 w-32  left-0'
            src={img2}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
