import {React , useEffect} from 'react'
import '../../Animation.css' 
const About_us = () => {


  useEffect(() => {
    const cards1 = document.querySelectorAll('.right-animation');
    const cards2 = document.querySelectorAll('.leftCardAnimation');
  
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class1
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
    
    <div className='w-full mb-16 flex items-center justify-center'>
        <div className='w-full max-w-5xl flex flex-col md:flex-row my-4'>
        <div className='leftCardAnimation md:ml-6 w-full md:w-3/6 sm:ml-0'>
          <h1 className='font-extrabold text-3xl my-4 	uppercase	'>About Khalaf Al Salih Foundation</h1>

          <div className='flex flex-col'>
            <div className='mb-2'>
                <div className='flex  items-center ' >
                </div>
              <p className='text-sm md:w-96 text-start	'>
              KHALAF AL SALIH started working in 2009 from a small camp that provided rescue and disaster management services. It expanded its branches and succeeded to establish an effective infrastructure that deals with social services, and welfare nationwide. To manifest this into reality, KHALAF AL SALIH has been working tirelessly. Currently, it is implementing 89 successful projects which are aimed at developing peoples’ life through facilitating sector-specific development particularly health, poverty alleviation, disaster management, food, shelter, education, and social causes. Our team of dedicated professionals and volunteers are committed to making a positive impact in the lives of those who need help and support.

              </p>
            </div>
          </div>
        </div>
          <div className='w-full md:w-3/6 right-animation'>
            <img
              src="https://hands.org.pk/wp-content/uploads/zakat_new_image01.jpg"
              alt=""
              className='w-full'
            />
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default About_us