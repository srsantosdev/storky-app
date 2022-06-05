import React from 'react';

import LogoApp from '../../assets/images/logo.svg';

import {
  Container,
  ApplicationIDContent,
  ApplicationName,
  Actions,
  Button,
  ButtonText,
} from './styles';

export const Opening: React.FC = () => {
  return (
    <Container>
      <ApplicationIDContent>
        <LogoApp />
        <ApplicationName>Storky</ApplicationName>
      </ApplicationIDContent>

      <Actions>
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Actions>
    </Container>
  );
};
