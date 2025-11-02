import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { HeaderOpen } from './components/Header/HeaderOpen'
import { BurgerBtn } from './components/BurgerBtn/BurgerBtn'

function App() {
  const [isOpen, setIsOpen] = useState(false) // состояние бургер
  const [isRotate, setIsRotate] = useState(false) // состояние стрелочки
// функция управления кнопкой бургер меню
  const BurgerBtnChange = () => {
    setIsOpen(prev => !prev)
    console.log(isOpen)
  }
// функция управления стрелочкой 
  const ArrovChange = () => {
    setIsRotate(prev => !prev)
    console.log(isRotate)
  }

  return (
    <div className="box">
      <div className={`box__header-close ${isOpen ? 'hidden' : 'visible'}`}>
        <Header />
      </div>

      <div className={`box__header-open ${isOpen ? 'visible' : 'hidden'}`}>
        <HeaderOpen
          ArrovChange={ArrovChange} 
          isRotate={isRotate}/>
      </div>

      <BurgerBtn
        BurgerBtnChange={BurgerBtnChange}
        isOpen={isOpen}
      />
    </div>
  )
}

export default App
