import './NavListOpenAside.css'
import { TapForMetext } from './TapForMeText'


export const NavListOpenAside = ({ isRotate }) => {
  return (
    <div className='box__nav-aside'>
        {/* <TapForMetext 
        isRotate={isRotate}
        /> */}
      <ul className={`nav__aside ${isRotate ? 'open__aside' : ''}`}>
      <li>Аренда павильонов и студий</li>
      <li>Аренда светового оборудования</li>
      <li>Декорации и сценография</li>
      <li>Монтаж видео и звука</li>
      <li>Выдача программ </li>
      <li>Дата-центр</li>
      <li>Реклама в центре</li>
      </ul>
    </div>
  )
}