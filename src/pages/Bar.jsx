import './Dining.css';
import barBg from '../assets/WhatsApp Image 2026-04-01 at 9.34.42 AM.jpeg';

function Bar() {
    const cocktails = [
        {
            category: 'Signature Cocktails',
            items: [
                { name: 'Rexgold Martini', description: 'Premium vodka, elderflower liqueur, champagne foam', price: '$18' },
                { name: 'Golden Sunset', description: 'Whiskey, amaretto, orange bitters, gold flakes', price: '$22' },
                { name: 'Midnight in Paris', description: 'Cognac, champagne, blackberry liqueur', price: '$20' }
            ]
        },
        {
            category: 'Classic Cocktails',
            items: [
                { name: 'Old Fashioned', description: 'Bourbon, angostura bitters, sugar cube, orange peel', price: '$16' },
                { name: 'Negroni', description: 'Gin, campari, sweet vermouth, orange twist', price: '$15' },
                { name: 'Mojito', description: 'White rum, fresh mint, lime, soda water', price: '$14' }
            ]
        },
        {
            category: 'Premium Spirits',
            items: [
                { name: 'Single Malt Scotch', description: 'Selection of 12-25 year aged whiskies', price: 'From $20' },
                { name: 'Aged Rum', description: 'Caribbean rums aged 8-15 years', price: 'From $18' },
                { name: 'Cognac', description: 'VSOP and XO selections', price: 'From $25' }
            ]
        }
    ];

    const features = [
        { icon: '🍸', title: 'Craft Cocktails', description: 'Handcrafted by expert mixologists' },
        { icon: '🎷', title: 'Live Music', description: 'Jazz nights every weekend' },
        { icon: '🌃', title: 'Rooftop View', description: 'Stunning city skyline views' },
        { icon: '🕐', title: 'Happy Hour', description: 'Daily 5PM - 7PM' }
    ];

    return (
        <main className="dining-page">
            <section className="page-header bar-header" style={{ backgroundImage: `url(${barBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>The Rexgold Bar</h1>
                    <p>Sophisticated cocktails and premium spirits</p>
                </div>
            </section>

            <section className="section restaurant-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>An Elegant Escape</h2>
                            <p>Step into our sophisticated bar, where expert mixologists craft exceptional cocktails in an atmosphere of refined elegance. Whether you prefer a classic martini or our signature creations, every drink is a masterpiece.</p>
                            <p>Enjoy live jazz performances on weekends while savoring premium spirits and stunning city views from our elegant lounge.</p>
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
                        <p>Our Selection</p>
                        <h2>Drinks Menu</h2>
                    </div>

                    <div className="menu-grid">
                        {cocktails.map((category, index) => (
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
                        <h2>Join Us for Drinks</h2>
                        <p>Experience the perfect evening at our sophisticated bar</p>
                        <div className="reservation-buttons">
                            <a href="/contact" className="btn btn-primary">Reserve a Table</a>
                            <a href="tel:+15551234567" className="btn btn-secondary">Call Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Bar;