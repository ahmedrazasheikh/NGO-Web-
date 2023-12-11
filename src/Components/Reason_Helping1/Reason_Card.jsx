import {React , useEffect} from 'react';
import './Reason_card.css';
import '../../Animation.css'

const Reason_Card = () => {


    useEffect(() => {
        const cards1 = document.querySelectorAll('.animate-from-bottom');
        const handleScroll = () => {
          cards1.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight) {
              card.classList.add('fade-up-element'); // Apply animation for class1
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
 <div class="flex flex-wrap justify-center items-center">

<div class="end-card md:mr-6 mr-0  animate-from-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-lg mb-4">
  <img class="w-full h-64" src="https://www.procurious.com/blog-content/2016/05/Community-Empowerment.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Community Empowerment</div>
    <p class="text-gray-700">
      At Khalaf Al Salih Foundation, we believe in the transformative power of community empowerment. By providing loans for small businesses, supporting local farmers in cultivating their lands, and constructing essential infrastructure like mosques and water sources, we aim tand communities.
    </p>
  </div>
</div>

<div class="end-card md:mr-6 mr-0  animate-from-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-lg mb-4">
  <img class="w-full h-64" src="https://theimmigrater.com/wp-content/uploads/2020/07/1-11.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Humanitarian Compassion</div>
    <p class="text-gray-700">
      Our initiatives are fueled by a deep sense of humanitarian compassion. We recognize the  basic human needs for clean water, shelter, healthcare, and spiritual spaces. Through our diverse projects, including medical support, water projects, mosque construction, and Niaz distribution, we strive to alleviate suffering and uplift.
    </p>
  </div>
</div>

<div class="end-card md:mr-6 mr-0  animate-from-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-lg mb-4">
  <img class="w-full h-64" src="https://the-ethos.co/wp-content/uploads/2021/09/spirituality-climate-change-ethos-1536x1024.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Cultural  Enrichment</div>
    <p class="text-gray-700">
    Khalaf Al Salih Foundation is committed to enriching the cultural and spiritual fabric of the communities we serve. Our mosque construction projects and Niaz distribution in Majalis are inspired by a deep respect for cultural and religious values. By providing spaces for worship and communal gatherings, we aim to strengthen the bonds.
    </p>
  </div>
</div>

</div>

    </>
  );
};

export default Reason_Card;
