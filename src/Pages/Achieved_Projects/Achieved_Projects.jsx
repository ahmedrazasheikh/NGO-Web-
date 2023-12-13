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
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete, setdelete] = useState(false);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://busy-tan-dhole-wig.cyclic.app/api/v1/products2`);
      console.log("response: ", response);
      setProducts(response.data.data);

      if (response.data.data.length === 0) {
        setProductsBoolean(true);
      } else {
        setProductsBoolean(true);
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

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  useEffect(() => {
    getAllProducts();
  }, [Delete, selectedCategories]);

  const navigate = useNavigate();

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.projectCategory)
        )
      : products;

  return (
    <>
      <div style={{ "background": "white" }}>
        <Header />
        <Slider/>

        <div className="flex main-container-wrap">
  <aside
    style={{ marginBottom: "20px" }}
    className="flex-shrink-0 sidebar-center md:w-64 w-full  bg-white border-r border-gray-300"
  >
    <div className="p-4 md:w-auto w-full h-4/6	 ">
      <h2 className="text-2xl font-semibold mb-4">Achieve Projects</h2>
      <ul className=" md:block  flex flex-wrap" > 
        {['Sukkur', 'Jacobabad', 'Badin', 'Thar', 'Larkana', 'Dadu', 'Rohri', 'Salehpat', 'Khairpur', 'Khanpur', 'Shikarpur', 'Nawabshah', 'Gambat', 'Ghotki', 'Qumbar', 'Shahdatkot', 'Rato Dero'].map((category, index) => (
          <li key={index} className="mb-2 w-24 flex items-center">
            <input
              type="checkbox"
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="ml-2">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  </aside>

  <div className={`w-10/12 flex flex-wrap ${selectedCategories.length > 0 ? 'category-selected' : ''}`}>
  {filteredProducts.length > 0 ? (
  filteredProducts.map((card, index) => (
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
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', margin: 'auto' }}>
    {productsBoolean ? (
 <p>No Project Found   in this Area.</p>
    ) : (
      <BeatLoader
        size={40}
        color={'#0D6DB7'}
        loading={true}
      />
    )}
  </div>
)}

  </div>
</div>

        <Footer />
      </div>
    </>
  );
}

export default Achieved_Projects;




