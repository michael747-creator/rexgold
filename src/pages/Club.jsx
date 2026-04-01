import './Club.css';

function Club() {
    const events = [
        {
            day: 'Thursday',
            event: 'R&B Night',
            description: 'Smooth R&B beats with resident DJs',
            time: '10 PM - 3 AM'
        },
        {
            day: 'Friday',
            event: 'House Party',
            description: 'Electronic house music with special guest DJs',
            time: '10 PM - 4 AM'
        },
        {
            day: 'Saturday',
            event: 'VIP Night',
            description: 'Premium experience with top-tier entertainment',
            time: '10 PM - 5 AM'
        },
        {
            day: 'Sunday',
            event: 'Sunset Sessions',
            description: 'Chill vibes to end your weekend right',
            time: '6 PM - 12 AM'
        }
    ];

    const features = [
        { icon: '🎧', title: 'World-Class DJs', description: 'International and resident DJs' },
        { icon: '🍾', title: 'VIP Service', description: 'Premium bottle service and private areas' },
        { icon: '💃', title: 'Dance Floor', description: 'State-of-the-art sound and lighting' },
        { icon: '🎉', title: 'Special Events', description: 'Themed nights and celebrity appearances' }
    ];

    return (
        <main className="club-page">
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>The Rexgold Club</h1>
                    <p>Experience the ultimate nightlife</p>
                </div>
            </section>

            <section className="section club-intro">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>Nightlife Redefined</h2>
                            <p>Step into Rexgold Club, where the night comes alive with pulsating beats, stunning visuals, and an electric atmosphere. Our world-class DJs spin the finest selection of house, R&B, and electronic music to keep you dancing until dawn.</p>
                            <p>Whether you're celebrating a special occasion or simply looking for an unforgettable night out, our VIP service and premium amenities ensure an experience like no other.</p>
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

            <section className="section events-section">
                <div className="container">
                    <div className="section-title">
                        <p>Weekly Schedule</p>
                        <h2>Upcoming Events</h2>
                    </div>

                    <div className="events-grid">
                        {events.map((event, index) => (
                            <div key={index} className="event-card">
                                <div className="event-day">{event.day}</div>
                                <h3>{event.event}</h3>
                                <p className="event-description">{event.description}</p>
                                <div className="event-time">{event.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="vip-section">
                <div className="vip-overlay"></div>
                <div className="container">
                    <div className="vip-content">
                        <h2>VIP Experience</h2>
                        <p>Book our exclusive VIP area for the ultimate club experience. Enjoy private service, premium bottle selection, and the best views of the dance floor.</p>
                        <div className="vip-perks">
                            <div className="perk">Private Entrance</div>
                            <div className="perk">Dedicated Server</div>
                            <div className="perk">Premium Seating</div>
                            <div className="perk">Exclusive Menu</div>
                        </div>
                        <div className="vip-buttons">
                            <a href="/contact" className="btn btn-primary">Book VIP Table</a>
                            <a href="tel:+15551234567" className="btn btn-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Club;