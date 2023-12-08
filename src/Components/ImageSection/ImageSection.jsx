import React from 'react';
import './ImageSection.css';
import { Link } from 'react-router-dom';

const ImageSection = () => {
  return (
    <div className='image-section'>
      <h1 className=' text-white font-bold'>Get Started Today.</h1>
      <h1 className=' text-white font-bold'>Help the Children</h1>
      <h1 className=' text-white font-bold'>When They Need</h1>
      <p className='text-white font-bold'>
        With so much to consume and such little time,
      </p>
      <p className='text-white font-bold' >
      coming up with relevant title ideas is essential
      </p>
      <button className="cta-button">
        Make a Donation
      </button>
    </div>
  );
};

export default ImageSection;
