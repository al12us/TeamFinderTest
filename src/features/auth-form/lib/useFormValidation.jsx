import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object({
  name: yup
    .string()
    .max(45, 'Name must be at most 45 characters')
    .required('Name is required field.'),
  email: yup
    .string()
    .email('Email must be a valid one.')
    .max(45, 'Email must be at most 45 characters')
    .required('Email is required field.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 3 characters')
    .max(45, 'Password must be at most 45 characters')
    .required('Password is required field.'),
});

const loginAdminSchema = yup.object({
  organization_name: yup
    .string()
    .min(3, 'Organization name must be at least 3 characters')
    .max(45, 'Organization name must be at most 45 characters')
    .required('Organization name is required field.'),
  headquarter_address: yup.string().optional(),
});

export const useFormValidation = (selected) => {
  const selectedSchema =
    selected === 'employee' ? loginSchema : loginSchema.concat(loginAdminSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(selectedSchema),
  });

  return { register, handleSubmit, errors };
};
