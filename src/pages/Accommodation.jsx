import './Accommodation.css';

function Accommodation() {
    const rooms = [
        {
            id: 1,
            name: 'Standard Room',
            size: '35 sqm',
            occupancy: '2 Adults',
            price: '$150',
            description: 'Elegantly designed room with modern amenities and city views.',
            features: ['King or Twin Beds', 'City View', 'Work Desk', 'Mini Bar', 'Smart TV', 'Rain Shower'],
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        },
        {
            id: 2,
            name: 'Deluxe Room',
            size: '45 sqm',
            occupancy: '2 Adults + 1 Child',
            price: '$220',
            description: 'Spacious room with premium furnishings and panoramic city views.',
            features: ['King Bed', 'Panoramic View', 'Seating Area', 'Mini Bar', 'Smart TV', 'Bathtub'],
            image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        },
        {
            id: 3,
            name: 'Executive Suite',
            size: '65 sqm',
            occupancy: '2 Adults + 2 Children',
            price: '$350',
            description: 'Luxurious suite with separate living area and premium amenities.',
            features: ['King Bed', 'Living Room', 'City Skyline View', 'Jacuzzi', 'Butler Service', 'Lounge Access'],
            image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop'
        },
        {
            id: 4,
            name: 'Penthouse Suite',
            size: '120 sqm',
            occupancy: '4 Adults',
            price: '$650',
            description: 'Ultimate luxury with private terrace, panoramic views, and exclusive services.',
            features: ['King Bed', 'Private Terrace', 'Panoramic Views', 'Private Bar', 'Dining Area', 'Personal Butler'],
            image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
        }
    ];

    const amenities = [
        { icon: '🛏️', text: 'Premium Bedding' },
        { icon: '📶', text: 'Free High-Speed WiFi' },
        { icon: '🍽️', text: '24/7 Room Service' },
        { icon: '🧹', text: 'Daily Housekeeping' },
        { icon: '❄️', text: 'Climate Control' },
        { icon: '📺', text: 'Smart Entertainment' }
    ];

    return (
        <main className="accommodation-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>Accommodation</h1>
                    <p>Experience comfort and luxury in our beautifully appointed rooms</p>
                </div>
            </section>

            {/* Room Amenities Banner */}
            <section className="room-amenities-banner">
                <div className="container">
                    <div className="amenities-grid">
                        {amenities.map((amenity, index) => (
                            <div key={index} className="amenity-item">
                                <span className="amenity-icon">{amenity.icon}</span>
                                <span className="amenity-text">{amenity.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="section rooms-section">
                <div className="container">
                    <div className="section-title">
                        <p>Our Rooms</p>
                        <h2>Choose Your Perfect Stay</h2>
                    </div>

                    <div className="rooms-grid">
                        {rooms.map((room) => (
                            <div key={room.id} className="room-card">
                                <div className="room-image">
                                    <img src={room.image} alt={room.name} loading="lazy" />
                                    <div className="room-price">
                                        <span className="price-amount">{room.price}</span>
                                        <span className="price-period">/ night</span>
                                    </div>
                                </div>
                                <div className="room-content">
                                    <div className="room-meta">
                                        <span>{room.size}</span>
                                        <span className="meta-divider">|</span>
                                        <span>{room.occupancy}</span>
                                    </div>
                                    <h3>{room.name}</h3>
                                    <p>{room.description}</p>
                                    <ul className="room-features">
                                        {room.features.map((feature, index) => (
                                            <li key={index}>
                                                <span className="feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="/contact" className="btn btn-primary room-btn">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="booking-cta-section">
                <div className="booking-cta-overlay"></div>
                <div className="container">
                    <div className="booking-cta-content">
                        <h2>Ready to Book Your Perfect Room?</h2>
                        <p>Contact our reservations team for special rates and personalized service.</p>
                        <div className="booking-cta-buttons">
                            <a href="/contact" className="btn btn-primary">
                                Make a Reservation
                            </a>
                            <a href="tel:+15551234567" className="btn btn-secondary">
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Accommodation;