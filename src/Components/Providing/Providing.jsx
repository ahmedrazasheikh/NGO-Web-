import {React , useEffect} from 'react'
import '../../Animation.css'
import './Providing.css'
const Providing = () => {
    useEffect(() => {
        const cards1 = document.querySelectorAll('.animate-from-bottom ');
        const cards2 = document.querySelectorAll('.leftCardAnimation');
        const handleScroll = () => {
          cards1.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight) {
              card.classList.add('fade-up-element'); // Apply animation for class1
            }
          });
          cards2.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight) {
              card.classList.add('element-to-animate'); // Apply animation for class2
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
        {/* leftCardAnimation */}
        <div className=" elementor-form-fields-wrapper elementor-labels-">
    <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className=" flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
            <img   className='w-14 h-14 animate-from-bottom  '   src="https://saylaniweb-home.web.app/images/icon_food_png.png" alt="" />
        <h1   style={{"color" : "#F1F5F9"}} className=' animate-from-bottom  text-4xl font-bold' >125,000</h1>
        <p  className=' animate-from-bottom  font-bold' >Daily Dastrakhan(Monthly)</p>
        </div>
    </div>
    <div className=" elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className="flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
        <img className=' animate-from-bottom w-14 h-14'  src="https://saylaniweb-home.web.app/images/icon_family_png.png" alt="" />
        <h1   style={{"color" : "#F1F5F9"}} className=' animate-from-bottom text-4xl font-bold' >7,500</h1>
        <p className='font-bold animate-from-bottom ' >Family Adoption(Monthly)</p>
        </div>
    </div>
    <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className="flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
            <img className='w-14 h-14 animate-from-bottom '  src="https://saylaniweb-home.web.app/images/icon_medical_png.png" alt="" />
        <h1   style={{"color" : "#F1F5F9"}} className='animate-from-bottom text-4xl font-bold' >43,749</h1>
        <p className='font-bold animate-from-bottom ' >Medical(Monthly)</p>
        </div>
    </div>
    <div className=" flex flex-col items-center justify-center	  elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className="flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
            <img className='w-14 h-14 animate-from-bottom'  src="https://saylaniweb-home.web.app/images/icon_education_png.png" alt="" />
        <h1  style={{"color" : "#F1F5F9"}}  className=' animate-from-bottom text-4xl font-bold ' >180,000</h1>
        <p className='font-bold animate-from-bottom' >Education(Monthly)</p>
        </div>
    </div>
   
        </div>
        </>
  )
}

export default Providing