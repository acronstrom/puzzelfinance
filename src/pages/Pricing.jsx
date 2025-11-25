import { Link } from 'react-router-dom'
import './Pricing.css'

function Pricing() {
  return (
    <div className="pricing-page" itemScope itemType="https://schema.org/Offer">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p className="hero-subtitle">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {/* Starter Plan */}
            <div className="pricing-card card" itemScope itemType="https://schema.org/PriceSpecification">
              <div className="plan-header">
                <h3 className="plan-name" itemProp="name">Starter</h3>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span className="price-value" itemProp="price">29</span>
                  <span className="price-period" itemProp="billingDuration">/month</span>
                </div>
                <p className="plan-description">
                  Perfect for individual investors getting started
                </p>
              </div>

              <ul className="plan-features">
                <li>✓ Smart Portfolio Manager</li>
                <li>✓ Up to 3 portfolios</li>
                <li>✓ Automated rebalancing</li>
                <li>✓ Tax-loss harvesting</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Mobile app access</li>
                <li>✓ Email support</li>
                <li>✓ Monthly reports</li>
                <li>— Risk Analytics Suite</li>
                <li>— API access</li>
                <li>— Priority support</li>
              </ul>

              <Link to="/contact" className="btn btn-secondary plan-cta">
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card card featured" itemScope itemType="https://schema.org/PriceSpecification">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-header">
                <h3 className="plan-name" itemProp="name">Professional</h3>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span className="price-value" itemProp="price">99</span>
                  <span className="price-period" itemProp="billingDuration">/month</span>
                </div>
                <p className="plan-description">
                  For active investors and financial professionals
                </p>
              </div>

              <ul className="plan-features">
                <li>✓ Everything in Starter</li>
                <li>✓ Unlimited portfolios</li>
                <li>✓ Risk Analytics Suite</li>
                <li>✓ Advanced tax optimization</li>
                <li>✓ Custom risk models</li>
                <li>✓ API access (10,000 calls/month)</li>
                <li>✓ Priority email & chat support</li>
                <li>✓ Weekly reports</li>
                <li>✓ White-label options</li>
                <li>✓ Multi-user access (3 users)</li>
                <li>— Dedicated account manager</li>
              </ul>

              <Link to="/contact" className="btn btn-primary plan-cta">
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card card" itemScope itemType="https://schema.org/PriceSpecification">
              <div className="plan-header">
                <h3 className="plan-name" itemProp="name">Enterprise</h3>
                <div className="plan-price">
                  <span className="price-value custom">Custom</span>
                </div>
                <p className="plan-description">
                  Tailored solutions for institutions and family offices
                </p>
              </div>

              <ul className="plan-features">
                <li>✓ Everything in Professional</li>
                <li>✓ Wealth Optimizer platform</li>
                <li>✓ Unlimited portfolios & users</li>
                <li>✓ Unlimited API calls</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ 24/7 phone support</li>
                <li>✓ Custom reporting</li>
                <li>✓ On-premises deployment option</li>
                <li>✓ SLA guarantee (99.99% uptime)</li>
                <li>✓ Training & onboarding</li>
              </ul>

              <Link to="/contact" className="btn btn-secondary plan-cta">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Detailed Feature Comparison</h2>
            <p className="section-description">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="comparison-wrapper">
            <table className="features-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-category" colSpan="4">Portfolio Management</td>
                </tr>
                <tr>
                  <td>Number of Portfolios</td>
                  <td>3</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Automated Rebalancing</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Tax-Loss Harvesting</td>
                  <td>Basic</td>
                  <td>Advanced</td>
                  <td>Advanced</td>
                </tr>
                <tr>
                  <td>Asset Classes Supported</td>
                  <td>Stocks, ETFs</td>
                  <td>All Classes</td>
                  <td>All Classes + Alternatives</td>
                </tr>
                <tr>
                  <td className="feature-category" colSpan="4">Risk & Analytics</td>
                </tr>
                <tr>
                  <td>Risk Analytics Suite</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Monte Carlo Simulations</td>
                  <td>—</td>
                  <td>10K scenarios</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Stress Testing</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓ + Custom Scenarios</td>
                </tr>
                <tr>
                  <td>Custom Risk Models</td>
                  <td>—</td>
                  <td>5 models</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td className="feature-category" colSpan="4">Integration & API</td>
                </tr>
                <tr>
                  <td>API Access</td>
                  <td>—</td>
                  <td>10K calls/month</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Webhooks</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Custom Integrations</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>White-Label Options</td>
                  <td>—</td>
                  <td>Basic</td>
                  <td>Full Branding</td>
                </tr>
                <tr>
                  <td className="feature-category" colSpan="4">Support & Service</td>
                </tr>
                <tr>
                  <td>Support Channels</td>
                  <td>Email</td>
                  <td>Email + Chat</td>
                  <td>24/7 Phone + Email + Chat</td>
                </tr>
                <tr>
                  <td>Response Time</td>
                  <td>24 hours</td>
                  <td>4 hours</td>
                  <td>1 hour</td>
                </tr>
                <tr>
                  <td>Dedicated Account Manager</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Training & Onboarding</td>
                  <td>Self-service</td>
                  <td>Group sessions</td>
                  <td>1-on-1 + Custom training</td>
                </tr>
                <tr>
                  <td className="feature-category" colSpan="4">Users & Collaboration</td>
                </tr>
                <tr>
                  <td>Number of Users</td>
                  <td>1</td>
                  <td>3</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Role-Based Access</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓ Advanced</td>
                </tr>
                <tr>
                  <td>Team Collaboration</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Audit Logs</td>
                  <td>—</td>
                  <td>30 days</td>
                  <td>Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="section-description">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change plans later?</h3>
              <p>
                Yes! You can upgrade or downgrade your plan at any time. Changes take 
                effect at the start of your next billing cycle. If you upgrade mid-cycle, 
                you'll be charged a prorated amount.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>
                Yes, we offer a 14-day free trial for all plans (except Enterprise). 
                No credit card required. You'll have full access to all features during 
                your trial period.
              </p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards (Visa, Mastercard, American Express), 
                ACH transfers, and wire transfers for Enterprise plans. All payments are 
                processed securely.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are there any hidden fees?</h3>
              <p>
                No hidden fees whatsoever. The price you see is what you pay. However, 
                transaction fees from your brokerage and regulatory fees may apply to 
                actual trades.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer discounts for annual payments?</h3>
              <p>
                Yes! Pay annually and save 20% on Starter and Professional plans. 
                That's like getting 2.4 months free. Contact us for Enterprise annual 
                pricing.
              </p>
            </div>

            <div className="faq-item">
              <h3>What's your refund policy?</h3>
              <p>
                We offer a 30-day money-back guarantee. If you're not satisfied within 
                the first 30 days, we'll refund your payment—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of investors who trust Puzzel Finance for their 
              portfolio management needs.
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

export default Pricing

