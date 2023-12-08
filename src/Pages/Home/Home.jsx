import React from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import Providing from '../../Components/Providing/Providing'
import Doing from '../../Components/Doing/Doing'
import DoingSec from '../../Components/Doing/DoingSec'
import OneSided from '../../Components/OneSided/OneSided'
import About_us from '../../Components/About-us/About-us'
import Footer from '../../Components/Footer/Footer'
import ImageSection from '../../Components/ImageSection/ImageSection'
import Reason_Helping from '../../Components/Reason_Helping/Reason_Helping'
import Reason_Helping1 from '../../Components/Reason_Helping1/Reason_Helping1'


const Home = () => {
  return (
    <>
    <Header/>
<Slider/>
<About_us/>

<h1 className='text-4xl text-center my-12'  >What We Are Doing</h1>

<Providing/>
<div  className='py-6'   >
<h1 className='text-4xl text-center my-12'  >Our Projects</h1>
   <Doing/>
    <DoingSec/>
   </div>

    <OneSided/>
    <Reason_Helping1/>
    <Footer/>
    </>
  )
}

export default Home