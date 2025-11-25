import './About.css'

function About() {
  return (
    <div className="about-page" itemScope itemType="https://schema.org/AboutPage">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>About Puzzel Finance</h1>
          <p className="hero-subtitle">
            Pioneering the future of financial technology since 2010
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <h2>Our Mission</h2>
              <p itemProp="description">
                At Puzzel Finance, our mission is to democratize access to sophisticated 
                financial tools and empower individuals and businesses to make informed 
                investment decisions. We believe that everyone deserves access to 
                institutional-grade financial technology.
              </p>
              <p itemProp="description">
                Through innovation, transparency, and customer-centric design, we're 
                building the financial platform of the future—one that adapts to your 
                unique needs and grows with you throughout your financial journey.
              </p>
            </div>
            <div className="content-image">
              <div className="placeholder-image mission-image">
                <span>💡</span>
                <p>Innovation in Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-alt values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card value-card" itemProp="value">
              <h3>🎯 Customer First</h3>
              <p>
                Every decision we make starts with our customers. We listen, learn, 
                and continuously improve our platform based on your feedback and needs.
              </p>
            </div>

            <div className="card value-card" itemProp="value">
              <h3>🔒 Security & Trust</h3>
              <p>
                We maintain the highest security standards and regulatory compliance, 
                treating your financial data with the utmost care and responsibility.
              </p>
            </div>

            <div className="card value-card" itemProp="value">
              <h3>🚀 Innovation</h3>
              <p>
                We embrace cutting-edge technology and constantly push boundaries to 
                deliver next-generation financial solutions.
              </p>
            </div>

            <div className="card value-card" itemProp="value">
              <h3>🤝 Transparency</h3>
              <p>
                Clear communication, honest pricing, and transparent operations are 
                fundamental to building long-term relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Leadership Team</h2>
            <p className="section-description">
              Meet the experts driving innovation at Puzzel Finance
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👨‍💼</div>
              <h3 itemProp="name">Michael Chen</h3>
              <p className="team-role" itemProp="jobTitle">Chief Executive Officer</p>
              <p className="team-bio">
                Former Goldman Sachs partner with 20+ years in investment banking 
                and fintech innovation. MBA from Harvard Business School.
              </p>
            </div>

            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👩‍💼</div>
              <h3 itemProp="name">Sarah Rodriguez</h3>
              <p className="team-role" itemProp="jobTitle">Chief Technology Officer</p>
              <p className="team-bio">
                Tech visionary with expertise in AI and machine learning. Previously 
                led engineering teams at Google and Amazon Web Services.
              </p>
            </div>

            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👨‍💻</div>
              <h3 itemProp="name">David Kim</h3>
              <p className="team-role" itemProp="jobTitle">Chief Financial Officer</p>
              <p className="team-bio">
                Veteran finance executive with deep expertise in regulatory compliance 
                and risk management. Former CFO at major European bank.
              </p>
            </div>

            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👩‍💻</div>
              <h3 itemProp="name">Emily Johnson</h3>
              <p className="team-role" itemProp="jobTitle">VP of Product</p>
              <p className="team-bio">
                Product innovator focused on user experience and customer success. 
                15 years building fintech products used by millions.
              </p>
            </div>

            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👨‍🔬</div>
              <h3 itemProp="name">Dr. James Wilson</h3>
              <p className="team-role" itemProp="jobTitle">Head of Research</p>
              <p className="team-bio">
                Quantitative analyst with PhD in Financial Engineering. Published 
                researcher in algorithmic trading and portfolio optimization.
              </p>
            </div>

            <div className="card team-card" itemScope itemType="https://schema.org/Person">
              <div className="team-avatar">👩‍⚖️</div>
              <h3 itemProp="name">Lisa Thompson</h3>
              <p className="team-role" itemProp="jobTitle">General Counsel</p>
              <p className="team-bio">
                Expert in financial regulations and compliance. Former SEC attorney 
                with extensive experience in fintech law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-alt timeline-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Journey</h2>
            <p className="section-description">
              Milestones that shaped our company
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3 itemProp="name">Company Founded</h3>
                <p itemProp="description">
                  Puzzel Finance launched with a vision to make sophisticated financial 
                  tools accessible to everyone.
                </p>
              </div>
            </div>

            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3 itemProp="name">Series A Funding</h3>
                <p itemProp="description">
                  Raised $15M in Series A funding to expand our product offerings 
                  and engineering team.
                </p>
              </div>
            </div>

            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3 itemProp="name">100K Users Milestone</h3>
                <p itemProp="description">
                  Reached 100,000 active users and $10B in assets under management.
                </p>
              </div>
            </div>

            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3 itemProp="name">AI Platform Launch</h3>
                <p itemProp="description">
                  Introduced AI-powered portfolio management and predictive analytics 
                  features.
                </p>
              </div>
            </div>

            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3 itemProp="name">Global Expansion</h3>
                <p itemProp="description">
                  Expanded operations to Europe and Asia, serving clients in 45 countries.
                </p>
              </div>
            </div>

            <div className="timeline-item" itemProp="event" itemScope itemType="https://schema.org/Event">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3 itemProp="name">250K Users & Beyond</h3>
                <p itemProp="description">
                  Surpassed 250,000 users and $50B AUM, continuing our mission to 
                  democratize finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

