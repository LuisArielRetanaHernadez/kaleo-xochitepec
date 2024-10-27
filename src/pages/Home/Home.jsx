import './home.style.css'

const cards = [
  {
    id: 1,
    title: 'Familia',
    description: `Que glorioso es estar en una familia grande donde no solo compartirmos
    nuestras sonrisas sino nuestras lagrimas. Una familia donde la union la hace dios`,
    image: 'https://res.cloudinary.com/dqmkovsdy/image/upload/f_auto,q_auto/v1/Kaleo/Header/afxlfkhgvzlzctgwxdsm'
  },
  {
    id: 2,
    title: 'Meditacion',
    description: `Tener un meditacion con el aquel que nos escucha es liberador. 
    
    Jesus digo clame a mi y yo te vendre, beber del agua que nunca de te dara sed.

    Conectaras no solo tu mente, sino tu corazon y espiritu para sembrar la semilla
    que te santificada
    .`,
    image: 'https://res.cloudinary.com/dqmkovsdy/image/upload/f_auto,q_auto/v1/Kaleo/Header/mdk8ftum6f2k3cnd8c4y'
  },
]

const HomeCard = ({ title, description, image }) => {
  return (
    <div className="home__card">

      <div className='home__card-type-content'>
        <h3 className="home__card-title">{title}</h3>
        <p className="home__card-description">{description}</p>
      </div>

      <div className="home__card-type-content-image">
        <img className="home__card-image" src={image} alt={title} />
      </div>
    </div>
  )
}

const HomeCards = () => {
  return (
    cards.map((card) => (
      <HomeCard
        key={card.id}
        title={card.title}
        description={card.description}
        image={card.image}
      />
    ))
  )
}

const Home = () => {
  return (
    <div className="home">
      <h2 className="home__title">{`"Un fin para una nueva historia"`}</h2>
      <div className='home__cards'>
        <HomeCards />
      </div>
    </div>
  )

}

export default Home