'use client'

import { Container, Nav, Navbar } from "react-bootstrap";
import { pattaya } from '@/app/ui/fonts';

export default function NavBar() {
    return (
        <Navbar expand="lg" className={`${pattaya.className} bg-body-tertiary `}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/img/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Foximop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                    </Nav>
                    <Nav className="me-0">
                        Телефон: 8 919 996-81-75
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}