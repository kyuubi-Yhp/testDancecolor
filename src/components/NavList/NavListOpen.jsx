import './NavListOpen.css'


export const NavListOpen = ({ ArrovChange, isRotate }) => {
  return (
    <div className='box__navList-open'>
      <ul className="nav__list-open">
        <li 
      onClick={ArrovChange}
      className={`li__arrov ${isRotate ? 'arrov__active' : ''}`}>Услуги</li>
        <li>Экскурсии</li>
        <li>Новости</li>
        <li>О центре</li>
        <li>Контакты</li>
      </ul>
    </div>
  )
}