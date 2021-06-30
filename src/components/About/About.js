import React from 'react';
import img1 from '../images/hero-lg.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section id='about' className=' '>
      <div className='bg-store flex items-center justify-center mb-8 py-16 '>
        <h3 className='w-4/6 text-3xl font-extrabold'>
          <Link
            to='/'
            className='text-price transition hover:text-gray-700 ease-in-out'
          >
            Home
          </Link>{' '}
          / About
        </h3>
      </div>
      <div className='h-full'>
        <div className='flex flex-col  lg:flex-row lg:justify-between items-start w-5/6 mx-auto my-20 lg:my-20 space-y-6 lg:space-x-8'>
          <div id='about__left' className='lg:h-4/6 h-96 lg:flex-1'>
            <img className='w-full max-h-full object-cover' src={img1} alt='' />
          </div>
          <div id='about__right' className='flex-1'>
            <h1 className='text-3xl lg:text-4xl font-bold tracking-wide text-gray-700 '>
              Our Story
              <div className='w-3/12 border-b-4 my-2 border-store'></div>
            </h1>
            <p className='text-gray-400 text-base lg:text-md leading-6 tracking-wider my-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
