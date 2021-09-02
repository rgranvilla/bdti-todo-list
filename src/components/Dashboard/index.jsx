import React from 'react';

import {Container} from './styles';

import List from '../List';

export default function Dashboard() {
  return (
    <Container>
      <List />
      <List />
      <List />
    </Container>
  )
}