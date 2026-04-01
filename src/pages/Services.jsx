import './Services.css';

function Services() {
    const mainServices = [
        {
            id: 1,
            title: 'Laundry Service',
            icon: '🧺',
            description: 'Professional laundry and dry cleaning services for all your garments.',
            features: [
                'Same-day service available',
                'Dry cleaning for delicate fabrics',
                'Pressing and ironing',
                'Shoe shine service',
                'Eco-friendly detergents available'
            ],
            pricing: 'Starting from $15 per item'
        },
        {
            id: 2,
            title: 'Free High-Speed WiFi',
            icon: '📶',
            description: 'Complimentary high-speed internet access throughout the entire property.',
            features: [
                'Fiber optic connection',
                'Up to 500 Mbps speed',
                'Secure encrypted network',
                'Available in all rooms and public areas',
                'Multiple device support'
            ],
            pricing: 'Free for all guests'
        }
    ];

    const additionalServices = [
        {
            icon: '🚗',
            title: 'Valet Parking',
            description: '24/7 secure valet parking service for your convenience.'
        },
        {
            icon: '🛎️',
            title: 'Concierge',
            description: 'Personal concierge to assist with reservations, tours, and recommendations.'
        },
        {
            icon: '🏊',
            title: 'Spa & Wellness',
            description: 'Full-service spa with massages, treatments, and wellness programs.'
        },
        {
            icon: '💪',
            title: 'Fitness Center',
            description: 'State-of-the-art gym with modern equipment and personal trainers.'
        },
        {
            icon: '🍽️',
            title: '24/7 Room Service',
            description: 'In-room dining available around the clock with extensive menu options.'
        },
        {
            icon: '🏢',
            title: 'Business Center',
            description: 'Fully equipped business center with meeting rooms and conference facilities.'
        },
        {
            icon: '👶',
            title: 'Babysitting',
            description: 'Professional childcare services available upon request.'
        },
        {
            icon: '🐕',
            title: 'Pet Friendly',
            description: 'Welcome your furry friends with our pet-friendly accommodations.'
        }
    ];

    return (
        <main className="services-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Experience world-class amenities and personalized service</p>
                </div>
            </section>

            {/* Featured Services */}
            <section className="section featured-services-section">
                <div className="container">
                    <div className="section-title">
                        <p>What We Offer</p>
                        <h2>Premium Services</h2>
                    </div>

                    <div className="featured-services-grid">
                        {mainServices.map((service) => (
                            <div key={service.id} className="featured-service-card">
                                <div className="featured-service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p className="featured-service-description">{service.description}</p>
                                <ul className="featured-service-features">
                                    {service.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="featured-service-pricing">{service.pricing}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section additional-services-section">
                <div className="container">
                    <div className="section-title">
                        <p>More Amenities</p>
                        <h2>Additional Services</h2>
                    </div>

                    <div className="additional-services-grid">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="additional-service-card">
                                <span className="additional-service-icon">{service.icon}</span>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Banner */}
            <section className="service-banner-section">
                <div className="service-banner-overlay"></div>
                <div className="container">
                    <div className="service-banner-content">
                        <h2>Need Something Special?</h2>
                        <p>Our dedicated team is available 24/7 to cater to your every need. Contact our concierge for personalized assistance.</p>
                        <a href="tel:+15551234567" className="btn btn-primary">
                            Call Concierge
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Services;