import { FormInput } from '../form-input';

export const OrganizationOptions = ({ register, errors }) => {
  return (
    <>
      <FormInput
        label='Organization name'
        placeholder='Enter your organization name'
        errors={errors}
        id='organization_name'
        {...register('organization_name')}
      />
      <FormInput
        label='Headquarter address'
        placeholder='Enter your headquarter address'
        errors={errors}
        id='headquarter_address'
        {...register('headquarter_address')}
      />
    </>
  );
};
