import BaseLayout from '../base-layout';
import { ImageContainer } from './index.styled';
import lockImage from 'src/common/assets/team-finder-sign-up-image.svg';

const AuthLayout = () => {
  return (
    <BaseLayout navigationSlot={<nav />}>
      <ImageContainer src={lockImage} />
    </BaseLayout>
  ); // todo add auth navigation component
};

export default AuthLayout;
