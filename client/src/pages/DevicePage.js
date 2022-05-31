import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = { id: 1, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' }

  const description = [
    { id: 1, title: 'Цвет', description: 'Темно-серый' },
    { id: 2, title: 'Встроенная память', description: '256 Гб' },
    { id: 3, title: 'Фотокамера', description: '12 + 12 + 12 Мп' },
    { id: 4, title: 'Диагональ', description: '6,5 дюйм' },
    { id: 5, title: 'Процессор', description: 'Apple A13 Bionic' },
    { id: 6, title: 'Количество ядер', description: '2650 МГц' },
    { id: 7, title: 'Частота процессора', description: 'Apple A13 Bionic' },
    { id: 8, title: 'Оперативная память', description: '4 Гб' },
  ]

  return (
    <Container className='mt-3 d-flex flex-column'>
      <Row>
        <Col className='md-4'>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col className='md-4'>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col className='md-4'>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От: {device.price} грн.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2 className='mt-5'>Характеристики</h2>
        {description.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container >
  )
}

export default DevicePage