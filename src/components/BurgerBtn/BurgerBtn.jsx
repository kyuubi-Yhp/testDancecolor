import './BurgerBtn.css'


export const BurgerBtn = ({ isOpen ,BurgerBtnChange }) => {
  return (
    <button className='box__btn'
      onClick={BurgerBtnChange}>
      <span className={`burger__btn ${isOpen ? 'burger__btn-open' : 'burger__btn-close'}`}
      ></span>
    </button>
  )
}