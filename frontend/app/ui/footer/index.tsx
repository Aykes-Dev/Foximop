'use client'
import { Col, Container, Row } from "react-bootstrap"

export default function Footer() {
    return (
        <footer>
            <Container fluid className="h-12 bg-dark mt-5 pt-2">
                <Row>
                    <Col xs='auto' md='auto' className='m-auto text-white text-xs'>
                        Created by Andrey Savostyanov.
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto' md='auto' className='m-auto text-white text-xs'>
                        ® Foximop 2015-2023.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}