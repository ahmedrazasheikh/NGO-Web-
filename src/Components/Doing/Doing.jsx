import {React  , useEffect } from 'react'
import './Doing.css';
import '../../Animation.css';
const Doing = () => {
  useEffect(() => {
    const cards1 = document.querySelectorAll('.animate-from-bottom');
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element'); // Apply animation for class1
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
 <div className='card-wrap-main pb-12' >



 <div class="card-wrap">
  <div class="card-header one">
  <i class="text-4xl text-white animate-from-bottom  fas fa-hand-holding-water"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Financial Freedom</h1>
    <p class="card-text">Our loan services are tailored to support individuals with the drive to start small businesses and those possessing valuable land but lacking the necessary investment to cultivate new crops. By providing accessible and fair financing.</p>
  
 </div>
</div>



<div class="card-wrap">
  <div class="card-header one">
  <img className='w-24 h-24 animate-from-bottom'  src="https://saylaniweb-home.web.app/images/icon_education_png.png" alt="" />

  {/* <i class="text-4xl text-white animate-from-bottom  fa-solid fa-family"></i> */}
  </div>
  <div class="card-content">
    <h1 class="card-title">Financial Freedom</h1>
    <p class="card-text">Our loan services are tailored to support individuals with the drive to start small businesses and those possessing valuable land but lacking the necessary investment to cultivate new crops. By providing accessible and fair financing.</p>
  
 </div>
</div>

<div class="card-wrap">
  <div class="card-header three">


 
  <i class=" animate-from-bottom   fa fa-stethoscope"></i>
 
  
  
  </div>
  <div class="card-content">
    <h1 class="card-title">MEDICAL</h1>
    <p class="card-text">Committed to the well-being of our communities, we provide crucial healthcare assistance, including medical aid, supplies, and financial support for essential treatments. Our goal is to ensure that every individual has access to quality healthcare.</p>
  
 </div>
</div>
 </div>
    



    </>
  )
}

export default Doing
