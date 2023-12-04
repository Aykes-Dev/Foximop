import { Col, Container, Row } from 'react-bootstrap'
import styles from './index.module.css'
import { pattaya } from '../fonts'

export default function InfoImage() {
    return (
        <Container fluid className={`${styles.bg_info} bg-local h-96 mt-4 w-screen flex items-center`}>
            <Container>
                <Row>
                    <Col
                        sm={7} xs={9} md={5} lg={3}
                        className={
                            `${pattaya.className}
                            me-0 ms-auto text-white text-2xl`
                        }>
                        ПРОФЕССИОНАЛЬНАЯ УБОРКА, МЫТЬЕ ОКОН,
                        ХИМЧИСТКА МЯГКОЙ МЕБЕЛИ И КОВРОВ
                        МОСКВА И ПОДМОСКОВЬЕ
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}