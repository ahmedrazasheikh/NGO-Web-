import React from 'react';
import '../../Pages/Achieved_Projects/Acheived_Project.css'
import './Card.css'
const Card = ({ imageUrl, title, description, onClick }) => {
  function truncateString(description, num) {
    if (description.length <= num) {
      return description
    }
    return description.slice(0, num) + '...'
  }
  
  let shortText =    truncateString(description , 210)
  return (
    <div  onClick={onClick} style={{"marginBottom" : "20px "}} className="CardHandle max-w-xs w-full bg-white py-4 px-2 rounded-md shadow-md">
      <img
        className="w-full  md:h-36 h-auto  object-cover mb-4 rounded-md"
        src={imageUrl}
        alt="Card Image"
      />
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-4 text-left">{shortText}</p>
    </div>
  );
};

export default Card;
