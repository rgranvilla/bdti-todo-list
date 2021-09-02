import React from 'react';
import {FiPlus} from 'react-icons/fi';

import {Container} from './styles';

export default function List() {
  return (
    <Container>
      <header>
        <div className="title-line">
          <h1>To do</h1>

          <div className="counter">
            <p>3</p>
          </div>
        </div>
        <div className="button-line">
          <button type="button">
            <FiPlus size={24} color="var(--txt-content)"/>
          </button>
        </div>
      </header>
    </Container>
  )
}