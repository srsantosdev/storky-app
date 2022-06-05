import React from 'react';

import Icon360 from '../../assets/images/360.svg';

import {
  Container,
  ApplicationIDContent,
  ApplicationName,
  ApplicationDescription,
  Actions,
  Button,
  ButtonText,
} from './styles';

export const Presetation1: React.FC = () => {
  return (
    <Container>
      <ApplicationIDContent>
        <Icon360 />
        <ApplicationName>Seguro em 360º</ApplicationName>
        <ApplicationDescription>
          Usando Storky você tem 100% de segurança. Isto é porque seus pais
          sempre saberão quem são seus amigos.
        </ApplicationDescription>
      </ApplicationIDContent>

      <Actions>
        <Button>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </Actions>
    </Container>
  );
};
