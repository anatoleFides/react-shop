import React from 'react'
import { Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { useHistory } from 'react-router-dom'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts'


const DeviceItem = ({ device }) => {
  const history = useHistory()
  return (
    <Col className='md-3 mb-4' onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ cursor: 'pointer', width: '150px' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className='d-flex justify-content-between aling-items-center mt-2 text-black-50'>
          <div>Apple...</div>
          <div className='d-flex aling-items-center'>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem