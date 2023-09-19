// import React, { useContext } from 'react'
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productContext';
// import { AppContext } from './context/productContext';

const About = () => {
  const {myName} = useProductContext();

  const data = { name: "Shopsy Mart" }

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  )
}

export default About;