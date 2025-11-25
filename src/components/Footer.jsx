import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" itemScope itemType="https://schema.org/WPFooter">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Puzzel Finance</h4>
            <p className="footer-description" itemProp="description">
              Empowering individuals and businesses with innovative financial solutions 
              for a smarter tomorrow.
            </p>
            <div className="footer-contact" itemScope itemType="https://schema.org/Organization">
              <p itemProp="email">
                <strong>Email:</strong> info@puzzelfinance.com
              </p>
              <p itemProp="telephone">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <strong>Address:</strong> <span itemProp="streetAddress">123 Financial District</span>, 
                <span itemProp="addressLocality"> New York</span>, 
                <span itemProp="addressRegion"> NY</span> 
                <span itemProp="postalCode">10004</span>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about" itemProp="url">About Us</Link></li>
              <li><Link to="/products" itemProp="url">Products</Link></li>
              <li><Link to="/services" itemProp="url">Services</Link></li>
              <li><Link to="/pricing" itemProp="url">Pricing</Link></li>
              <li><Link to="/contact" itemProp="url">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/faq" itemProp="url">FAQ</Link></li>
              <li><a href="#" itemProp="url">Blog</a></li>
              <li><a href="#" itemProp="url">Help Center</a></li>
              <li><a href="#" itemProp="url">API Documentation</a></li>
              <li><a href="#" itemProp="url">Security</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="#" itemProp="url">LinkedIn</a></li>
              <li><a href="#" itemProp="url">Twitter</a></li>
              <li><a href="#" itemProp="url">Facebook</a></li>
              <li><a href="#" itemProp="url">Instagram</a></li>
              <li><a href="#" itemProp="url">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Puzzel Finance. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
            <span>•</span>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

