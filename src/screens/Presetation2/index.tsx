import React from 'react';

import LogoApp from '../../assets/images/logo.svg';

import {
  Container,
  ApplicationIDContent,
  ApplicationName,
  ApplicationDescription,
  Actions,
  Button,
  ButtonText,
} from './styles';

export const Presetation2: React.FC = () => {
  return (
    <Container>
      <ApplicationIDContent>
        <LogoApp />
        <ApplicationName>Protegido, mas ainda livre</ApplicationName>
        <ApplicationDescription>
          Na verdade, o Storky permite que você fique seguro enquanto mantém
          toda a diversão de uma rede social.
        </ApplicationDescription>
      </ApplicationIDContent>

      <Actions>
        <Button>
          <ButtonText>Proximo</ButtonText>
        </Button>
      </Actions>
    </Container>
  );
};
