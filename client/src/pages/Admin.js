import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Admin = () => {
  return (
    <Container className='d-flex flex-column'>
      <Button
        variant='outline-dark'
        className='mt-3 p-3'
      >
        Добавить тип
      </Button>
      <Button
        variant='outline-dark'
        className='mt-3 p-3'
      >
        Добавить брэнд
      </Button>
      <Button
        variant='outline-dark'
        className='mt-3 p-3'
      >
        Добавить устройство
      </Button>
    </Container>
  )
}

export default Admin