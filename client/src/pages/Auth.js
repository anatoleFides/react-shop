import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if (isLogin) {
      const response = await login()
    } else {
      const response = await registration(email, password)
      console.log(response)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: '600px' }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль...'
            value={password} type={password}
            onChange={e => setPassword(e.target.value)}

          />
          <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <Button
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth