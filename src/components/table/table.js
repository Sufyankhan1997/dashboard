import React from 'react';
import './table.css';
import Button from 'react-bootstrap/Button';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';


export default()=>{
    return(
        <div className = "table_sub float-left w-100">
            <div className="head float-left w-100">
                <h1>Administrator</h1>
                <Button variant="primary">Create</Button>
            </div>
            <div className= "table-nav float-left w-100">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* sufyan */}
            </div>
        </div>
    )
}