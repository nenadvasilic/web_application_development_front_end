import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Container>
      <FontAwesomeIcon icon={ faHome } /> Home
    </Container>
  );
}

export default App;

// yarn start - da bismo videli (pokrenuli) našu aplikaciju!
