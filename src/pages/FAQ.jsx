import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          id: "gs1",
          question: "How do I get started with Puzzel Finance?",
          answer: "Getting started is easy! Simply click the 'Get Started' button on our homepage, choose your preferred plan, and complete the registration process. You'll need to provide basic information, verify your identity, and link your investment accounts. Our onboarding wizard guides you through each step, and you can start managing your portfolio within minutes."
        },
        {
          id: "gs2",
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 14-day free trial for our Starter and Professional plans with full access to all features. No credit card is required to start your trial. You can explore the platform, connect your accounts, and experience our tools risk-free before committing to a paid subscription."
        },
        {
          id: "gs3",
          question: "What information do I need to provide during signup?",
          answer: "During registration, you'll need to provide your full name, email address, phone number, date of birth, and residential address. For regulatory compliance, we also require identity verification using a government-issued ID. If you're opening an investment account, additional financial information may be required."
        },
        {
          id: "gs4",
          question: "How long does account setup take?",
          answer: "The typical account setup takes 5-10 minutes. Identity verification is usually instant, but in some cases may take up to 24 hours. Once verified, you can immediately start linking your existing investment accounts or open a new managed account with us."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          id: "as1",
          question: "How secure is my financial data?",
          answer: "Security is our top priority. We use bank-level 256-bit AES encryption for all data transmission and storage. Our platform employs multi-factor authentication (MFA), continuous security monitoring, and regular third-party security audits. We're SOC 2 Type II certified and compliant with all major financial regulations including SEC and FINRA requirements."
        },
        {
          id: "as2",
          question: "Do you sell my personal information?",
          answer: "Absolutely not. We never sell, rent, or share your personal information with third parties for marketing purposes. Your data is used solely to provide our services and is protected by strict privacy policies. You maintain full ownership and control of your information."
        },
        {
          id: "as3",
          question: "What happens if I forget my password?",
          answer: "Click the 'Forgot Password' link on the login page and enter your email address. We'll send you a secure password reset link. For security, this link expires after 1 hour. If you're unable to access your email, contact our support team with your account details for manual verification."
        },
        {
          id: "as4",
          question: "Can I enable two-factor authentication?",
          answer: "Yes, and we highly recommend it! You can enable 2FA in your account settings using authenticator apps (Google Authenticator, Authy), SMS codes, or biometric authentication. Enterprise customers can also use hardware security keys for additional protection."
        },
        {
          id: "as5",
          question: "How do you protect against unauthorized access?",
          answer: "We employ multiple security layers including: real-time fraud detection, device fingerprinting, IP monitoring, automatic session timeouts, and alerts for suspicious activity. Any login from a new device requires email verification, and we notify you of all account access."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          id: "pb1",
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, ACH bank transfers, and wire transfers. Enterprise customers can also arrange invoicing with NET 30 payment terms. All transactions are processed securely through our PCI-compliant payment system."
        },
        {
          id: "pb2",
          question: "Can I switch plans at any time?",
          answer: "Yes! You can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately and you'll be charged a prorated amount for the remainder of your billing cycle. Downgrades take effect at the start of your next billing cycle, and you'll retain access to premium features until then."
        },
        {
          id: "pb3",
          question: "Do you offer annual billing discounts?",
          answer: "Yes! Save 20% by choosing annual billing instead of monthly. That's equivalent to getting more than 2 months free. Annual plans are available for Starter and Professional tiers. Contact our sales team for Enterprise annual pricing options."
        },
        {
          id: "pb4",
          question: "What is your refund policy?",
          answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied within the first 30 days, contact us for a full refund—no questions asked. After 30 days, subscriptions are non-refundable but you can cancel at any time to prevent future charges."
        },
        {
          id: "pb5",
          question: "Are there any hidden fees?",
          answer: "No hidden fees whatsoever. The subscription price you see is what you pay. However, please note that your brokerage may charge transaction fees, and regulatory fees (like SEC fees) may apply to actual trades. These are standard industry charges and are clearly disclosed before execution."
        },
        {
          id: "pb6",
          question: "What happens if my payment fails?",
          answer: "If a payment fails, we'll notify you immediately via email and retry the charge after 3 days. You'll have 7 days to update your payment method before your account is downgraded to read-only mode. No data is lost, and full access is restored once payment is received."
        }
      ]
    },
    {
      category: "Products & Features",
      questions: [
        {
          id: "pf1",
          question: "What investment accounts can I connect?",
          answer: "Our platform integrates with over 1,000 brokerages including major providers like Fidelity, Charles Schwab, TD Ameritrade, E*TRADE, Interactive Brokers, Vanguard, and Robinhood. We support taxable brokerage accounts, IRAs (Traditional, Roth, SEP), 401(k)s, and trust accounts."
        },
        {
          id: "pf2",
          question: "How does automated rebalancing work?",
          answer: "Our algorithm continuously monitors your portfolio against your target allocation. When drift exceeds your threshold (default is 5%), the system automatically executes trades to rebalance. You can customize rebalancing frequency (daily, weekly, monthly) and set minimum trade sizes to avoid excessive transaction costs."
        },
        {
          id: "pf3",
          question: "What is tax-loss harvesting and how does it help?",
          answer: "Tax-loss harvesting involves selling investments at a loss to offset capital gains and reduce your tax liability. Our system automatically identifies opportunities daily, replaces sold securities with similar assets to maintain your allocation, and tracks wash-sale rules to ensure IRS compliance. Clients typically save 1-2% annually in taxes."
        },
        {
          id: "pf4",
          question: "Can I set custom investment constraints?",
          answer: "Absolutely! You can set minimum/maximum allocations for asset classes, exclude specific securities or sectors, require ESG/SRI criteria, set concentration limits, and define trading restrictions. Professional and Enterprise plans offer advanced constraint customization including factor exposures and risk limits."
        },
        {
          id: "pf5",
          question: "Do you support alternative investments?",
          answer: "Yes! Enterprise and Wealth Optimizer plans support tracking of alternative investments including real estate, private equity, hedge funds, commodities, cryptocurrencies, and collectibles. While we don't execute trades for alternatives, we include them in your total portfolio analytics and allocation strategies."
        },
        {
          id: "pf6",
          question: "How accurate is your risk analysis?",
          answer: "Our risk models use 30+ years of historical market data and employ industry-standard methodologies including Modern Portfolio Theory, Value at Risk (VaR), and Monte Carlo simulations. We run over 10,000 scenarios to project potential outcomes. While no model is perfect, our risk assessments are validated against actual portfolio performance."
        }
      ]
    },
    {
      category: "Technical & Integration",
      questions: [
        {
          id: "ti1",
          question: "Do you provide an API?",
          answer: "Yes! Professional and Enterprise plans include API access. Our RESTful API provides programmatic access to portfolio data, analytics, trading, and reporting functions. We offer SDKs for Python, JavaScript, and Java, plus comprehensive documentation with code examples. Professional plans include 10,000 API calls per month; Enterprise has unlimited access."
        },
        {
          id: "ti2",
          question: "What data formats do you support for exports?",
          answer: "We support multiple export formats including CSV, Excel (XLSX), PDF, JSON, and XML. You can export portfolio holdings, transaction history, performance reports, tax documents, and custom analytics. Scheduled exports can be automated and delivered via email or SFTP."
        },
        {
          id: "ti3",
          question: "Can I integrate with my accounting software?",
          answer: "Yes! We offer integrations with popular accounting platforms including QuickBooks, Xero, and FreshBooks. Enterprise customers can set up custom integrations with their existing systems. Our API enables real-time data synchronization for seamless workflow automation."
        },
        {
          id: "ti4",
          question: "Is there a mobile app?",
          answer: "Yes! Our mobile apps for iOS and Android provide full portfolio management capabilities. View real-time holdings, execute trades, receive alerts, access analytics, and communicate with your advisor—all on the go. Apps are available free with any paid subscription."
        },
        {
          id: "ti5",
          question: "What browsers do you support?",
          answer: "Our web platform works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for optimal security and performance. Mobile-optimized web access is available for all devices."
        }
      ]
    },
    {
      category: "Support & Services",
      questions: [
        {
          id: "ss1",
          question: "What kind of customer support do you offer?",
          answer: "Support varies by plan: Starter customers receive email support (24-hour response time), Professional customers get email and live chat support (4-hour response time), and Enterprise customers receive 24/7 phone, email, and chat support with a dedicated account manager (1-hour guaranteed response time)."
        },
        {
          id: "ss2",
          question: "Do you provide financial advice?",
          answer: "Investment Advisory and Portfolio Management services include personalized financial advice from our team of CFP-certified advisors. Product subscriptions (without advisory services) provide educational resources and tools but not personalized advice. Enterprise customers receive dedicated advisor support as part of their package."
        },
        {
          id: "ss3",
          question: "Can I schedule a demo or consultation?",
          answer: "Absolutely! We offer free 30-minute demos for anyone interested in our platform. Professional and Enterprise prospects can schedule extended consultations to discuss custom solutions. Visit our contact page or call us at +1 (555) 123-4567 to schedule your session."
        },
        {
          id: "ss4",
          question: "Do you offer training for teams?",
          answer: "Yes! Enterprise customers receive comprehensive onboarding and training for their teams. We provide both group training sessions and individual coaching, plus access to our knowledge base, video tutorials, and monthly webinars. Custom training programs can be arranged for large organizations."
        },
        {
          id: "ss5",
          question: "How quickly do you respond to support requests?",
          answer: "Response times depend on your plan and request priority: Critical issues (security, system down) are addressed within 1 hour for all customers. Non-critical requests: Starter 24 hours, Professional 4 hours, Enterprise 1 hour. Average resolution time is 8 hours for most issues."
        }
      ]
    },
    {
      category: "Compliance & Legal",
      questions: [
        {
          id: "cl1",
          question: "Is Puzzel Finance regulated?",
          answer: "Yes. We are registered as an investment advisor with the Securities and Exchange Commission (SEC) and are members of FINRA and SIPC. We comply with all applicable federal and state securities laws, including the Investment Advisers Act of 1940, and undergo regular regulatory audits."
        },
        {
          id: "cl2",
          question: "Are my investments SIPC insured?",
          answer: "Yes. Securities held in your account are protected by SIPC insurance up to $500,000 (including $250,000 for cash). Our custodial partners also carry additional insurance coverage. Note that SIPC protects against brokerage failure, not investment losses due to market fluctuations."
        },
        {
          id: "cl3",
          question: "How do you handle tax reporting?",
          answer: "We generate all required tax documents including Form 1099-B, 1099-DIV, and 1099-INT. These are available in your account by January 31st each year and automatically mailed if requested. Our platform tracks cost basis using your chosen method (FIFO, LIFO, specific ID) and provides detailed tax-loss harvesting reports."
        },
        {
          id: "cl4",
          question: "What is your privacy policy?",
          answer: "We adhere to strict privacy standards under the Gramm-Leach-Bliley Act and GDPR (for European clients). We collect only necessary information, use it solely for providing services, never sell your data, and employ robust security measures. You can review our full privacy policy on our website."
        },
        {
          id: "cl5",
          question: "Can I access your ADV filing?",
          answer: "Yes. Our Form ADV (investment advisor disclosure document) is publicly available on the SEC's Investment Adviser Public Disclosure website (adviserinfo.sec.gov). It contains detailed information about our firm, services, fees, conflicts of interest, and disciplinary history. You can also request a copy directly from us."
        }
      ]
    }
  ]

  return (
    <div className="faq-page" itemScope itemType="https://schema.org/FAQPage">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Find answers to common questions about Puzzel Finance
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container">
          <div className="faq-intro">
            <p>
              Have a question? Browse our comprehensive FAQ below or contact our support team at{' '}
              <a href="mailto:support@puzzelfinance.com">support@puzzelfinance.com</a> or{' '}
              <a href="tel:+15551234567">+1 (555) 123-4567</a>.
            </p>
          </div>

          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h2 className="category-title">{category.category}</h2>
              
              <div className="faq-items">
                {category.questions.map((item) => (
                  <div 
                    key={item.id} 
                    className={`faq-item ${openItem === item.id ? 'active' : ''}`}
                    itemScope 
                    itemProp="mainEntity" 
                    itemType="https://schema.org/Question"
                  >
                    <button 
                      className="faq-question"
                      onClick={() => toggleItem(item.id)}
                      itemProp="name"
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">{openItem === item.id ? '−' : '+'}</span>
                    </button>
                    
                    {openItem === item.id && (
                      <div 
                        className="faq-answer" 
                        itemScope 
                        itemProp="acceptedAnswer" 
                        itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-alt faq-contact">
        <div className="container">
          <div className="contact-box">
            <h2>Still Have Questions?</h2>
            <p>
              Our support team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="contact-buttons">
              <a href="/contact" className="btn btn-primary">Contact Support</a>
              <a href="tel:+15551234567" className="btn btn-secondary">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

