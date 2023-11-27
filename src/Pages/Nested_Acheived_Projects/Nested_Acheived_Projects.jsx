import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import Cards from '../../Components/Card/Cards'
import { Link   , useNavigate  , useLocation} from 'react-router-dom'
const Nested_Acheived_Project = () => {
    const navigate = useNavigate();
    const { state } = useLocation() || {};

    if (!state) {
      return null;
    }
  
    const { CategoryName } = state;
  return (
    <>
       <Header/>
       <Slider/>
       <h1 className='font-extrabold text-3xl my-4 	 text-center	'>{CategoryName} Compeleted Projects</h1>
<div className='flex flex-wrap justify-between px-2'  >


<Cards
  imageUrl="https://i1.tribune.com.pk/wp-content/uploads/2016/07/1135227-tharparkarTharONLINEx-1467499308.jpg"
  title="Jamshoro"
  description="As of my last knowledge update in January 2022, I don't have specific, up-to-date information about the current state of poverty in Jamshoro, as conditions can change over time. However, I can provide you with a general understanding of the challenges associated with poverty in many regions, including Jamshoro. Jamshoro is a district in the Sindh province of Pakistan. Like many other areas in the country, it faces various socio-economic challenges, and poverty is one of the critical issues affecting the population. Poverty can manifest in multiple dimensions, including lack of access to education, healthcare, employment opportunities, and basic amenities."
  onClick={() => navigate('/Detail-Completed', { state: { title: 'Jamshoro', description: "As of my last knowledge update in January 2022, I don't have specific, up-to-date information about the current state of poverty in Jamshoro, as conditions can change over time. However, I can provide you with a general understanding of the challenges associated with poverty in many regions, including Jamshoro. Jamshoro is a district in the Sindh province of Pakistan. Like many other areas in the country, it faces various socio-economic challenges, and poverty is one of the critical issues affecting the population. Poverty can manifest in multiple dimensions, including lack of access to education, healthcare, employment opportunities, and basic amenities.", image: 'https://i1.tribune.com.pk/wp-content/uploads/2016/07/1135227-tharparkarTharONLINEx-1467499308.jpg' } })}
/>
      <Cards
      imageUrl="https://www.thenews.com.pk/assets/uploads/tns/2018-12-09/566821_9222344_tns.jpg"
      title="Dadu"
      description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
      
        onClick={() => alert('Another On Working')}
      />
   <Cards
         imageUrl="https://pcepak.org/images/blog/District-Jamshoro-A-case-of-neglect.jpg"
         title="Badin"
         description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
         
        onClick={() => alert('On Working')}
      />

      <Cards
        imageUrl="https://pakobserver.net/wp-content/uploads/2022/08/1-290.jpg"
        title="Umerkot"
        description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
        onClick={() => alert('Another On Working')}
      />

</div>
<div className='flex flex-wrap justify-between px-2'  >
<Cards
        imageUrl="https://media.licdn.com/dms/image/C4D12AQGaOnFNsSVLuw/article-cover_image-shrink_600_2000/0/1555085612230?e=2147483647&v=beta&t=_CN0-WV6he_MJKqYa3TTn-Ow7YnDlLdjM4J2XBiGmMI"
        title="Khairpur"
        description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
        
        onClick={() => alert('On Working')}
      />

      <Cards
      imageUrl="https://communityworldservice.asia/wp-content/uploads/2023/08/DSC_5269-1024x683.jpg"
      title="Ghotki"
      description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
      
        onClick={() => alert('Another On Working')}
      />
   <Cards
         imageUrl="https://i.dawn.com/large/2016/02/56c8b00c9be40.jpg"
         title="Jacobabad"
         description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
         
        onClick={() => alert('On Working')}
      />

      <Cards
        imageUrl="https://www.thenews.com.pk/assets/uploads/magazine/2020-11-29/751054_6470497_water_magazine.jpg"
        title="Thatta"
        description="Jamshoro is a historic city in the Sindh province of Pakistan, known for its cultural richness and academic significance. Home to the renowned University of Sindh, Jamshoro has been a hub of education and research"
        
        onClick={() => alert('Another On Working')}
      />

</div>
       <Footer/>
    </>
  )
}

export default Nested_Acheived_Project