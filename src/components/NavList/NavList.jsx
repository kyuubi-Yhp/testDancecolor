import './NavList.css'


export const NavList = () => {
  return (
    <div className='box__nav'>
      <ul className="nav__list">
        <li className='nav__item'>Услуги</li>
        <li className='nav__item'>Экскурсии</li>
        <li className='nav__item'>Новости</li>
        <li className='nav__item'>О центре</li>
        <li className='nav__item'>Контакты</li>
      </ul>
    </div>
  )
}