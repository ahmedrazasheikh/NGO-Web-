import {React , useEffect} from 'react'
import './Doing.css'
import '../../Animation.css'
const DoingSec = () => {
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
      <div   className="animate-from-bottom Offer-card">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/Dastarkhwan.png' />
        <h1 className='font-bold' >Niaz</h1>
    </div>
      <div  className="animate-from-bottom Offer-card">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/ROPLANT.png' />
        <h1 className='font-bold' >RO PLANT</h1>
      </div>
      <div  className="animate-from-bottom Offer-card">
      <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/education.png' />
        <h1 className='font-bold'  >  EDUCATION</h1>
      </div>
    </div>

    </>
  )
}

export default DoingSec