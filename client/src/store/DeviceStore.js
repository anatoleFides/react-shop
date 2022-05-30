import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 2, name: 'Смартфоны' },
      { id: 4, name: 'Холодильники' },
      { id: 5, name: 'Телевизоры' },
      { id: 6, name: 'Стиральные машины' },
      { id: 7, name: 'Ноутбуки' },
    ]
    this._brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'ASUS' },
      { id: 5, name: 'Acer' },
      { id: 6, name: 'Simens' },
      { id: 7, name: 'Indesit' },
    ]
    this._devices = [
      { id: 1, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' },
      { id: 2, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' },
      { id: 3, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' },
      { id: 4, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' },
      { id: 5, name: '11 pro max', price: '25000', rating: '3', img: 'https://hotline.ua/img/tx/239/2391548025.jpg' }
    ]

    this._selectedType = {}

    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}