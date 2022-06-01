import React, { useContext, useState } from 'react'
import Modal from "react-bootstrap/Modal"
import { Form, Button, Dropdown } from "react-bootstrap"
import { Context } from "../../index"

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const { info, setInfo } = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map(type =>
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='mt-3'>
          <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map(brand =>
              <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          className='mt-3'
          placeholder='Добавить название устройства'
        />
        <Form.Control
          className='mt-3'
          placeholder='Добавить стоимость устройства'
          type='number'
        />
        <Form.Control
          className='mt-3'
          type='file'
        />
        <Button
          className='mt-3'
          variant='outline-dark'
          onClick={addInfo}
        >
          Добавить новое свойство
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice