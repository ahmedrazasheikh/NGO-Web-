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
   <div className='flex flex-wrap justify-center bg-white  main-Offer-card  '>
      <div  className="Offer-card animate-from-bottom">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/onlinesadqah.png' />
        <h1 className='font-bold'  >Financial Freedom</h1>
      </div>
      <div  className="Offer-card animate-from-bottom">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/welfare.png' />
        <h1 className='font-bold'  >WELFARE</h1>
      </div>
      <div  className="Offer-card animate-from-bottom">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/medical.png' />
        <h1  className='font-bold'  >MEDICAL</h1>
      </div>
    </div>

    </>
  )
}

export default Doing