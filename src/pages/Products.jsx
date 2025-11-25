import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  return (
    <div className="products-page" itemScope itemType="https://schema.org/Product">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Our Products</h1>
          <p className="hero-subtitle">
            Professional-grade financial tools powered by artificial intelligence
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="product-showcase">
            {/* Smart Portfolio Manager */}
            <div className="product-detail card" itemScope itemType="https://schema.org/SoftwareApplication">
              <div className="product-header">
                <div>
                  <span className="product-label">MOST POPULAR</span>
                  <h2 itemProp="name">Smart Portfolio Manager</h2>
                  <p className="product-tagline" itemProp="description">
                    Intelligent portfolio management with automated rebalancing
                  </p>
                </div>
                <div className="product-price-tag">
                  <span className="price-amount" itemProp="price">$29</span>
                  <span className="price-period">/month</span>
                </div>
              </div>

              <div className="product-body">
                <h3>Key Features</h3>
                <ul className="features-list" itemProp="featureList">
                  <li>✓ AI-powered asset allocation and rebalancing</li>
                  <li>✓ Automated tax-loss harvesting to minimize tax liability</li>
                  <li>✓ Real-time portfolio monitoring and alerts</li>
                  <li>✓ Diversification analysis across asset classes</li>
                  <li>✓ Performance tracking and benchmarking</li>
                  <li>✓ Integration with 1,000+ brokerages</li>
                  <li>✓ Mobile app for iOS and Android</li>
                  <li>✓ Custom investment policies and constraints</li>
                </ul>

                <h3>Ideal For</h3>
                <p>
                  Individual investors, financial advisors, and small investment firms 
                  looking to automate portfolio management and optimize returns while 
                  minimizing tax implications.
                </p>

                <h3>Technical Specifications</h3>
                <ul className="specs-list">
                  <li><strong>API Access:</strong> REST API with real-time webhooks</li>
                  <li><strong>Data Security:</strong> 256-bit AES encryption</li>
                  <li><strong>Compliance:</strong> SEC registered investment advisor</li>
                  <li><strong>Uptime SLA:</strong> 99.9% guaranteed</li>
                  <li><strong>Data Updates:</strong> Real-time market data</li>
                </ul>

                <div className="product-actions">
                  <Link to="/pricing" className="btn btn-primary">
                    Get Started
                  </Link>
                  <a href="#" className="btn btn-secondary">
                    View Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Risk Analytics Suite */}
            <div className="product-detail card" itemScope itemType="https://schema.org/SoftwareApplication">
              <div className="product-header">
                <div>
                  <span className="product-label new">NEW</span>
                  <h2 itemProp="name">Risk Analytics Suite</h2>
                  <p className="product-tagline" itemProp="description">
                    Advanced risk assessment and stress testing tools
                  </p>
                </div>
                <div className="product-price-tag">
                  <span className="price-amount" itemProp="price">$49</span>
                  <span className="price-period">/month</span>
                </div>
              </div>

              <div className="product-body">
                <h3>Key Features</h3>
                <ul className="features-list" itemProp="featureList">
                  <li>✓ Value at Risk (VaR) and Conditional VaR calculations</li>
                  <li>✓ Monte Carlo simulations for scenario analysis</li>
                  <li>✓ Stress testing against historical market events</li>
                  <li>✓ Factor exposure analysis and attribution</li>
                  <li>✓ Correlation and covariance matrix analysis</li>
                  <li>✓ Drawdown analysis and recovery metrics</li>
                  <li>✓ Custom risk model development</li>
                  <li>✓ Risk-adjusted performance metrics (Sharpe, Sortino, etc.)</li>
                </ul>

                <h3>Ideal For</h3>
                <p>
                  Institutional investors, hedge funds, and risk managers who need 
                  sophisticated analytics to understand and manage portfolio risk 
                  across various market conditions.
                </p>

                <h3>Technical Specifications</h3>
                <ul className="specs-list">
                  <li><strong>Computation Engine:</strong> Cloud-based parallel processing</li>
                  <li><strong>Historical Data:</strong> 30+ years of market data</li>
                  <li><strong>Simulation Speed:</strong> 1M+ scenarios per minute</li>
                  <li><strong>Risk Models:</strong> 50+ pre-built models</li>
                  <li><strong>Export Formats:</strong> CSV, Excel, PDF, JSON</li>
                </ul>

                <div className="product-actions">
                  <Link to="/pricing" className="btn btn-primary">
                    Get Started
                  </Link>
                  <a href="#" className="btn btn-secondary">
                    View Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Wealth Optimizer */}
            <div className="product-detail card" itemScope itemType="https://schema.org/SoftwareApplication">
              <div className="product-header">
                <div>
                  <span className="product-label enterprise">ENTERPRISE</span>
                  <h2 itemProp="name">Wealth Optimizer</h2>
                  <p className="product-tagline" itemProp="description">
                    Comprehensive wealth management for high-net-worth individuals
                  </p>
                </div>
                <div className="product-price-tag">
                  <span className="price-amount" itemProp="price">$99</span>
                  <span className="price-period">/month</span>
                </div>
              </div>

              <div className="product-body">
                <h3>Key Features</h3>
                <ul className="features-list" itemProp="featureList">
                  <li>✓ Multi-account aggregation and reporting</li>
                  <li>✓ Estate planning and wealth transfer strategies</li>
                  <li>✓ Tax optimization across multiple jurisdictions</li>
                  <li>✓ Charitable giving and philanthropy planning</li>
                  <li>✓ Alternative investments tracking (real estate, private equity)</li>
                  <li>✓ Family office management tools</li>
                  <li>✓ Succession planning and trust administration</li>
                  <li>✓ Dedicated relationship manager</li>
                </ul>

                <h3>Ideal For</h3>
                <p>
                  High-net-worth individuals, family offices, and private banks managing 
                  complex financial portfolios requiring sophisticated planning tools and 
                  personalized service.
                </p>

                <h3>Technical Specifications</h3>
                <ul className="specs-list">
                  <li><strong>Account Aggregation:</strong> Unlimited accounts</li>
                  <li><strong>Reporting:</strong> Custom branded reports</li>
                  <li><strong>Collaboration:</strong> Multi-user access with roles</li>
                  <li><strong>Integrations:</strong> Tax software, legal docs, CRM</li>
                  <li><strong>Support:</strong> 24/7 white-glove service</li>
                </ul>

                <div className="product-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Sales
                  </Link>
                  <a href="#" className="btn btn-secondary">
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Compare Products</h2>
            <p className="section-description">
              Find the perfect solution for your needs
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Smart Portfolio</th>
                  <th>Risk Analytics</th>
                  <th>Wealth Optimizer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Portfolio Management</td>
                  <td>✓</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Risk Analysis</td>
                  <td>Basic</td>
                  <td>Advanced</td>
                  <td>Advanced</td>
                </tr>
                <tr>
                  <td>Tax Optimization</td>
                  <td>✓</td>
                  <td>—</td>
                  <td>✓✓</td>
                </tr>
                <tr>
                  <td>Estate Planning</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>API Access</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Mobile Apps</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Support Level</td>
                  <td>Email</td>
                  <td>Email + Chat</td>
                  <td>24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

