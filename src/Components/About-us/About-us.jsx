import { React, useEffect } from "react";
import "../../Animation.css";
import img1 from '../../Images/f930132363.jpg'
const About_us = () => {
  useEffect(() => {
    const cards1 = document.querySelectorAll(".right-animation");
    const cards2 = document.querySelectorAll(".leftCardAnimation");
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add("fade-from-right"); // Apply animation for class1
        }
      });

      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add("element-to-animate"); // Apply animation for class2
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full mb-16 flex items-center justify-center ">
        <div className="w-full max-w-5xl flex flex-col md:flex-row my-4">
          <div className="leftCardAnimation md:ml-6 w-full md:w-3/6 sm:ml-0">
            <h1 className="font-extrabold text-3xl my-4 	uppercase  mx-5  md:mx-0	">
              About Khalaf Al Salih Foundation
            </h1>

            <div className="flex flex-col">
              <div className="mb-2">
                <div className="flex  items-center "></div>
                <p className="text-sm md:w-96 text-start  mx-5  md:mx-0	">
                  Welcome to the Khalaf Al Salih Foundation, a beacon of hope
                  and positive transformation in the heart of rural Pakistan.
                  For over a decade, we have been dedicated to uplifting
                  communities by addressing their fundamental needs and
                  fostering sustainable development. For over a decade, Khalaf
                  Al Salih Foundation has been a steadfast force in rural
                  Pakistan, dedicated to uplifting communities and fostering
                  sustainable development. As a beacon of hope, we address
                  fundamental needs by providing clean water sources,
                  constructing homes and mosques, delivering vital healthcare,
                  and investing in local businesses for economic empowerment.
                  Our holistic approach aims not only to meet immediate
                  challenges but also to create lasting positive change, leaving
                  communities stronger and more self-sufficient.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/6 right-animation">
            <img
              src={img1}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_us;
