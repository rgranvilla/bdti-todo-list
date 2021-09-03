import React, {useState} from 'react';
import {FiPlus} from 'react-icons/fi';

import {Container} from './styles';

import Card from '../Card';
import CardModal from '../CardModal';

export default function List() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Container>
      <header>
        <div className="title-line">
          <h2>To do</h2>

          <div className="counter">
            <p>3</p>
          </div>
        </div>
        <div className="button-line">
          <button type="button" onClick={openModal}>
            <FiPlus />
          </button>
          <CardModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </header>
      <main>
        <ul>
          <Card />
        </ul>
      </main>
    </Container>
  )
}