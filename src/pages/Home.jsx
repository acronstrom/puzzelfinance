import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page" itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section className="hero" itemScope itemType="https://schema.org/Organization">
        <div className="container">
          <h1 itemProp="name">Welcome to Puzzel Finance</h1>
          <p className="hero-subtitle" itemProp="description">
            Innovative financial solutions powered by AI. Simplify your investments, 
            maximize your returns, and secure your financial future.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
            <Link to="/products" className="btn btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section" itemScope itemType="https://schema.org/AboutPage">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" itemProp="about">
              <h2 className="stat-number">$50B+</h2>
              <p className="stat-label">Assets Under Management</p>
            </div>
            <div className="stat-card" itemProp="about">
              <h2 className="stat-number">250K+</h2>
              <p className="stat-label">Active Users Worldwide</p>
            </div>
            <div className="stat-card" itemProp="about">
              <h2 className="stat-number">98%</h2>
              <p className="stat-label">Client Satisfaction Rate</p>
            </div>
            <div className="stat-card" itemProp="about">
              <h2 className="stat-number">15+</h2>
              <p className="stat-label">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-alt features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Puzzel Finance?</h2>
            <p className="section-description">
              Experience the next generation of financial management with our cutting-edge platform
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">🚀</div>
              <h3>AI-Powered Insights</h3>
              <p>
                Leverage advanced machine learning algorithms to make data-driven investment 
                decisions and optimize your portfolio performance in real-time.
              </p>
            </div>

            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">🔒</div>
              <h3>Bank-Level Security</h3>
              <p>
                Your financial data is protected with 256-bit encryption, multi-factor 
                authentication, and compliance with international security standards.
              </p>
            </div>

            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">📊</div>
              <h3>Real-Time Analytics</h3>
              <p>
                Access comprehensive dashboards with live market data, performance metrics, 
                and customizable reports to track your financial goals.
              </p>
            </div>

            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">💼</div>
              <h3>Portfolio Diversification</h3>
              <p>
                Build a balanced portfolio across stocks, bonds, ETFs, and alternative 
                investments with intelligent asset allocation recommendations.
              </p>
            </div>

            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">🎯</div>
              <h3>Goal-Based Planning</h3>
              <p>
                Set and track financial goals with personalized strategies for retirement, 
                education, home purchase, and wealth building.
              </p>
            </div>

            <div className="card feature-card" itemProp="feature">
              <div className="feature-icon">🌐</div>
              <h3>Global Markets Access</h3>
              <p>
                Trade and invest in markets worldwide with access to over 50,000 securities 
                across multiple exchanges and asset classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section products-preview">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Premium Products</h2>
            <p className="section-description">
              Professional-grade financial tools designed for modern investors
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card product-preview-card">
              <div className="product-badge">POPULAR</div>
              <h3>Smart Portfolio Manager</h3>
              <p className="product-price">Starting at $29/month</p>
              <p>
                Automated portfolio rebalancing, tax-loss harvesting, and intelligent 
                asset allocation powered by AI.
              </p>
              <Link to="/products" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>

            <div className="card product-preview-card">
              <div className="product-badge">NEW</div>
              <h3>Risk Analytics Suite</h3>
              <p className="product-price">Starting at $49/month</p>
              <p>
                Advanced risk assessment tools with stress testing, scenario analysis, 
                and portfolio optimization features.
              </p>
              <Link to="/products" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>

            <div className="card product-preview-card">
              <h3>Wealth Optimizer</h3>
              <p className="product-price">Starting at $99/month</p>
              <p>
                Comprehensive wealth management platform with estate planning, 
                tax optimization, and multi-generational wealth strategies.
              </p>
              <Link to="/products" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Financial Future?</h2>
            <p>
              Join thousands of satisfied clients who trust Puzzel Finance for their 
              investment and wealth management needs.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

