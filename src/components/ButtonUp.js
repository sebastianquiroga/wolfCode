import React from 'react'
import { useState } from 'react'
import { Container } from './ButtonUpElements.js';

const ButtonUp = () => {



  const [buttonUp, setButtonUp] = useState(false);

  const scale = () => {

    if (window.scrollY >= 600) {

      setButtonUp(true);

    } else {

      setButtonUp(false);

    }


  }

  window.addEventListener('scroll', scale)




  const ScrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }



  return (
    <div>

      <Container onClick={ScrollTop} className={buttonUp ? 'ButtonUpActive' : 'ButtonUp'}>


        <img className='buttonUp ' src="./resources/ilustrations/Logo-wolf1-min.svg" />


      </Container>


    </div>
  )
}

export default ButtonUp