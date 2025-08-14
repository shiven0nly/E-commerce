import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';


const HeaderSlider = () => {

  const sliderData = [
    {
      id: 1,
      title: 'Experience Pure Sound - Your Perfect Headphones Awaits!',
      offer: 'Limited Time Offer 30% Off',
      button: 'Buy now',
      imgSrc:
        '/airmax.png',
    },
    {
      id: 2,
      title: 'Next-Level Gaming Starts Here - Discover PlayStation 5 Today!',
      offer: 'Hurry up only few lefts!',
      button: 'Shop Now',
      imgSrc:
        '/ps5.png',
    },
    {
      id: 3,
      title: 'Power Meets Elegance - Apple MacBook Pro is Here for you!',
      offer: 'Exclusive Deal 40% Off',
      button: 'Order Now',
      imgSrc:
        '/macbook.png',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

    const { currentUser } = useAuth();
  const { button } = useCart();

    const handleAddToCart = async () => {
    if (!currentUser) {
      alert('Please login to add items to cart');
      return;
    }
  }

  return (
    <div className="overflow-hidden relative w-full rounded-xl py-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-indigo-300 bg-opacity-90 py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base pb-1 font-semibold">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button onClick={handleAddToCart}
                className="md:px-10 px-7 md:py-2.5 py-2 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-700">
                  {slide.button}
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <img
                className="md:w-72 w-58"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-indigo-600' : 'bg-gray-500/30'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;