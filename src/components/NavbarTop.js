import React, { Component } from 'react';
import logo from '../img/logo512.png';
import { Button, Navbar, Nav} from 'react-bootstrap'

class NavbarTop extends Component {

    render(){
        return(
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Guillaume Bouchard
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#projects">Projets</Nav.Link>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Button variant="primary">Contact Me</Button>
                </Navbar.Collapse>



            </Navbar>
        );
    }


}

export default NavbarTop;