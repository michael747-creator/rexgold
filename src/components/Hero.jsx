import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg1 from '../assets/WhatsApp Image 2026-04-01 at 8.09.20 AM.jpeg';
import heroBg2 from '../assets/WhatsApp Image 2026-04-01 at 8.09.21 AM (1).jpeg';

const carouselImages = [heroBg1, heroBg2];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + carouselImages.length) % carouselImages.length
        );
    };

    const goToNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    };

    return (
        <section className="hero">
            {/* Carousel Background */}
            <div className="hero-carousel">
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>

            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-badge">Welcome to</div>
                <h1 className="hero-title">Rexgold Hotel & Suites</h1>
                <p className="hero-subtitle">
                    Experience Unparalleled Luxury & World-Class Hospitality
                </p>
                <p className="hero-description">
                    Discover a sanctuary of elegance where every detail is crafted for your comfort.
                    From exquisite dining to premium accommodations, we redefine the art of hospitality.
                </p>
                <div className="hero-buttons">
                    <Link to="/contact" className="btn btn-primary hero-btn">
                        Book Your Stay
                    </Link>
                    <Link to="/accommodation" className="btn btn-secondary hero-btn">
                        Explore Rooms
                    </Link>
                </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="hero-carousel-dots">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Carousel Navigation Arrows */}
            <button
                className="hero-carousel-arrow hero-carousel-arrow-left"
                onClick={goToPrevious}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                className="hero-carousel-arrow hero-carousel-arrow-right"
                onClick={goToNext}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="hero-scroll-indicator">
                    <div className="hero-scroll-mouse">
                        <div className="hero-scroll-wheel"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;