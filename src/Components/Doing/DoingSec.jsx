import {React , useEffect} from 'react'
import './Doing.css'
import '../../Animation.css'
import img2 from '../../Images/dinner.png'
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
  <i class="text-4xl text-white animate-from-bottom  fa-solid fa-droplet"></i>
  {/* <i class="text-4xl text-white animate-from-bottom  fas fa-utensils"></i> */}

  </div>
  <div class="card-content">
   <h1 class="card-title">Water Projects</h1>
   <p class="card-text">Ensuring access to clean and sustainable water sources. Our initiatives range from well drilling to water purification, aiming to alleviate water scarcity and improve the health and well-being of communities. By providing a lifeline through these water projects.</p> 
</div>
 
</div>


<div class="card-wrap">
 <div  class="card-header two ">
 {/* <img   className='w-26 h-24' src="https://www.pngkey.com/png/full/275-2758988_dinner-icon-dinner.png" alt="" /> */}

 <i class="text-4xl  animate-from-bottom fa-solid fa-plate-utensils"></i>
 <img  className='w-26 h-24  m-auto'   src={img2} />
 </div>
 <div class="card-content">
    <h1 class="card-title">Niaz</h1>
    <p class="card-text">Niaz distribution in Majalis. In the spirit of communal gatherings, we provide nourishing meals that go beyond sustenance. Our initiative not only aims to satisfy hunger but also to create a sense of togetherness and shared experiences during Majalis.</p>
  
 </div>
</div>
<div class="card-wrap">
 <div class="card-header three">
 <i class="text-4xl text-white animate-from-bottom  fas fa-mosque"></i>

 </div>
 <div class="card-content">
   <h1 class="card-title">Mosques</h1>
   <p class="card-text">Our mosque construction projects aim to provide communities with spaces of worship, unity, and spiritual growth. By erecting these sacred places, we contribute to the cultural and spiritual fabric of the regions we serve.</p>
 
</div>
</div>
</div>

    </>
  )
}

export default DoingSec