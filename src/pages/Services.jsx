import './Services.css'

function Services() {
  return (
    <div className="services-page" itemScope itemType="https://schema.org/Service">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive financial advisory services tailored to your unique goals
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">💼</div>
              <h2 itemProp="name">Investment Advisory</h2>
              <p className="service-description" itemProp="description">
                Expert guidance on asset allocation, security selection, and portfolio 
                construction aligned with your financial objectives and risk tolerance.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>Personalized investment strategy development</li>
                <li>Quarterly portfolio reviews and rebalancing</li>
                <li>Market analysis and investment recommendations</li>
                <li>Performance reporting and benchmarking</li>
                <li>Access to institutional-grade investment opportunities</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> 0.75% AUM annually</p>
                <p><strong>Minimum Investment:</strong> $100,000</p>
                <p><strong>Service Level:</strong> Quarterly consultations</p>
              </div>
            </div>

            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">📊</div>
              <h2 itemProp="name">Portfolio Management</h2>
              <p className="service-description" itemProp="description">
                Full-service discretionary management where we handle all investment 
                decisions and execution while keeping you informed every step of the way.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>Complete discretionary investment management</li>
                <li>Daily portfolio monitoring and risk assessment</li>
                <li>Automated rebalancing and tax-loss harvesting</li>
                <li>Access to alternative investments and private placements</li>
                <li>Monthly performance reports and analytics</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> 1.00% AUM annually</p>
                <p><strong>Minimum Investment:</strong> $250,000</p>
                <p><strong>Service Level:</strong> Monthly reviews</p>
              </div>
            </div>

            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">⚖️</div>
              <h2 itemProp="name">Risk Assessment</h2>
              <p className="service-description" itemProp="description">
                Comprehensive analysis of your portfolio's risk exposure with actionable 
                recommendations to optimize your risk-return profile.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>In-depth risk profile assessment</li>
                <li>Stress testing and scenario analysis</li>
                <li>Correlation and concentration risk evaluation</li>
                <li>Value-at-Risk (VaR) and downside protection analysis</li>
                <li>Risk mitigation strategy recommendations</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> $2,500 one-time assessment</p>
                <p><strong>Minimum Investment:</strong> None</p>
                <p><strong>Deliverable:</strong> Comprehensive 50+ page report</p>
              </div>
            </div>

            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">📈</div>
              <h2 itemProp="name">Financial Planning</h2>
              <p className="service-description" itemProp="description">
                Holistic financial planning covering retirement, education, estate planning, 
                tax optimization, and insurance needs.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>Comprehensive financial needs analysis</li>
                <li>Retirement planning and projection modeling</li>
                <li>Education funding strategies (529 plans, etc.)</li>
                <li>Estate planning coordination with legal advisors</li>
                <li>Tax-efficient investment strategies</li>
                <li>Insurance and risk management review</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> $5,000 initial plan + $200/month ongoing</p>
                <p><strong>Minimum Investment:</strong> None</p>
                <p><strong>Service Level:</strong> Semi-annual reviews</p>
              </div>
            </div>

            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">🏦</div>
              <h2 itemProp="name">Wealth Management</h2>
              <p className="service-description" itemProp="description">
                White-glove service for high-net-worth clients combining investment 
                management, financial planning, and concierge-level support.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>Dedicated wealth advisor and support team</li>
                <li>Comprehensive wealth management and financial planning</li>
                <li>Family office services and multi-generational planning</li>
                <li>Philanthropic planning and charitable giving strategies</li>
                <li>Private banking coordination and credit facilities</li>
                <li>Access to exclusive investment opportunities</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> Custom (typically 0.50-1.25% AUM)</p>
                <p><strong>Minimum Investment:</strong> $2,000,000</p>
                <p><strong>Service Level:</strong> Unlimited access</p>
              </div>
            </div>

            <div className="service-card card" itemScope itemType="https://schema.org/FinancialService">
              <div className="service-icon">🎓</div>
              <h2 itemProp="name">Financial Education</h2>
              <p className="service-description" itemProp="description">
                Educational workshops, webinars, and one-on-one coaching to improve 
                your financial literacy and investment knowledge.
              </p>
              <h3>What's Included</h3>
              <ul className="service-features">
                <li>Monthly educational webinars on various topics</li>
                <li>Quarterly in-person workshops in major cities</li>
                <li>Access to educational content library and resources</li>
                <li>One-on-one coaching sessions (4 hours annually)</li>
                <li>Investment simulation and practice portfolios</li>
              </ul>
              <div className="service-meta">
                <p><strong>Pricing:</strong> $499 annually</p>
                <p><strong>Minimum Investment:</strong> None</p>
                <p><strong>Access:</strong> Unlimited educational resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Process</h2>
            <p className="section-description">
              A proven approach to achieving your financial goals
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>
                We begin with a comprehensive consultation to understand your financial 
                situation, goals, risk tolerance, and time horizon.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Analysis</h3>
              <p>
                Our team analyzes your current portfolio, identifies opportunities and 
                risks, and develops customized recommendations.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Strategy</h3>
              <p>
                We present a detailed financial plan with specific strategies tailored 
                to your unique circumstances and objectives.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>
                Once approved, we execute the plan efficiently, handling all the details 
                and coordinating with other advisors as needed.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Monitoring</h3>
              <p>
                We continuously monitor your portfolio, market conditions, and life changes, 
                making adjustments to keep you on track.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Review</h3>
              <p>
                Regular review meetings ensure your financial plan evolves with your life, 
                keeping you informed and confident in your strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

