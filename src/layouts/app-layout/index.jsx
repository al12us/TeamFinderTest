import Container from './index.styled';

const AppLayout = ({ children }) => {
  return (
    <Container>
      {children}
      <div>navigation</div>
      <div>sidebar</div>
    </Container>
  );
};

export default AppLayout;
