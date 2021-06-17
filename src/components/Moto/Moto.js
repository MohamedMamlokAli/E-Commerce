import React from 'react';
import MotoCard from '../side/MotoCard';
import ExploreIcon from '@material-ui/icons/Explore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Moto = () => {
  return (
    <section id='moto' className='lg:px-48 py-20 bg-red-100'>
      <div className='header__div flex flex-col items-center text-center lg:flex-row lg:text-left'>
        <h1 className=' flex-1 text-4xl font-bold text-gray-800 my-4 lg:my-0'>
          Custom Furniture <br /> Built Only For You
        </h1>
        <p className='flex-1 text-gray-700 w-5/6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div
        id='cards'
        className='flex flex-col lg:flex-row flex-wrap justify-around items-center w-full'
      >
        <MotoCard
          name='Mission'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          icon={<ExploreIcon style={{ fontSize: '40px' }} />}
        />
        <MotoCard
          name='Vision'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          icon={<VisibilityIcon style={{ fontSize: '40px' }} />}
        />
        <MotoCard
          name='History'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          icon={<MenuBookIcon style={{ fontSize: '40px' }} />}
        />
      </div>
    </section>
  );
};

export default Moto;
