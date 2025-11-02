


export const TapForMetext = ({ isRotate }) => {
  return (
    <ul className={`nav__aside ${!isRotate ? 'open__aside' : ''}`}>
      Тут выпадающий список, кликни на стрелку!
    </ul>
  )
}