import {React  , useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Dropdown from '../../Dropdown/Dropdown';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



const Detail_Complete = () => {
  const { state } = useLocation() || {};

  if (!state) {
    return null;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 2000, 
  };
  const { title, image, description } = state;
  console.log(image)
  console.log(description , typeof description)
  const parts = description.split('.').filter(part => part.trim() !== '');

console.log(parts)
  return (
   <>
   <Header/>
   
   <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="bg-white rounded shadow-lg p-8">
        <div className="  mb-4 rounded-lg" style={{ height: '300px' }}>
          <Slider {...sliderSettings}>
        {image.map((imageUrl, index) => (
          <div     key={index}>
            <img
              className="w-full   mb-12 h-96	 rounded-md"
              src={imageUrl}
              alt={`Card Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

          </div>
          <h1   style={{"color" : "#0B667D"}} className="text-5xl font-bold my-4">  {title || ''}</h1>
     
          <ul className="p-4 rounded-lg   list-disc">
      {parts.map((str, index) => (
        <li key={index} className="text-black my-2">
          {str}
        </li>
      ))}
    </ul>
        </div>
      </div>
    </div>

   <Footer/>
   </>
  );
};

export default Detail_Complete;
