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
   <div className='card-wrap-main' >



<div class="card-wrap">
 <div class="card-header one">
 <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/Dastarkhwan.png' />
 </div>
 <div class="card-content">
   <h1 class="card-title">Niaz</h1>
   <p class="card-text">Make unforgettable family memories with our carefully planned vacation packages designed to cater to all ages and interests.</p>
 
</div>
</div>
<div class="card-wrap">
 <div class="card-header two">
 <img  className='w-16  m-auto'   src='https://saylaniweb-home.web.app/images/ROPLANT.png' />
 </div>
 <div class="card-content">
   <h1 class="card-title">RO PLANT</h1>
   <p class="card-text">Make unforgettable family memories with our carefully planned vacation packages designed to cater to all ages and interests.</p> 
</div>
</div>
<div class="card-wrap">
 <div class="card-header three">
 <img    src='https://saylaniweb-home.web.app/images/education.png' />  
 </div>
 <div class="card-content">
   <h1 class="card-title">EDUCATION</h1>
   <p class="card-text">Make unforgettable family memories with our carefully planned vacation packages designed to cater to all ages and interests.</p>
 
</div>
</div>
</div>

    </>
  )
}

export default DoingSec