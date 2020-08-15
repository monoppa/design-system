import React from 'react';
import Button from '../src/components/global/Button/Button';
import TextInput from '../src/components/global/Input/TextInput';

const Home = () => {
  return (
    <div className='m-16 '>
      <section className='mb-8'>
        <TextInput
          name='name'
          label='Name'
          // error='Please enter your name'
          placeholder='Your name'
        />
      </section>

      <section>
        <Button className='mx-4 text-white rounded-full bg-gradient-primary-700'>
          Gradient
        </Button>

        <Button
          className='mx-4 text-white rounded-full bg-gradient-primary-700'
          disabled
        >
          Gradient
        </Button>

        <Button className='mx-4 text-white rounded-full bg-primary-700'>
          Primary
        </Button>

        <Button
          className='mx-4 text-white rounded-full bg-primary-700'
          disabled
        >
          Primary
        </Button>

        <Button className='mx-4 text-white rounded-lg bg-secondary-700'>
          secondary
        </Button>

        <Button className='mx-4 border-gray-900 rounded-lg' variant='outline'>
          Outline
        </Button>

        <Button
          className='border-gray-900 rounded-lg'
          variant='outline'
          disabled
        >
          Outline
        </Button>
      </section>
    </div>
  );
};

export default Home;
