import { React , useEffect} from 'react';
import '../../Animation.css'
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
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-full max-w-5xl flex flex-col md:flex-row my-4'>
          <div className='right-animation w-full md:w-3/6'>
            <img
              src="https://tcf-wp.tcfglobal.org/wp-content/uploads/2023/02/08182800/summer-camp-2-2-768x512.jpg"
              alt=""
              className='w-full'
            />
          </div>
          <div className='leftCardAnimation md:ml-6 w-full md:w-3/6 sm:ml-0'>
          <h1 className='font-extrabold text-4xl my-4 	uppercase	'>Other Projects</h1>

          <div className='flex flex-col'>
            <div className='mb-2'>
                <div className='flex  items-center ' >
                {/* <img  className='mr-4' src="https://saylaniweb-home.web.app/images/Hepatitis.png" alt="" /> */}
              <h1   className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
                Hepatitis
              </h1>
                </div>
              <p className='text-sm md:w-96 '>
                Khalaf Al Salih Foundation has established a dedicated clinic for the optimal treatment of hepatitis patients,
                providing specialized care and support for those affected by hepatitis.
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Housing Society
              </h1>
              <p className='text-sm md:w-96'>
              Khalaf Al Salih Foundation is also providing its own home facility for the homeless people. So far, thousands of houses and flats have been constructed and given in easy installments
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              IT Literacy
              </h1>
              <p className='text-sm md:w-96'>
              We are committed to developing more than 1 million software developers, which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan
              </p>
            </div>
            <div className='mb-2'>
              <h1 className='text-xl font-bold' style={{ color: '#0D6DB7' }}>
              Tharparkar
              </h1>
              <p className='text-sm md:w-96'>
              In Tharparkar, Saylani has set up several schools and ro plants, dug wells and brought the children there to Karachi and taught them modern technology
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
