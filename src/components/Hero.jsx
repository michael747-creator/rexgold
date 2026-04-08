import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/WhatsApp Image 2026-04-01 at 8.09.21 AM (1).jpeg';

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
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

                <div className="hero-action-cards">
                    <Link to="/contact" className="action-card action-card-booking">
                        <div className="action-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div className="action-card-content">
                            <h3 className="action-card-title">Book Your Stay</h3>
                            <p className="action-card-description">Reserve your perfect room and experience luxury like never before</p>
                            <span className="action-card-cta">
                                Book Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div className="action-card-glow"></div>
                    </Link>

                    <Link to="/accommodation" className="action-card action-card-rooms">
                        <div className="action-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <div className="action-card-content">
                            <h3 className="action-card-title">Explore Rooms</h3>
                            <p className="action-card-description">Discover our elegantly designed suites and rooms</p>
                            <span className="action-card-cta">
                                View All Rooms
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div className="action-card-glow"></div>
                    </Link>
                </div>

                <div className="hero-buttons">
                    <Link to="/contact" className="btn btn-primary hero-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Book Your Stay
                    </Link>
                    <Link to="/accommodation" className="btn btn-secondary hero-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Explore Rooms
                    </Link>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="hero-scroll-indicator">
                    <div className="hero-scroll-mouse">
                        <div className="hero-scroll-wheel"></div>
                    </div>
                </div>
            </div>

            {/* Animated particles/decorative elements */}
            <div className="hero-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
        </section>
    );
}

export default Hero;