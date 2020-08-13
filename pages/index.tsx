import React from 'react';
import Button from '../src/components/global/Button/Button';

const Home = () => {
  return (
    <div className='m-16 '>
      <Button className='bg-primary-700 text-white rounded-full mx-4'>
        Primary
      </Button>

      <Button className='rounded-lg border-gray-900' variant='outline'>
        Outline
      </Button>
    </div>
  );
};

export default Home;
