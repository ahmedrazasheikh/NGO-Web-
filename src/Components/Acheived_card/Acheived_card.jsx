import React from 'react';
import './AchievedCard.css'
const Acheivedcard = ({ imageUrl, title, description , onClick }) => {
  function truncateString(description, num) {
    if (description.length <= num) {
      return description
    }
    return description.slice(0, num) + '...'
  }
  
  let shortText =    truncateString(description , 210)
  return (
    <div  onClick={onClick} style={{"marginBottom" : "20px "}} className="Acheived-card max-w-xs w-full  bg-white py-4 px-2 rounded-md shadow-md relative">
      <span style={{"background" : "#0B667D"}}  className="absolute top-0 left-0 text-white px-2 py-1 rounded-full ">Complete</span>
      <img
        className="w-full h-36 object-cover mb-4 rounded-md"
        src={imageUrl}
        alt="Card Image"
      />
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-4 text-left">{shortText}</p>
    
    </div>
  );
};

export default Acheivedcard;
