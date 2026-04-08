import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: 'standard',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build WhatsApp message
        const whatsappMessage = `*New Reservation Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `${formData.phone ? `*Phone:* ${formData.phone}\n` : ''}` +
            `*Check-in:* ${formData.checkIn}\n` +
            `*Check-out:* ${formData.checkOut}\n` +
            `*Guests:* ${formData.guests}\n` +
            `*Room Type:* ${formData.roomType}\n` +
            `${formData.message ? `\n*Special Requests:* ${formData.message}` : ''}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp phone number (replace with your hotel's WhatsApp number)
        const whatsappNumber = '15551234567'; // Format: country code + number (e.g., 1 for US)

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Show success message
        setFormStatus('success');
        setTimeout(() => setFormStatus(''), 3000);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: '1',
            roomType: 'standard',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Address',
            details: ['123 Luxury Avenue', 'Premium District', 'Metropolitan City, MC 10001']
        },
        {
            icon: '📞',
            title: 'Phone',
            details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
        },
        {
            icon: '📧',
            title: 'Email',
            details: ['info@rexgoldhotel.com', 'reservations@rexgoldhotel.com']
        },
        {
            icon: '🕐',
            title: 'Working Hours',
            details: ['Reception: 24/7', 'Reservations: Mon-Sun', '9:00 AM - 10:00 PM']
        }
    ];

    return (
        <main className="contact-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team for reservations and inquiries</p>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="section booking-section">
                <div className="container">
                    <div className="section-title">
                        <p>Book Your Stay</p>
                        <h2>Make a Reservation</h2>
                    </div>

                    <div className="booking-form-container">
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="guests">Number of Guests</label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                    >
                                        {[1, 2, 3, 4, 5, 6, '7+'].map((num) => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="checkIn">Check-in Date *</label>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="checkOut">Check-out Date *</label>
                                    <input
                                        type="date"
                                        id="checkOut"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="roomType">Room Type</label>
                                    <select
                                        id="roomType"
                                        name="roomType"
                                        value={formData.roomType}
                                        onChange={handleChange}
                                    >
                                        <option value="standard">Standard Room</option>
                                        <option value="deluxe">Deluxe Room</option>
                                        <option value="suite">Executive Suite</option>
                                        <option value="penthouse">Penthouse Suite</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Special Requests</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Any special requests or additional information..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Check Availability
                            </button>

                            {formStatus === 'success' && (
                                <div className="form-success">
                                    Thank you! We'll contact you shortly to confirm your reservation.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section contact-info-section">
                <div className="container">
                    <div className="section-title">
                        <p>Get In Touch</p>
                        <h2>Contact Information</h2>
                    </div>

                    <div className="contact-grid">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contact-card">
                                <span className="contact-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                {item.details.map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-content">
                        <h3>Find Us</h3>
                        <p>123 Luxury Avenue, Premium District</p>
                        <p>Metropolitan City, MC 10001</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;