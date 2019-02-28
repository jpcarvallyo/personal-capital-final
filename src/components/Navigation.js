import React from 'react';
import { navStyle, svgLogo } from '../navStyle';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../css/navigation.css';

class Navigation extends React.Component {

  render() {

    let { color, backgroundColor, justifyContent, marginLeft, marginRight } = navStyle;

    return (
        <Navbar style={{backgroundColor, justifyContent}} fixed="top" expand="lg">
            <Navbar.Brand href="#home" className=""><img alt='Personal Capital Logo' src={svgLogo.src}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav fill variant="pills">
                <Nav.Item>
                  <Nav.Link style={{color}} href="/home">Financial Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color}}>Wealth Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color}}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color}}>Resources</Nav.Link>
                </Nav.Item>
                <Button style={{marginLeft: marginLeft, marginRight: marginRight}}>Login</Button>
                <Button style={{marginLeft: marginLeft, marginRight: marginRight}}>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navigation;