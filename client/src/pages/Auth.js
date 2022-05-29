import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Auth = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: '600px' }} className='p-5'>
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email...'
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль...'
          />
          <Button
            className='mt-3 align-self-end'
            variant={"outline-success"}
          >
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth