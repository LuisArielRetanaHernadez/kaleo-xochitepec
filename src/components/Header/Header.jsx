import './header.style.css'
const Header = () => {
  return (
    <div className="header">
      <div className='header__container'>
        <h1 className='title header__title'>Kaleo</h1>
        <div className='header__content'>
          <p className='header__word'>{"Te estabamos esperando !. Eres la joya perdida que hacia falta"}</p>
        </div>
      </div>

      <div className='header__content-video'>
        <img className='header__video' src='https://res.cloudinary.com/dqmkovsdy/image/upload/f_auto,q_auto/v1/Kaleo/Header/rwcyaqjquyn670jjuwg0'></img>
      </div>
      <span className='down-arrow down-arrow_type-efect header__down-arrow'>baja</span>

    </div>
  )

}

export default Header