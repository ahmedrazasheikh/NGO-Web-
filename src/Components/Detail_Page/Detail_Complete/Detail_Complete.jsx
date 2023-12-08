import {React  , useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Dropdown from '../../Dropdown/Dropdown';

const Detail_Complete = () => {
  const { state } = useLocation() || {};

  if (!state) {
    return null;
  }

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
          <div className="relative overflow-hidden mb-4 rounded-lg" style={{ height: '300px' }}>
            <img
              src={image || 'placeholder-image-url'}
              alt="Image Not Found"
              className="w-full h-full"
            />
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
