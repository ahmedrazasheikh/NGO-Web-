import React from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import Providing from '../../Components/Providing/Providing'
import Doing from '../../Components/Doing/Doing'
import DoingSec from '../../Components/Doing/DoingSec'
import OneSided from '../../Components/OneSided/OneSided'
import About_us from '../../Components/About-us/About-us'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <About_us/>
    <Providing/>
   <div  className='py-6'   >
   <Doing/>
    <DoingSec/>
   </div>
    <OneSided/>
    <Footer/>
    </>
  )
}

export default Home