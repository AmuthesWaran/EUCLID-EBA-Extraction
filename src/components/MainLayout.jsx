import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MainLayout = () => {

    const navigate = useNavigate()

    const simpleTable = () => {
        navigate('/')
    }

    const reactDTC = () => {
        navigate('/react-data-table')
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Euclid-EBA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link onClick={simpleTable} >Simple Table</Nav.Link>
                            <Nav.Link onClick={reactDTC} >React Data Table Component</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default MainLayout