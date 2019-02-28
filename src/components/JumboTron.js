import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/jumbotron.css';
const phones = require('../imgs/phones.png');


class JumboTron extends React.Component {
   render () {

     return (
       <Jumbotron>
         <Row className="justify-content-md-center">
           <Col lg='5'>
             <img alt='photos' src={phones} style={{width: '100%'}}/>
           </Col>
           <Col lg='5' className="align-self-center">
             <h1>Track and Manage Your Money</h1>
             <p style={{}}>
             Get the most advanced technology in personal finance, now available to everyone.
             </p>
             <Button>Sign Up for Free Tools</Button>
           </Col>
         </Row>
       </Jumbotron>
     )
   }
}

export default JumboTron;