import { Footer } from '../Footer/Footer'
import { NavListOpen } from '../NavList/NavListOpen'
import { NavListOpenAside } from '../NavList/NavListOpenAside/NavListOpenAside'
import './HeaderOpen.css'


export const HeaderOpen = ({ ArrovChange, isRotate }) => {
  return (
    <div className='box__background'>
      <div className="box__header-menu-open">
        <div className="header-open__content">
          <NavListOpen
            ArrovChange={ArrovChange}
            isRotate={isRotate}
          />
          <NavListOpenAside
            isRotate={isRotate}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}
