import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';
const Slider = () => {
  const images = ["https://welfare.org.pk/wp-content/uploads/2022/05/Web-Banners-WaterforAll-1.jpg", "https://welfare.org.pk/wp-content/uploads/2022/05/Web-Banners-OrphanCare-1.jpg", "https://welfare.org.pk/wp-content/uploads/2022/05/WebBanner-Educare-1.jpg"];
  const headings = [' DISHWASHER', 'PLANETARY MIXER ', 'BENCH  REFRIGERATORS', '4 PIECE OVEN'];
  const paragraphs = [
    'Pure power, ultimate precision!',
    'Professional kitchens!',
    'Stylish design high quality!',
    'Master of hot dishes!',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setCurrentHeadingIndex((prevIndex) => (prevIndex === 0 ? headings.length - 1 : prevIndex - 1));
    setCurrentParagraphIndex((prevIndex) => (prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setCurrentHeadingIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
    setCurrentParagraphIndex((prevIndex) => (prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [nextImage]);

  return (
    <div className="mx-auto relative w-full h-5/6 pb-6">

    {/* Image */}
    <img
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex + 1}`}
      className="w-full h-64 sm:h-96 object-cover"
    />
  
    {/* Left Icon */}
    <div className="left-icon absolute top-1/2 left-0 transform -translate-y-1/2">
      <button
        className="text-white font-semibold px-4 py-2 rounded-lg mr-2"
        onClick={prevImage}
      >
        <FontAwesomeIcon   className='Icon-white  lefticooo' icon={faChevronLeft} size="2x" />
      </button>
    </div>
  
    {/* Right Icon */}
    <div className="right-icon absolute top-1/2 right-0 transform -translate-y-1/2">
      <button
        className="text-white font-semibold px-4 py-2 rounded-lg ml-2"
        onClick={nextImage}
      >
        <FontAwesomeIcon   className='Icon-white righticooo' icon={faChevronRight} size="2x" />
      </button>
    </div>
  </div>
  

  );
};

export default Slider;