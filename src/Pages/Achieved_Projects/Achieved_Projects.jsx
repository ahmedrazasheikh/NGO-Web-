import {React , useState , useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import Acheivedcard from '../../Components/Acheived_card/Acheived_card'
import { Audio } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import ImageSection from '../../Components/ImageSection/ImageSection';

const Achieved_Projects = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);





  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://busy-tan-dhole-wig.cyclic.app/api/v1/products2`);
      console.log("response: ", response);
      console.log(products);
    setProducts(response.data.data);
    if(response.data.data.length === 0){
      setProductsBoolean(false)
    }
else{
setProductsBoolean(true)
}
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`https://busy-tan-dhole-wig.cyclic.app/api/v1/customer/${id}`)
      console.log("response: ", response.data);
      setdelete(!Delete)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  }

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()

}, [Delete , productsBoolean ])

  

  return (
    <>
      <div style={{ "background": "white" }}>
        <Header />
        <Slider/>

        <div className='CardHandle flex md:m-0 flex-wrap justify-between items-center px-2 mx-auto'>

          
        {productsBoolean ? (
  products.map((card, index) => (
    <Acheivedcard
      key={index}
      imageUrl={card.imageUrl[0]}
      title={card.projectName}
      description={card.projectDescription}
      buttonText={'Donate Now'}
      onClick={() => navigate('/Detail-Completed', { state: { title: card.projectName, description: card.projectDescription, image: card.imageUrl } })}
    />
  ))
) : (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' , margin : "auto" }}>
  <BeatLoader
    size={40}

    color={'#0D6DB7'}
    loading={true}
  />
</div>


)}


        </div>

        <Footer />
      </div>
    </>
  );
}

export default Achieved_Projects;




