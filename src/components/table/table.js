import React from 'react';
import './table.css';
import Button from 'react-bootstrap/Button';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt,faEye} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";



export default()=>{
    return(
        <div className = "table_sub float-left w-100">
            <div className="head float-left w-100">
                <h1>Administrator</h1>
                <Link to = "/header">
                    <Button variant="primary">Create</Button>
                </Link>
            </div>
            <div className= "table-nav float-left w-100">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">All Admin Record</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Select Admin Status" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className = "table-data float-left w-100">
            <Table bordered>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>User Type</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>SUFYAN</td>
                <td>sufyan0011@gmail.com</td>
                <td>Enable</td>
                <td>super Admin</td>
                <td><a href="#"> <FontAwesomeIcon icon={faPencilAlt} /></a><a href="#"> <FontAwesomeIcon icon={faTrashAlt} /></a><a href="#"> <FontAwesomeIcon icon={faEye} /></a> </td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )
}