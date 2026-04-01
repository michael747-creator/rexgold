import './Dining.css';

function Restaurant() {
    const menuHighlights = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Lobster Bisque', description: 'Creamy lobster soup with cognac and fresh herbs', price: '$18' },
                { name: 'Beef Carpaccio', description: 'Thinly sliced wagyu beef with arugula and parmesan', price: '$22' },
                { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower puree', price: '$24' }
            ]
        },
        {
            category: 'Main Course',
            items: [
                { name: 'Grilled Ribeye Steak', description: 'Prime aged beef with roasted vegetables', price: '$55' },
                { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon butter sauce', price: '$42' },
                { name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction', price: '$48' }
            ]
        },
        {
            category: 'Desserts',
            items: [
                { name: 'Chocolate Soufflé', description: 'Warm chocolate cake with vanilla ice cream', price: '$14' },
                { name: 'Crème Brûlée', description: 'Classic French custard with caramelized sugar', price: '$12' },
                { name: 'Tiramisu', description: 'Italian classic with espresso and mascarpone', price: '$13' }
            ]
        }
    ];

    const features = [
        { icon: '👨‍🍳', title: 'Executive Chef', description: 'Award-winning culinary team' },
        { icon: '🍷', title: 'Wine Cellar', description: 'Over 200 premium selections' },
        { icon: '🌿', title: 'Fresh Ingredients', description: 'Locally sourced produce' },
        { icon: '🕯️', title: 'Ambiance', description: 'Elegant dining atmosphere' }
    ];

    return (
        <main className="dining-page">
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>The Rexgold Restaurant</h1>
                    <p>Fine dining experience with international cuisine</p>
                </div>
            </section>

            <section className="section restaurant-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>A Culinary Journey</h2>
                            <p>Experience exceptional dining at our signature restaurant, where world-class cuisine meets elegant ambiance. Our executive chef crafts each dish with passion, using only the finest locally-sourced ingredients.</p>
                            <p>Whether you're here for a romantic dinner, business lunch, or special celebration, our team ensures an unforgettable dining experience.</p>
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
                        <p>Our Menu</p>
                        <h2>Menu Highlights</h2>
                    </div>

                    <div className="menu-grid">
                        {menuHighlights.map((category, index) => (
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
                        <h2>Reserve Your Table</h2>
                        <p>Book a table for an unforgettable dining experience</p>
                        <div className="reservation-buttons">
                            <a href="/contact" className="btn btn-primary">Make a Reservation</a>
                            <a href="tel:+15551234567" className="btn btn-secondary">Call Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Restaurant;