import React, { FC } from 'react'
import Cards from '../components/Cards'
import Container from '../components/Container'
import Map from '../components/Map'

const Home: FC = () => {
  return (
    <Container>
      <Cards />
      <Map />
    </Container>
  )
}

export default Home
