import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navbar" itemScope itemType="https://schema.org/SiteNavigationElement">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo" itemProp="name">
            <span className="logo-icon">⬢</span>
            Puzzel Finance
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                itemProp="url"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={location.pathname === '/products' ? 'active' : ''}
                itemProp="url"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}
                itemProp="url"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={location.pathname === '/pricing' ? 'active' : ''}
                itemProp="url"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={location.pathname === '/faq' ? 'active' : ''}
                itemProp="url"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                itemProp="url"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

