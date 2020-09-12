import React, { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { gsap, Draggable, CSSPlugin } from 'gsap/all';

import { ReactComponent as Sun } from './images/sunshine.svg';
import { ReactComponent as Polar } from './images/polar.svg';
import { ReactComponent as Rhino } from './images/rhino.svg';

import './App.css';

const plugins = [CSSPlugin]
gsap.registerPlugin(Draggable);

function App() {

  useEffect(() => {
    Draggable.create(".polar-icon",{
      type: "x,y",
      edgeResistance: 0.45,
      bounds: ".polar-box"
    });

    Draggable.create(".rhino-icon",{
      type: "x,y",
      edgeResistance: 0.45,
      bounds: ".rhino-box"
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Container>

        <Row className="row1">
          <Col md={2}>  
            <div className="svg-container">  
              <Sun className="App-logo svg-content"/>  
            </div>        
          </Col>

          <Col className="title" md={10}>
              <h1> Polar vs. Rhino </h1>
          </Col>
        </Row>

        <Row className="row2">
          <Col className="rhino" md={6}>
              <h2> Rhino </h2>
              <div className="svg-container">
                <Rhino className="svg-content"/>
              </div>
          </Col>

          <Col className="polar" md={6}>
              <h2> Polar </h2>
              <div className="svg-container">
                <Polar className="svg-content"/>
              </div>
              <div>
                <ol>
                  <li>
                    <p>Polar Bears eat seals</p>
                  </li>
                  <li>
                    <p>Polar likes to eat 🐟 and 🍓and 🥬</p>
                  </li>
                </ol>
              </div>
          </Col>
        </Row>

      </Container>
      </header>
    </div>
  );
}

export default App;
