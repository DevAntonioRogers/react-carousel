import './Slider.scss'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  useEffect(() => {
    const slide = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(slide)
  }, [currentSlide])
  
  const images = [
    'https://images.unsplash.com/photo-1494607239400-ff147da48308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
    'https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1582124448694-88b2445077b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  ]
  return (
   <div className='slider'>
     <div className='image-container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
       <img src={images[0]} alt='' />
       <img src={images[1]} alt='' />
       <img src={images[2]} alt='' />
     </div>

     <div className='icons'>
       <div className='icon' onClick={prevSlide}>
         <FaRegArrowAltCircleLeft />
       </div>
       <div className='icon' onClick={nextSlide}>
         <FaRegArrowAltCircleRight />
       </div>
     </div>
   </div>
  )
};

export default Slider;
