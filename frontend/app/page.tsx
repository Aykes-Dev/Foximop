import { Col, Row, Container } from 'react-bootstrap';
import Price from './ui/price';
import InfoImage from './ui/Info-image';
import { Typography } from '@mui/material';
import Windows from './ui/windows';
import AdditionalServices from './ui/additional-services';
import DryCleaning from './ui/dry-cleaning';


export default function Home() {
  return (
      <main className='container-fluid m-0 p-0'>
        <InfoImage />
        <Container>
          <Row className='mt-5 mb-3'>
            <Col xs='auto'>
            <Typography variant="h4">Наши услуги:</Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <Price />
            </Col>
          </Row>
          <Row className='mt-5 mb-3'>
            <Col xs='auto'>
            <Typography variant="h4">Сезонное мытье окон:</Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <Windows />
            </Col>
          </Row>
          <Row className='mt-5 mb-3'>
            <Col xs='auto'>
            <Typography variant="h4">Дополнительные услуги:</Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <AdditionalServices />
            </Col>
          </Row>
          <Row className='mt-5 mb-3'>
            <Col xs='auto'>
            <Typography variant="h4">Химчистка:</Typography>
            </Col>
          </Row>
          <Row>
            <Col>
              <DryCleaning />
            </Col>
          </Row>
        </Container>
      </main>
  )
}
