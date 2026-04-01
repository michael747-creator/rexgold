import './Dining.css';

function Lounge() {
    const offerings = [
        {
            category: 'Light Bites',
            items: [
                { name: 'Artisan Cheese Board', description: 'Selection of imported cheeses, crackers, and fruits', price: '$28' },
                { name: 'Truffle Fries', description: 'Crispy fries with truffle oil and parmesan', price: '$14' },
                { name: 'Smoked Salmon Platter', description: 'House-cured salmon with capers and cream cheese', price: '$22' }
            ]
        },
        {
            category: 'Tea & Coffee',
            items: [
                { name: 'Premium Tea Selection', description: 'Earl Grey, Jasmine, Chamomile, English Breakfast', price: '$8' },
                { name: 'Espresso', description: 'Single or double shot of premium arabica', price: '$6' },
                { name: 'Cappuccino', description: 'Rich espresso with steamed milk foam', price: '$7' }
            ]
        },
        {
            category: 'Pastries',
            items: [
                { name: 'Fresh Croissants', description: 'Buttery French pastry, plain or chocolate', price: '$6' },
                { name: 'Macarons', description: 'Assorted French macarons (3 pieces)', price: '$12' },
                { name: 'Cheesecake', description: 'New York style with berry compote', price: '$10' }
            ]
        }
    ];

    const features = [
        { icon: '🛋️', title: 'Comfortable Seating', description: 'Plush sofas and armchairs' },
        { icon: '📚', title: 'Reading Corner', description: 'Selection of books and magazines' },
        { icon: '🎵', title: 'Ambient Music', description: 'Relaxing background melodies' },
        { icon: '💼', title: 'Business Friendly', description: 'Perfect for meetings and work' }
    ];

    return (
        <main className="dining-page">
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>The Rexgold Lounge</h1>
                    <p>Relax in sophisticated comfort</p>
                </div>
            </section>

            <section className="section restaurant-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Your Relaxation Sanctuary</h2>
                            <p>Escape to our elegant lounge, where time slows down and comfort reigns supreme. Whether you're here for a quiet afternoon tea, a business meeting, or simply to unwind with a good book, our lounge provides the perfect setting.</p>
                            <p>Indulge in our selection of fine teas, premium coffees, and light refreshments while surrounded by sophisticated ambiance and attentive service.</p>
                        </div>
                        <div className="intro-features">
                            {features.map((feature, index) => (
                                <div key={index} className="intro-feature">
                                    <span className="feature-icon">{feature.icon}</span>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section menu-section">
                <div className="container">
                    <div className="section-title">
                        <p>Lounge Menu</p>
                        <h2>Our Offerings</h2>
                    </div>

                    <div className="menu-grid">
                        {offerings.map((category, index) => (
                            <div key={index} className="menu-category">
                                <h3>{category.category}</h3>
                                <ul className="menu-items">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="menu-item">
                                            <div className="item-header">
                                                <span className="item-name">{item.name}</span>
                                                <span className="item-price">{item.price}</span>
                                            </div>
                                            <p className="item-description">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="reservation-banner">
                <div className="reservation-banner-overlay"></div>
                <div className="container">
                    <div className="reservation-content">
                        <h2>Unwind With Us</h2>
                        <p>Experience the perfect blend of relaxation and elegance</p>
                        <div className="reservation-buttons">
                            <a href="/contact" className="btn btn-primary">Reserve a Spot</a>
                            <a href="tel:+15551234567" className="btn btn-secondary">Call Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Lounge;