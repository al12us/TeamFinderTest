import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Text, Select } from '@chakra-ui/react';
import { FormInput, PasswordInput, OrganizationOptions } from '../components';
import { useFormValidation } from '../lib/useFormValidation';
import { FormContainer, Paragraph, FormHeader, HeaderTitle, AuthContainer } from './index.styled';

const SignupForm = () => {
  const [selected, setSelected] = useState('employee');
  const { handleSubmit, register, errors } = useFormValidation(selected);

  const onSubmit = (values) => console.log(values);

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormHeader>
            <HeaderTitle>
              <Text fontSize='28px' fontWeight='700'>
                Hello
              </Text>
              <Text fontSize='16px' fontWeight='600' color='gray'>
                To sign up, please fill the fields below.
              </Text>
            </HeaderTitle>
            <Select
              w='170px'
              h='32px'
              value={selected}
              {...register('role')}
              onChange={(e) => {
                setSelected(e.target.value);
                register('role').onChange(e);
              }}>
              <option value='admin'>Admin User</option>
              <option value='employee'>Basic User</option>
            </Select>
          </FormHeader>
          <FormInput
            label='Name'
            placeholder='Enter your name'
            errors={errors}
            id='name'
            {...register('name')}
          />
          <FormInput
            label='Email'
            placeholder='Enter your email'
            errors={errors}
            id='email'
            {...register('email')}
          />
          <PasswordInput
            label='Password'
            placeholder='******'
            errors={errors}
            id='password'
            {...register('password')}
          />
          {selected === 'admin' && <OrganizationOptions register={register} errors={errors} />}
          <Button h='48px' mb='16px' colorScheme='blue' type='submit'>
            Sign up
          </Button>
          <Paragraph>
            <Text>Already have an account ?</Text>
            <Link to='/auth/login'>
              <Text color='#0356E8'>Log In</Text>
            </Link>
          </Paragraph>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default SignupForm;
