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
      <div class="animate-from-bottom w-1/5	 rounded overflow-hidden shadow-lg mr-4">
      <img class="w-full h-64" src="https://themewagon.github.io/charifit/img/help/1.png" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Collecting Fund</div>
          <p class="text-gray-700">
          Collecting funds refers to the process of gathering financial contributions or donations from individuals, organizations, or entities for a specific purpose or cause. This activity is common in various sectors, including non-profit organizations, 
          </p>
        </div>
        
      </div>
      <div class="animate-from-bottom w-1/5 rounded overflow-hidden shadow-lg mr-4">
      <img class="w-full h-64" src="https://themewagon.github.io/charifit/img/help/2.png" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Blood Camp</div>
          <p class="text-gray-700 ">
          Step into the realm of altruism and life-saving at the "Blood Camp," a dedicated initiative that brings communities together to contribute to a noble cause. This unique event serves as a crucial platform for individuals to donate blood,</p>
        </div>
       
      </div>
      <div class="animate-from-bottom w-1/5 rounded overflow-hidden shadow-lg mr-4">
      <img class="w-full h-64	" src="https://themewagon.github.io/charifit/img/help/3.png" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Friendly Volunteer</div>
          <p class="text-gray-700">
           
Title: Friendly Volunteer

Description:
In a world where kindness is a currency, the "Friendly Volunteer" stands out as a beacon of warmth and goodwill, dedicated to making a positive impact in the lives of others. These individuals embody the spirit of selflessness.
          </p>
        </div>
     
      </div>
</div>
    </>
  );
};

export default Reason_Card;
