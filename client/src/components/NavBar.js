import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = () => {
  const { user } = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <NavLink style={{ color: '#fff' }} to={SHOP_ROUTE}>Купи Слона</NavLink>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar