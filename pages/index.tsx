import React, { useState } from 'react';
import Button from '../src/components/global/Button/Button';
import TextInput from '../src/components/global/Input/TextInput';
import Select from '../src/components/global/Input/Select';
import SelectItem from '../src/components/global/Input/SelectItem';

const Home = () => {
  const [selectValue, selectValueSet] = useState('');

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    selectValueSet(event.currentTarget.value);
  };

  return (
    <div className='m-16 '>
      <section className='mb-8'>
        <TextInput
          name='name'
          label='Name'
          // error='Please enter your name'
          placeholder='Your name'
        />

        <Select
          name='hello'
          value={selectValue}
          label='Please select something'
          // error='Please enter your name'
          onChange={handleSelectChange}
          required
        >
          <SelectItem value='first'>First</SelectItem>
          <SelectItem value='second'>Second</SelectItem>
        </Select>
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

        <Button
          className='mx-4 bg-white border-gray-900 rounded-lg'
          variant='outline'
        >
          Outline
        </Button>

        <Button
          className='bg-white border-gray-900 rounded-lg'
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
