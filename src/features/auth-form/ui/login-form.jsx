import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Text } from '@chakra-ui/react';
import { FormInput, PasswordInput } from '../components';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormInput
            label='Email'
            placeholder='Enter your email'
            errors={errors}
            id='email'
            {...register('email')}
          />
          <PasswordInput
            label='Password'
            placeholder='*******'
            errors={errors}
            id='password'
            {...register('password')}
          />
          <Paragraph>
            <Text>Already have an account ? </Text>
            <Link to='/auth/signup' cursor='pointer'>
              Log In
            </Link>
          </Paragraph>

          <Button h='48px' colorScheme='blue' type='submit'>
            Sign up
          </Button>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default LoginForm;
