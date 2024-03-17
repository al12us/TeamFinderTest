import { useState, forwardRef } from 'react';
import {
  InputGroup,
  InputRightElement,
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { iconColor, charsMaxLength } from '../lib/constants';
import { Icon, IconContainer, Placeholder } from './index.styled';

export const PasswordInput = forwardRef(({ label, errors, id, ...props }, ref) => {
  const error = errors[id];
  const [show, setShow] = useState(false);
  const handleIconClick = () => setShow((prev) => !prev);

  return (
    <FormControl isInvalid={error}>
      <FormLabel mb='4px' htmlFor={id} userSelect='none'>
        {label}
      </FormLabel>
      <InputGroup>
        <InputRightElement h='100%'>
          <IconContainer>
            <Icon onClick={handleIconClick}>
              {show ? <ViewOffIcon color={iconColor} /> : <ViewIcon color={iconColor} />}
            </Icon>
          </IconContainer>
        </InputRightElement>
        <Input
          {...props}
          id={id}
          ref={ref}
          h='48px'
          type={show ? 'text' : 'password'}
          maxLength={charsMaxLength}
        />
      </InputGroup>
      {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : <Placeholder />}
    </FormControl>
  );
});
