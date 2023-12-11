import {React , useEffect} from 'react'
import '../../Animation.css'
import './Providing.css'
import img1 from '../../Images/mosque.png'
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
        <div className=" elementor-form-fields-wrapper elementor-labels-">
    <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className=" flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
        <i class="text-4xl text-white animate-from-bottom  fas fa-mosque"></i>
        <h1   style={{"color" : "#F1F5F9"}} className=' animate-from-bottom  text-4xl font-bold' >100+</h1>
        <p  className=' animate-from-bottom  font-bold' >Mosque Built</p>
        </div>
    </div>
    <div className=" elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className="flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
        <i class="text-4xl text-white animate-from-bottom  fas fa-hand-holding-water"></i>
        <h1   style={{"color" : "#F1F5F9"}} className=' animate-from-bottom text-4xl font-bold' >250+</h1>
        <p className='font-bold animate-from-bottom ' >Water Projects</p>
        </div>
    </div>
    <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-name elementor-col-20 elementor-md-25 elementor-field-required">
        <div className="flex flex-col items-center justify-center elementor-field elementor-select-wrapper remove-before text-center">
            {/* <img className='w-14 h-14 animate-from-bottom '  src="https://saylaniweb-home.web.app/images/icon_medical_png.png" alt="" /> */}
        <i class="text-4xl text-white animate-from-bottom  fas fa-hands-helping"></i>
        {/* <i class=""></i> */}

        <h1   style={{"color" : "#F1F5F9"}} className='animate-from-bottom text-4xl font-bold' >150+</h1>
        <p className='font-bold animate-from-bottom ' >Financial Support</p>
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