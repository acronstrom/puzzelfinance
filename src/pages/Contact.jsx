import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'general',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: 'general',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="contact-page" itemScope itemType="https://schema.org/ContactPage">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-description">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll be in touch soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} itemScope itemType="https://schema.org/ContactForm">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      itemProp="name"
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
                      required
                      placeholder="john@example.com"
                      itemProp="email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      itemProp="telephone"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      itemProp="organization"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">I'm interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      itemProp="interest"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="services">Services</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us more about your needs..."
                      itemProp="message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <div className="contact-info-card card">
                <h3>Contact Information</h3>
                <div className="info-item" itemScope itemType="https://schema.org/Organization">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p itemProp="email">
                      <a href="mailto:info@puzzelfinance.com">info@puzzelfinance.com</a>
                    </p>
                    <p className="info-note">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p itemProp="telephone">
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </p>
                    <p className="info-note">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="info-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Office</h4>
                    <p>
                      <span itemProp="streetAddress">123 Financial District</span><br />
                      <span itemProp="addressLocality">New York</span>, <span itemProp="addressRegion">NY</span> <span itemProp="postalCode">10004</span><br />
                      <span itemProp="addressCountry">United States</span>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">💬</div>
                  <div>
                    <h4>Live Chat</h4>
                    <p>
                      Click the chat icon in the bottom right corner for instant support
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card card">
                <h3>Office Hours</h3>
                <div className="hours-list" itemProp="openingHours">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
                <p className="hours-note">
                  Enterprise customers have access to 24/7 support
                </p>
              </div>

              <div className="contact-info-card card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <span>𝕏</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <span>f</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <span>📷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-alt map-section">
        <div className="container">
          <h2 className="text-center mb-3">Our Locations</h2>
          <div className="locations-grid">
            <div className="location-card card" itemScope itemType="https://schema.org/Place">
              <h3 itemProp="name">New York (Headquarters)</h3>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">123 Financial District</span><br />
                <span itemProp="addressLocality">New York</span>, <span itemProp="addressRegion">NY</span> <span itemProp="postalCode">10004</span>
              </p>
              <p className="location-contact" itemProp="telephone">+1 (555) 123-4567</p>
            </div>

            <div className="location-card card" itemScope itemType="https://schema.org/Place">
              <h3 itemProp="name">San Francisco</h3>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">456 Market Street, Suite 800</span><br />
                <span itemProp="addressLocality">San Francisco</span>, <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">94102</span>
              </p>
              <p className="location-contact" itemProp="telephone">+1 (555) 234-5678</p>
            </div>

            <div className="location-card card" itemScope itemType="https://schema.org/Place">
              <h3 itemProp="name">London</h3>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">789 Canary Wharf</span><br />
                <span itemProp="addressLocality">London</span> <span itemProp="postalCode">E14 5AB</span><br />
                <span itemProp="addressCountry">United Kingdom</span>
              </p>
              <p className="location-contact" itemProp="telephone">+44 20 1234 5678</p>
            </div>

            <div className="location-card card" itemScope itemType="https://schema.org/Place">
              <h3 itemProp="name">Singapore</h3>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">12 Marina Boulevard, #15-01</span><br />
                <span itemProp="addressLocality">Singapore</span> <span itemProp="postalCode">018982</span>
              </p>
              <p className="location-contact" itemProp="telephone">+65 6123 4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

