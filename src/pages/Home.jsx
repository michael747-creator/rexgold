import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Home.css';

function Home() {
    const services = [
        {
            id: 1,
            title: 'Accommodation',
            description: 'Luxurious rooms and suites designed for ultimate comfort and elegance.',
            icon: '🛏️',
            link: '/accommodation',
            features: ['Premium Bedding', 'City Views', 'Smart Room Controls', '24/7 Room Service']
        },
        {
            id: 2,
            title: 'Restaurant',
            description: 'World-class dining experience with international and local cuisine.',
            icon: '🍽️',
            link: '/restaurant',
            features: ['Fine Dining', 'Chef Specials', 'Private Dining', 'Wine Cellar']
        },
        {
            id: 3,
            title: 'Bar',
            description: 'Sophisticated bar with premium spirits, cocktails, and ambiance.',
            icon: '🍸',
            link: '/bar',
            features: ['Signature Cocktails', 'Premium Spirits', 'Live Music', 'Happy Hours']
        },
        {
            id: 4,
            title: 'Lounge',
            description: 'Relax in our elegant lounge with premium amenities and service.',
            icon: '🛋️',
            link: '/lounge',
            features: ['Comfortable Seating', 'Ambient Music', 'Light Refreshments', 'Business Friendly']
        },
        {
            id: 5,
            title: 'Club',
            description: 'Experience vibrant nightlife with DJ performances and entertainment.',
            icon: '🎵',
            link: '/club',
            features: ['DJ Nights', 'VIP Area', 'Dance Floor', 'Special Events']
        },
        {
            id: 6,
            title: 'Services',
            description: 'Comprehensive services including laundry and free high-speed WiFi.',
            icon: '🧹',
            link: '/services',
            features: ['Laundry Service', 'Free WiFi', 'Concierge', 'Valet Parking']
        }
    ];

    const whyChoose = [
        {
            number: '01',
            title: 'Prime Location',
            description: 'Situated in the heart of the city with easy access to major attractions.'
        },
        {
            number: '02',
            title: 'Exceptional Service',
            description: 'Our dedicated staff ensures every moment of your stay is perfect.'
        },
        {
            number: '03',
            title: 'Luxury Amenities',
            description: 'From spa to fine dining, enjoy world-class facilities.'
        },
        {
            number: '04',
            title: 'Best Value',
            description: 'Premium experience at competitive prices with special offers.'
        }
    ];

    return (
        <main className="home">
            <Hero />

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-title">
                        <p>What We Offer</p>
                        <h2>Our Premium Services</h2>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <Link to={service.link} key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <span className="service-link">
                                    Learn More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-section">
                <div className="container">
                    <div className="section-title">
                        <p>Why Rexgold</p>
                        <h2>Experience The Difference</h2>
                    </div>

                    <div className="why-grid">
                        {whyChoose.map((item) => (
                            <div key={item.number} className="why-card">
                                <span className="why-number">{item.number}</span>
                                <h3 className="why-title">{item.title}</h3>
                                <p className="why-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready for an Unforgettable Experience?</h2>
                        <p>Book your stay today and discover the art of luxury hospitality.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Make a Reservation
                            </Link>
                            <Link to="/accommodation" className="btn btn-secondary">
                                View Rooms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;