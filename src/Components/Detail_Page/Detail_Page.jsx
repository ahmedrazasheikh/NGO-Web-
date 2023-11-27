import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const DetailPage = () => {
  const { state } = useLocation() || {};

  if (!state) {
    return null;
  }
  

  const { title, image, description } = state;
console.log(title)
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
              className="\ w-full h-full"
            />
          </div>
          <h1 className="text-5xl font-bold my-4">  {title || ''}</h1>

          <p className="text-gray-700 mb-4">{description || ''}</p>
          <p className="text-blue-500 mb-2 text-xl ">Amount Required: 2 Lakh</p>
          <p className="text-green-500 mb-2 text-xl ">Collected Amount: $750</p>
          <p className="text-red-500 mb-4 text-xl ">Amount Remaining: $250</p>
          <button onClick={()=>{alert("Working on it!!!")}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default DetailPage;
