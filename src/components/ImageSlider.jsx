import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next image">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="thumbnails">
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Thumbnail ${idx + 1}`} 
            className={idx === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
