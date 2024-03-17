import { forwardRef } from 'react';
import { FormLabel, FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { charsMaxLength } from '../lib/constants';
import { Placeholder } from './index.styled';

export const FormInput = forwardRef(({ label, id, errors, ...props }, ref) => {
  const error = errors[id];

  return (
    <FormControl isInvalid={error}>
      <FormLabel mb='4px' htmlFor={id} userSelect='none'>
        {label}
      </FormLabel>
      <Input {...props} id={id} ref={ref} h='48px' maxLength={charsMaxLength} />
      {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : <Placeholder />}
    </FormControl>
  );
});
