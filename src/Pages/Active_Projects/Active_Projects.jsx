import { React, useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Card/Cards";
import { useNavigate } from "react-router-dom";
import "../Achieved_Projects/Acheived_Project.css";
import { BeatLoader } from "react-spinners";
import ImageSection from "../../Components/ImageSection/ImageSection";

const Active_Projects = () => {
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete, setdelete] = useState(false);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://busy-tan-dhole-wig.cyclic.app/api/v1/products`);
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

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `https://busy-tan-dhole-wig.cyclic.app/api/v1/customer/${id}`
      );
      console.log("response: ", response.data);
      setdelete(!Delete);
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  useEffect(() => {
    console.log("asdasd");
    getAllProducts();
    // return () => {
    //   console.log('Cleanup Function');
    //  }
  }, [Delete, productsBoolean]);
  const navigate = useNavigate();

  return (
    <>
      <div style={{ background: "white" }}>
        <Header />
        <Slider />

        <div className="CardHandle flex flex-wrap justify-between px-2">
        {productsBoolean ? (
  products.map((value, index) => (
    <Cards
      key={index}
      imageUrl={value.imageUrl[0]}
      title={value.projectName}
      description={value.projectDescription}
      onClick={() =>
        navigate("/detail", {
          state: {
            title: value.projectName,
            description: value.projectDescription,
            image: value.imageUrl,
            requiredAmout: value.amountRequired,
            CollectedAmount: value.collectedAmount,
            AmountRemain: value?.amountRemaining,
          },
        })
      }
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


          {/* {products.map((value, index) => (
            <Cards
              key={index}
              imageUrl={value.imageUrl}
              title={value.projectName}
              description={value.projectDescription}
              onClick={() =>
                navigate("/detail", {
                  state: {
                    title: value.projectName,
                    description: value.projectDescription,
                    image: value.imageUrl,
                    requiredAmout: value.amountRequired,
                    CollectedAmount: value.collectedAmount,
                    AmountRemain: value?.amountRemaining,
                  },
                })
              }
            />
          ))} */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Active_Projects;
