import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Detail_Page.css'
const DetailPage = () => {
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

  const { title, image, description, CollectedAmount ,requiredAmout , AmountRemain} = state;
console.log(title)
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
          <h1 className="text-5xl font-bold mt-40 mb-4" >  {title || ''}</h1>

          <p className="text-gray-700 mb-4">{description || ''}</p>
          <p className="text-blue-500 mb-2 text-xl ">Amount Required: {requiredAmout || ''}</p>
          <p className="text-green-500 mb-2 text-xl ">Collected Amount: {CollectedAmount || ''}</p>
          <p className="text-red-500 mb-4 text-xl ">Amount Remaining: {requiredAmout -  CollectedAmount || ''} </p>
          <Link to='/Payment' >
          
          
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
          </Link>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default DetailPage;
