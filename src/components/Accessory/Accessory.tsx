import React, { FC } from 'react';

//types
import { AccessoryProps } from './types';

//styles
import { Container, Name } from './styles';

export const Accessory: FC<AccessoryProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}