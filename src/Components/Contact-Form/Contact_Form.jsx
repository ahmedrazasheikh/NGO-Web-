import { React, useEffect } from 'react';
import '../../App.css'

const ContactForm = () => {
  

  useEffect(() => {
    const cards1 = document.querySelectorAll('.Bottoom-Animation');
    const cards2 = document.querySelectorAll('.leftCardAnimation');
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element'); // Apply animation for class1
        }
      });

      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 text-center">
  <h2 style={{"color" : "black"}} className="Bottoom-Animation font-bold text-3xl sm:text-5xl  dark:text-white elevated-animate-bottom">
    Empower Change with Us!
  </h2>
  <p className="Bottoom-Animation mx-auto mt-4 text-lg text-gray-700 dark:text-gray-300 elevated-animate-bottom">
    Join our mission to make a positive impact. Your support means the world to us!
  </p>
</div>

        <div className="flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
          <h2  style={{"color" : "black"}} className="Bottoom-Animation mb-4 text-2xl font-bold">
  Ready to Make a Difference?
</h2>

            <form id="contactForm">
              <div className="mb-4">
                <label htmlFor="name" className="leftCardAnimation font-bold pb-1 text-sm uppercase text-gray-600 dark:text-gray-300 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="leftCardAnimation font-bold pb-1 text-sm uppercase text-gray-600 dark:text-gray-300 block">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="textarea" className="leftCardAnimation font-bold pb-1 text-sm uppercase text-gray-600 dark:text-gray-300 block">
                  Your Message
                </label>
                <textarea
                  id="textarea"
                  name="textarea"
                  cols="30"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  style={{ background: '#0B667D' }}
                  type="submit"
                  className="w-full text-white px-6 py-3 font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
