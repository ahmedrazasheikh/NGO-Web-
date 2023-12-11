import { React , useEffect} from 'react';
import '../../Animation.css'
import img1 from '../../Images/elderly-men-are-exposed-rainwater-dry-weather-global-warming_1150-16274.jpg'
const OneSided = () => {
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
      <div className='w-full my-16 flex items-center justify-center'>
        <div className='w-full max-w-5xl flex flex-col md:flex-row my-4'>
          <div className='right-animation w-full md:w-3/6'>
            <img
              src={img1}
              alt=""
              className='w-full'
            />
          </div>
          <div className=' md:px-0 px-4 leftCardAnimation md:ml-6 w-full md:w-3/6 sm:ml-0'>
          <h1 className='font-extrabold text-4xl my-4 	uppercase	'>What Sets Us Apart</h1>

          <div className='flex flex-col'>
            <div className='mb-2'>
                <div className='flex  items-center ' >
                {/* <img  className='mr-4' src="https://saylaniweb-home.web.app/images/Hepatitis.png" alt="" /> */}
              <h1   className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Holistic Approach
              </h1>
                </div>
              <p className='text-sm md:w-96 '>
              We believe in addressing the root causes of challenges. Whether it's providing clean water sources, constructing homes and mosques, delivering medical aid, or investing in local businesses, we take a holistic approach to community development.
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Community-Centric Solutions
              </h1>
              <p className='text-sm md:w-96'>
              Our initiatives are born from a deep understanding of local needs. By actively involving communities in decision-making, we ensure our projects are tailored to their unique circumstances, promoting sustainability and long-term impact.
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Empowering Lives
              </h1>
              <p className='text-sm md:w-96'>
              Beyond meeting immediate needs, we are passionate about empowering individuals to build a better future. Through micro-investments in new businesses, we enable people to generate their income, fostering independence and self-sufficiency.
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Our Impact
              </h1>
              <p className='text-sm md:w-96'>
              Over the past decade, Khalaf Al Salih Foundation has touched the lives of countless individuals. From providing access to clean water to constructing homes and Mosques, and delivering crucial medical aid, our impact resonates in the smiles and thriving communities we leave behind.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default OneSided;
