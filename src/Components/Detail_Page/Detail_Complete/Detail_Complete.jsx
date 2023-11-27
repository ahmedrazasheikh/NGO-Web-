import {React  , useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Dropdown from '../../Dropdown/Dropdown';

const Detail_Complete = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const { state } = useLocation() || {};

  if (!state) {
    return null;
  }

  const { title, image, description } = state;
  console.log(description)
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
          <ul className="p-4 rounded-lg shadow-md  list-disc">
      {description.map((str, index) => (
        <li key={index} className="text-black my-2">
          {str}
        </li>
      ))}
    </ul>

        {/* <div  className='rounded-2xl py-2 my-2  '  style={{ border: '1px solid #e5e1e1', width: '100%' }}>
        <div className='flex justify-between items-center p-4' onClick={handleToggle1}>
          <div className='ml-5'>
            <h3   className='font-bold text-md'  style={{ color: 'black'   }}>How Much Required in this Projects?</h3>
          </div>
          <div className='mr-10'>
          {isOpen1 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div  style={{ margin : "0px 10px" }}>
          {isOpen1 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              Amazon is a great place to reach an untapped market and increase your revenues through product listing optimization, digital marketing, enhanced brand amazon content/A+ content, sponsored ads, engaging sales copy, attractive product descriptions, attractive product images, Amazon fulfillment, and many other methods. Our marketing services for amazon promise scaling of your business driven by sales.
              </p>
            </div>
          )}
        </div>
      </div>
     
      <div className='rounded-2xl py-2 my-2 ' style={{ border: '1px solid #e5e1e1', width: '100%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle2}>
          <div className='ml-5'>
            <h3   className='font-bold text-md'  style={{ color: 'black'   }}>Name of the Donors in this Projects?</h3>
          </div>
          <div className='mr-10'>
          {isOpen2 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen2 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              An Amazon marketing service professional will help you increase your brand's online visibility, run your online store properly, and drive more traffic to your product site, regardless of the size of your business or the product you want to advertise to your audience. As a result, you may promote your goods correctly and meet all Amazon rules by leveraging the considerable experience of Amazon marketing agencies. Furthermore, with the assistance of a marketing specialist, you can become the seller you've always wanted to be.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='rounded-2xl py-2 my-2 ' style={{ border: '1px solid #e5e1e1', width: '100%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle3}>
          <div className='ml-5'>
            <h3   className='font-bold text-md'  style={{ color: 'black'   }}>How Much Amount is Collected in this Project?</h3>
          </div>
          <div className='mr-10'>
          {isOpen3 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen3 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              An Amazon marketing service professional will help you increase your brand's online visibility, run your online store properly, and drive more traffic to your product site, regardless of the size of your business or the product you want to advertise to your audience. As a result, you may promote your goods correctly and meet all Amazon rules by leveraging the considerable experience of Amazon marketing agencies. Furthermore, with the assistance of a marketing specialist, you can become the seller you've always wanted to be.
              </p>
            </div>
          )}
        </div>
      </div> */}

        </div>
      </div>
    </div>

   <Footer/>
   </>
  );
};

export default Detail_Complete;
