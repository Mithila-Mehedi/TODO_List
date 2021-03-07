import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'reactstrap';
import './App.css';
import Todos from './components/Todos'

function App() {
  return (
    <Container>
      <Row>
        <Col>
              <Todos/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
