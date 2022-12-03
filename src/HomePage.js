import React from 'react'
import CreationsDesktop from './components/CreationsDesktop'
import CreationsMobile from './components/CreationsMobile'

import Interactive from './components/Interactive'
import Showcase from './components/Showcase'


const HomePage = () => {
  return (

 <>
     
      <Showcase />
      <Interactive/>
      <CreationsMobile />
      <CreationsDesktop /> 
       
</>
    
    
  )
  
}

export default HomePage