//import day element
import bgD from './img/day/bg.png'
import blicksD from './img/day/Frame 10.svg'
import sloy2D from './img/day/Sloy2.png'
import gorD from './img/day/Group 49 (3).png'
import gor2D from './img/day/Group 49 (2).png'
import oblakoD1 from './img/day/oblako.svg'
import oblakoD2 from './img/day/oblako (1).svg'
import oblakoD3 from './img/day/oblako (2).svg'

//import night element
import bgN from './img/night/bg.png'
import gorN from './img/night/Frame 7.png'
import blicksN from './img/night/Frame 10.svg'
import sloy2N from './img/night/Sloy2.png'
import gor2N from './img/night/forward mountains 2.png'
import oblakoN1 from './img/night/oblako.svg'
import oblakoN2 from './img/night/oblako (1).svg'
import oblakoN3 from './img/night/oblako (2).svg'



let config = { 
  day:{
    blick: blicksD,
    bg: bgD,
    sloy2:sloy2D,
    gor: gorD,
    gor2: gor2D,
    oblako1: oblakoD1,
    oblako2: oblakoD2,
    oblako3: oblakoD3
  },
  night:{
    blick: blicksN,
    bg: bgN,
    sloy2:sloy2N,
    gor: gorN,
    gor2: gor2N,
    oblako1: oblakoN1,
    oblako2: oblakoN2,
    oblako3: oblakoN3
  }
}

export const useParallax = (time) => {
  if (time === false) {
    return config.day
  } else if (time === true) {
    return config.night
  } else {
    return 'Choose day or night'
  }
}      