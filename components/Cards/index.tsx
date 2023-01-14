import { FC } from 'react'
import Search from '../Search'

const Cards: FC = () => {
  const style = {
    width: '70%',
    padding: 15,
  }
  const cardContainer = {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-around',
  }
  const cards = [
    {
      title: 'Uno',
      description: 'Uno',
      images: [],
      // '& img': {
      //   maxWidth: ,
      // },
    },
    {
      title: 'Dos',
      description: 'Dos',
      images: [],
      // '& img': {
      //   maxWidth: ,
      // },
    },
    {
      title: 'Tres',
      description: 'Tres',
      images: [],
      // '& img': {
      //   maxWidth: ,
      // },
    },
  ]

  return (
    <div style={style}>
      <Search />
      <div style={cardContainer}>
        {cards.map((e, i) => (
          <div
            key={i}
            style={{
              maxWidth: '30%',
              boxShadow: '1px 1px 4px -2px',
              borderRadius: 10,
            }}>
            <strong style={{ padding: 10 }}>{e.title}</strong>
            <img
              width="100%"
              src="https://www.bbva.ch/wp-content/uploads/2022/05/recurso_mascotas.jpg"
              alt="mural"
            />
            <p style={{ padding: 10 }}>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
