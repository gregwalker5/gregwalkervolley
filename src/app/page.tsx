'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // FAQ accordion
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach((q) => {
      q.addEventListener('click', function () {
        const item = (q as HTMLElement).parentElement as HTMLElement;
        const answer = item.querySelector('.faq-answer') as HTMLElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach((i) => {
          i.classList.remove('open');
          (i.querySelector('.faq-answer') as HTMLElement).style.maxHeight = '';
        });
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="container">
          <a href="#" className="nav-logo">
            Greg Walker <span className="accent">Volley</span>
          </a>
          <ul className="nav-links">
            <li><a href="#camps">2026 Camps</a></li>
            <li><a href="#satellite">Satellite Training</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="/about">About / Staff</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li>
              <a href="mailto:gregwalkervolley@gmail.com" className="cta-link">
                Book a Camp
              </a>
            </li>
          </ul>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <a href="#camps" onClick={closeMobileMenu}>2026 Camps</a>
        <a href="#satellite" onClick={closeMobileMenu}>Satellite Training</a>
        <a href="#pricing" onClick={closeMobileMenu}>Pricing</a>
        <a href="/about" onClick={closeMobileMenu}>About / Staff</a>
        <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
        <a href="mailto:gregwalkervolley@gmail.com">Book a Camp</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span> Summer 2026 Camps — Spots Filling Fast
            </div>
            <h1>
              Train Like a <span className="gold">Champion.</span>
              <br />Compete Like a Pro.
            </h1>
            <p className="hero-sub">
              Elite volleyball camps built by a NCAA Head Coach and USA National Team Coach. We bring
              championship-level training directly to your gym — or join us at Smith College.
            </p>
            <div className="hero-actions">
              <a href="#camps" className="btn btn-primary">View 2026 Camps →</a>
              <a
                href="mailto:gregwalkervolley@gmail.com?subject=Satellite Camp Inquiry"
                className="btn btn-outline"
              >
                Host a Camp at Your School
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">12:1</div>
              <div className="label">Athlete to Coach Ratio</div>
            </div>
            <div className="hero-stat">
              <div className="number">24</div>
              <div className="label">Hours of Instruction</div>
            </div>
            <div className="hero-stat">
              <div className="number">$13.54</div>
              <div className="label">Per Hour of Elite Coaching</div>
            </div>
            <div className="hero-stat">
              <div className="number">4</div>
              <div className="label">Day Customizable Program</div>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL AUDIENCE */}
      <section className="audience-split">
        <div className="container">
          <span className="section-label">Two Ways to Train</span>
          <h2 className="section-title">Find Your Path to Better Volleyball</h2>
          <p className="section-subtitle">
            Whether you&apos;re a coach building a program or an athlete chasing the next level —
            we&apos;ve designed a camp experience for you.
          </p>
          <div className="split-grid">
            <div className="split-card reveal">
              <div className="card-icon">🏫</div>
              <h3>I&apos;m a Coach</h3>
              <p>
                Bring our satellite camp to your school or club. We work alongside your coaching
                staff to install systems, develop skills, and build your program&apos;s culture.
              </p>
              <ul>
                <li>We travel to your facility — zero logistics for you</li>
                <li>Fully customized to your team&apos;s systems and goals</li>
                <li>Your staff coaches alongside us all 4 days</li>
                <li>Post-camp support and coaching network access</li>
              </ul>
              <a
                href="mailto:gregwalkervolley@gmail.com?subject=Satellite Camp Inquiry"
                className="btn btn-primary"
              >
                Inquire About Hosting →
              </a>
            </div>
            <div className="split-card reveal">
              <div className="card-icon">🏐</div>
              <h3>I&apos;m an Athlete</h3>
              <p>
                Register for one of our confirmed satellite camp locations or join us at Nike
                Volleyball Camp at Smith College for a week of elite training.
              </p>
              <ul>
                <li>Train with a Team USA and NCAA Head Coach</li>
                <li>Position-specific reps and system work</li>
                <li>Leadership and mental performance sessions</li>
                <li>College recruiting process guidance</li>
              </ul>
              <a href="#camps" className="btn btn-dark">Browse Open Camps →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="satellite">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>
            The Satellite Camp Experience
          </span>
          <h2 className="section-title">Not Your Typical Summer Camp</h2>
          <p className="section-subtitle">
            We don&apos;t roll out the balls and let kids play. Every session is purposeful,
            progressive, and designed to transfer directly to competition.
          </p>
          <div className="feature-grid">
            <div className="feature-card reveal">
              <span className="icon">📍</span>
              <h4>We Come to You</h4>
              <p>
                No travel, no hotels, no hassle. We bring our entire coaching staff and curriculum
                to your gym. You provide the courts — we provide everything else.
              </p>
            </div>
            <div className="feature-card reveal">
              <span className="icon">📋</span>
              <h4>Custom Curriculum</h4>
              <p>
                Every drill, system, and teaching point is designed around your athletes — not a
                one-size-fits-all format. From fundamentals to championship-level systems.
              </p>
            </div>
            <div className="feature-card reveal">
              <span className="icon">🤝</span>
              <h4>Coaches Learn Too</h4>
              <p>
                Your staff isn&apos;t on the sidelines. We coach alongside them, offering feedback,
                planning sessions together, and sharing tools they can use all season.
              </p>
            </div>
            <div className="feature-card reveal">
              <span className="icon">⚡</span>
              <h4>Game-Like Transfer</h4>
              <p>
                Sessions prioritize decision-making, movement patterns, and high-rep learning that
                connects skill work directly to live gameplay.
              </p>
            </div>
            <div className="feature-card reveal">
              <span className="icon">🧠</span>
              <h4>Beyond the Court</h4>
              <p>
                Off-court sessions on team identity, mental performance, nutrition, recovery
                routines, and the college recruiting process.
              </p>
            </div>
            <div className="feature-card reveal">
              <span className="icon">📈</span>
              <h4>Year-Round Impact</h4>
              <p>
                Post-camp support includes in-season refreshers, coaching network access, video
                library, and feedback consultations throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPS */}
      <section className="camps-section" id="camps">
        <div className="container">
          <span className="section-label">Summer 2026 Schedule</span>
          <h2 className="section-title">Confirmed Camp Locations</h2>
          <p className="section-subtitle">
            Spots are limited at each location. Register early to secure your place.
          </p>
          <div className="camps-grid">
            {/* Green Hill */}
            <div className="camp-card reveal">
              <div className="camp-card-header">
                <span className="camp-type">Satellite Camp</span>
                <h4>Green Hill High School</h4>
                <span className="camp-loc">📍 Location TBA</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Dates</span>
                  <span className="detail-value">TBA</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9 AM – 4 PM</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Ages</span>
                  <span className="detail-value">All Levels</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-confirmed">Confirmed</span>
                </div>
                <a href="https://www.gregwalkervolley.com/greenhill" className="btn btn-primary">
                  Register Now →
                </a>
              </div>
            </div>

            {/* Bishop Verot */}
            <div className="camp-card reveal">
              <div className="camp-card-header">
                <span className="camp-type">Satellite Camp</span>
                <h4>Bishop Verot High School</h4>
                <span className="camp-loc">📍 Fort Myers, FL</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Dates</span>
                  <span className="detail-value">TBA</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9 AM – 4 PM</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Ages</span>
                  <span className="detail-value">All Levels</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-confirmed">Confirmed</span>
                </div>
                <a href="https://www.gregwalkervolley.com/bishopverot" className="btn btn-primary">
                  Register Now →
                </a>
              </div>
            </div>

            {/* Covenant Day */}
            <div className="camp-card reveal">
              <div className="camp-card-header">
                <span className="camp-type">Satellite Camp</span>
                <h4>Covenant Day School</h4>
                <span className="camp-loc">📍 Matthews, NC</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Dates</span>
                  <span className="detail-value">TBA</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9 AM – 4 PM</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Ages</span>
                  <span className="detail-value">All Levels</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-filling">Filling Up</span>
                </div>
                <a href="https://www.gregwalkervolley.com/covenantday" className="btn btn-primary">
                  Register Now →
                </a>
              </div>
            </div>

            {/* Carmel Christian */}
            <div className="camp-card reveal">
              <div className="camp-card-header">
                <span className="camp-type">Satellite Camp</span>
                <h4>Carmel Christian School</h4>
                <span className="camp-loc">📍 Matthews, NC</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Dates</span>
                  <span className="detail-value">TBA</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9 AM – 4 PM</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Ages</span>
                  <span className="detail-value">All Levels</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-open">Open</span>
                </div>
                <a
                  href="https://www.gregwalkervolley.com/carmelchristian"
                  className="btn btn-primary"
                >
                  Register Now →
                </a>
              </div>
            </div>

            {/* Nike / Smith College */}
            <div className="camp-card camp-gold-border reveal">
              <div className="camp-card-header gradient">
                <span className="camp-type">⭐ Nike Volleyball Camp</span>
                <h4>Smith College</h4>
                <span className="camp-loc">📍 Northampton, MA</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Sessions</span>
                  <span className="detail-value">2 Weeks Available</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">Overnight &amp; Day Options</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Level</span>
                  <span className="detail-value">All Skills Welcome</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-filling">Filling Up</span>
                </div>
                <a
                  href="https://www.ussportscamps.com/volleyball/nike/nike-volleyball-camps-smith-college"
                  className="btn btn-primary"
                >
                  Register via US Sports Camps →
                </a>
              </div>
            </div>

            {/* Deerfield Academy */}
            <div className="camp-card reveal">
              <div className="camp-card-header">
                <span className="camp-type">Satellite Camp</span>
                <h4>Deerfield Academy</h4>
                <span className="camp-loc">📍 Deerfield, MA</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Dates</span>
                  <span className="detail-value">TBA</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">9 AM – 4 PM</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Ages</span>
                  <span className="detail-value">All Levels</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Status</span>
                  <span className="camp-status status-open">Open</span>
                </div>
                <a
                  href="mailto:gregwalkervolley@gmail.com?subject=Deerfield Academy Camp Registration"
                  className="btn btn-primary"
                >
                  Register Now →
                </a>
              </div>
            </div>

            {/* Host Your School */}
            <div className="camp-card camp-dashed reveal">
              <div className="camp-card-header mid">
                <span className="camp-type">Your School Here</span>
                <h4>Host a Satellite Camp</h4>
                <span className="camp-loc">📍 We Travel Anywhere</span>
              </div>
              <div className="camp-card-body">
                <div className="camp-detail">
                  <span className="detail-label">Format</span>
                  <span className="detail-value">4-Day Full Camp</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Minimum</span>
                  <span className="detail-value">24 Athletes</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Courts Needed</span>
                  <span className="detail-value">2 Minimum</span>
                </div>
                <div className="camp-detail">
                  <span className="detail-label">Availability</span>
                  <span className="camp-status status-open">Dates Open</span>
                </div>
                <a
                  href="mailto:gregwalkervolley@gmail.com?subject=Satellite Camp Inquiry"
                  className="btn btn-dark"
                >
                  Contact Coach Greg →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Elite Coaching. Honest Value.</h2>
          <p className="section-subtitle">
            No travel costs, no hidden fees, no overpriced overnight camps. Just 24 hours of
            purposeful coaching for a fraction of what you&apos;d pay elsewhere.
          </p>
          <div className="pricing-box reveal">
            <div className="pricing-left">
              <div className="price-big">$325</div>
              <div className="price-per">per athlete · 4-day satellite camp</div>
              <div className="price-hourly">That&apos;s just $13.54 / hour</div>
              <p
                style={{
                  color: 'var(--text-light)',
                  marginTop: '22px',
                  fontSize: '.9rem',
                  lineHeight: '1.7',
                }}
              >
                24 hours of structured instruction led by a Team USA and NCAA Head Coach. Your
                athletes train in their own gym — no travel, no lodging, no meal costs for families.
              </p>
              <a
                href="mailto:gregwalkervolley@gmail.com?subject=Camp Pricing Question"
                className="btn btn-primary"
                style={{ marginTop: '24px' }}
              >
                Get Full Pricing Details →
              </a>
            </div>
            <div className="pricing-right">
              <h4>How We Compare</h4>
              <ul className="pricing-compare">
                <li>
                  <span>Total coaching hours</span>
                  <span className="compare-them">12–18 hrs</span>
                  <span className="compare-us">24 hrs</span>
                </li>
                <li>
                  <span>Cost per hour</span>
                  <span className="compare-them">$18–$45/hr</span>
                  <span className="compare-us">$13.54/hr</span>
                </li>
                <li>
                  <span>Head coach access</span>
                  <span className="compare-them">Camp assistants</span>
                  <span className="compare-us">NCAA + Team USA</span>
                </li>
                <li>
                  <span>Travel costs for families</span>
                  <span className="compare-them">Hotels + meals</span>
                  <span className="compare-us">$0 — we come to you</span>
                </li>
                <li>
                  <span>Coaching staff development</span>
                  <span className="compare-them">Not included</span>
                  <span className="compare-us">Built in</span>
                </li>
                <li>
                  <span>Athlete-to-coach ratio</span>
                  <span className="compare-them">20:1+</span>
                  <span className="compare-us">12:1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET COMPARISON */}
      <section className="market-section" id="market-comparison">
        <div className="container">
          <span className="section-label">Market Comparison</span>
          <h2 className="section-title">The Best Deal in Every Market</h2>
          <p className="section-subtitle">
            We looked at what other local camps charge. Then we looked at what they deliver. The math speaks for itself.
          </p>

          <div className="market-grid">
            {/* Charlotte / Matthews, NC */}
            <div className="market-card reveal">
              <div className="market-card-header">
                <h4>Charlotte / Matthews, NC</h4>
                <p>Covenant Day School &amp; Carmel Christian</p>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Who 🏕️</th>
                    <th>Hours ⏰</th>
                    <th>Days 📅</th>
                    <th>Price 💰</th>
                    <th>Per Hour ⚡</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CUVC Skill Camp</td>
                    <td>9am – 12pm</td>
                    <td>1 day</td>
                    <td><strong>~$150</strong></td>
                    <td>~$50/hr</td>
                  </tr>
                  <tr>
                    <td>CUVC All-Skills Camp</td>
                    <td>9am – 12pm</td>
                    <td>3 days</td>
                    <td><strong>~$275</strong></td>
                    <td>~$30/hr</td>
                  </tr>
                  <tr>
                    <td>Nike VB Camp (area school)</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>$399</strong></td>
                    <td>~$16.60/hr</td>
                  </tr>
                  <tr className="our-camp">
                    <td>✓ Greg Walker Volleyball</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>$325</strong></td>
                    <td>$13.54/hr</td>
                  </tr>
                </tbody>
              </table>
              <div className="market-note">
                CUVC = Carolina Union Volleyball Club (Matthews, NC). Prices from public registration pages.
              </div>
            </div>

            {/* Fort Myers, FL */}
            <div className="market-card reveal">
              <div className="market-card-header">
                <h4>Fort Myers, FL</h4>
                <p>Bishop Verot High School</p>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Who 🏕️</th>
                    <th>Hours ⏰</th>
                    <th>Days 📅</th>
                    <th>Price 💰</th>
                    <th>Per Hour ⚡</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Florida Conquer VB</td>
                    <td>8am – 12pm</td>
                    <td>5 days</td>
                    <td><strong>$250</strong></td>
                    <td>~$10/hr</td>
                  </tr>
                  <tr>
                    <td>Florida Conquer VB</td>
                    <td>8am – 5pm</td>
                    <td>5 days</td>
                    <td><strong>$400</strong></td>
                    <td>~$11/hr</td>
                  </tr>
                  <tr>
                    <td>FGVA (Florida Gulfside)</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>~$350+</strong></td>
                    <td>~$14.50+/hr</td>
                  </tr>
                  <tr className="our-camp">
                    <td>✓ Greg Walker Volleyball</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>$325</strong></td>
                    <td>$13.54/hr</td>
                  </tr>
                </tbody>
              </table>
              <div className="market-note">
                Florida Conquer VB and FGVA are local club programs. Greg&apos;s camp brings a Team USA + NCAA Head Coach directly to Bishop Verot — no travel required.
              </div>
            </div>

            {/* Nashville / Middle Tennessee */}
            <div className="market-card reveal">
              <div className="market-card-header">
                <h4>Nashville / Middle Tennessee</h4>
                <p>Green Hill High School</p>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Who 🏕️</th>
                    <th>Hours ⏰</th>
                    <th>Days 📅</th>
                    <th>Price 💰</th>
                    <th>Per Hour ⚡</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mid State Youth Sports</td>
                    <td>9am – 1pm</td>
                    <td>4 days</td>
                    <td><strong>$100</strong></td>
                    <td>~$6.25/hr</td>
                  </tr>
                  <tr>
                    <td>Nike VB Camp – Nashville</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>$399</strong></td>
                    <td>~$16.60/hr</td>
                  </tr>
                  <tr>
                    <td>Vanderbilt Team Camp</td>
                    <td>Full day</td>
                    <td>Multi-day</td>
                    <td><strong>$250+</strong></td>
                    <td>~$15+/hr</td>
                  </tr>
                  <tr className="our-camp">
                    <td>✓ Greg Walker Volleyball</td>
                    <td>9am – 4pm</td>
                    <td>4 days</td>
                    <td><strong>$325</strong></td>
                    <td>$13.54/hr</td>
                  </tr>
                </tbody>
              </table>
              <div className="market-note">
                Mid State offers beginner-level programming. Nike and Vanderbilt camps are run by college assistants. Greg Walker is the head coach at every session.
              </div>
            </div>
          </div>

          {/* Market 4: Western MA / Deerfield */}
          <div className="market-card reveal">
            <div className="market-card-header">
              <h4>Western Massachusetts</h4>
              <p>Deerfield Academy · Pioneer Valley region</p>
            </div>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Who 🏕️</th>
                  <th>Hours ⏰</th>
                  <th>Days 📅</th>
                  <th>Price 💰</th>
                  <th>Per Hour ⚡</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PV Juniors (Beginner)</td>
                  <td>5:00–6:30pm</td>
                  <td>1 session</td>
                  <td>~$30–$40</td>
                  <td>~$20–$27/hr</td>
                </tr>
                <tr>
                  <td>PV Juniors (Intermediate/Advanced)</td>
                  <td>6:30–9:00pm</td>
                  <td>1 session</td>
                  <td>~$40–$60</td>
                  <td>~$16–$24/hr</td>
                </tr>
                <tr>
                  <td>Nike VB Camp – Smith College</td>
                  <td>9am – 4pm</td>
                  <td>4-day</td>
                  <td>$534</td>
                  <td>~$19.07/hr</td>
                </tr>
                <tr className="our-camp">
                  <td>✓ Greg Walker Volleyball</td>
                  <td>9am – 4pm</td>
                  <td>4 days</td>
                  <td>$325</td>
                  <td>$13.54/hr</td>
                </tr>
              </tbody>
            </table>
            <div className="market-note">
              PV Juniors clinics are drop-in evening sessions (1.5–2.5 hrs each) run by local club coaches out of South Deerfield and Springfield. Greg's camp is 28 hrs of full-day instruction at Deerfield Academy — led by a USA National Team Head Coach. Prices from public registration pages.
            </div>
          </div>

          {/* Bottom callout */}
          <div className="market-callout reveal">
            <p>
              Every camp listed above uses assistant coaches or local staff.{' '}
              <strong>Greg Walker Volleyball brings a NCAA Division III Head Coach and USA National Team Coach directly to your gym</strong>{' '}
              — at a lower per-hour cost than most options in your area.
            </p>
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Camp Registration"
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Reserve Your Spot →
            </a>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="included-section">
        <div className="container">
          <span className="section-label">What You Get</span>
          <h2 className="section-title">24 Hours of Purposeful Training</h2>
          <p className="section-subtitle">
            Every session is designed to build skills, install systems, and transfer directly to
            competition.
          </p>
          <div className="included-grid">
            <div className="included-item reveal">
              <span className="item-num">01</span>
              <div>
                <h4>Skill Development</h4>
                <p>
                  Teaching cues and drill progressions for every core skill — passing, setting,
                  attacking, serving, blocking, and defense.
                </p>
              </div>
            </div>
            <div className="included-item reveal">
              <span className="item-num">02</span>
              <div>
                <h4>System Installation</h4>
                <p>
                  Offensive and defensive systems used by top high school, college, and national
                  programs. Simple, effective, adaptable.
                </p>
              </div>
            </div>
            <div className="included-item reveal">
              <span className="item-num">03</span>
              <div>
                <h4>Coach Integration</h4>
                <p>
                  Your staff is embedded in every step — from session planning to real-time
                  feedback. Walk away with strategies for the entire season.
                </p>
              </div>
            </div>
            <div className="included-item reveal">
              <span className="item-num">04</span>
              <div>
                <h4>Game-Like Scenarios</h4>
                <p>
                  Decision-making drills, movement patterns, and high-rep training designed to
                  bridge the gap between practice and competition.
                </p>
              </div>
            </div>
            <div className="included-item reveal">
              <span className="item-num">05</span>
              <div>
                <h4>Leadership &amp; Mental Performance</h4>
                <p>
                  Off-court sessions on team identity, reset strategies, and building a winning
                  culture that lasts beyond camp.
                </p>
              </div>
            </div>
            <div className="included-item reveal">
              <span className="item-num">06</span>
              <div>
                <h4>Recruiting &amp; Wellness</h4>
                <p>
                  Guidance on the college recruiting process, plus sessions on nutrition, recovery
                  routines, and strength fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>
            What Coaches Say
          </span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Trusted by Programs Nationwide
          </h2>
          <div className="testimonial-grid">
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;Add a testimonial from a host school coach here. Talk about the impact on
                your program, the quality of coaching, and how your staff grew from the
                experience.&rdquo;
              </blockquote>
              <div className="author">Coach Name</div>
              <div className="author-title">Head Coach, School Name</div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;Add a parent or athlete testimonial here. Talk about the skills they
                developed, the college recruiting help, and the overall camp experience.&rdquo;
              </blockquote>
              <div className="author">Parent / Athlete Name</div>
              <div className="author-title">Position, Club / School</div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;Add another testimonial here. A returning host school or repeat attendee is
                especially powerful — it shows people come back year after year.&rdquo;
              </blockquote>
              <div className="author">Coach Name</div>
              <div className="author-title">Athletic Director, School Name</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/15dc9a_5a23eb1377314543913290c1aa61ca4b~mv2.jpg/v1/fill/w_779,h_974,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15dc9a_5a23eb1377314543913290c1aa61ca4b~mv2.jpg"
                alt="Coach Greg Walker"
                loading="lazy"
              />
              <div className="overlay-badge">USA National Team Coach</div>
            </div>
            <div className="about-content">
              <span className="section-label">Meet Your Coach</span>
              <h3>Coach Greg Walker</h3>
              <p>
                Greg Walker is the Head Volleyball Coach at Smith College and a USA National Team
                Coach with experience spanning the collegiate and international levels of the sport.
              </p>
              <p>
                His coaching philosophy centers on individual growth, technical precision, and
                building team culture that lasts. Every camp reflects his belief that athletes
                deserve more than generic drills — they deserve training that challenges them to
                think, compete, and lead.
              </p>
              <p>
                Whether at a satellite camp or Nike Volleyball Camp at Smith College, Coach Walker
                creates an environment where athletes are coached with purpose and coaches are
                empowered with tools to elevate their programs.
              </p>
              <div className="credential-tags">
                <span>NCAA Head Coach</span>
                <span>USA National Team</span>
                <span>Smith College</span>
                <span>Nike Volleyball</span>
              </div>
              <a
                href="https://www.gregwalkervolley.com/camp-director"
                className="btn btn-dark"
                style={{ marginTop: '24px' }}
              >
                Full Bio →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">Who can attend a satellite camp?</div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                All Greg Walker Volleyball Training camps are open to any and all entrants and
                positions (limited only by number, age, and/or grade level), in accordance with NCAA
                bylaws. Camps are available for boys and girls programs at the middle school and
                high school levels, as well as club teams.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              What does my school need to provide to host a camp?
            </div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                You&apos;ll need a minimum of 24 athletes, access to at least 2 courts for full-day
                sessions (9 AM – 4 PM), and an on-site point of contact for gym access and
                equipment. We handle all coaching, curriculum, staffing, and travel logistics.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Can the camp schedule be customized?</div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Absolutely. Our 4-day camps include 12–16 sessions that we customize by age,
                ability, and your team&apos;s specific needs. We work with your coaching staff
                before camp to design sessions around your systems and goals.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              What makes this different from other volleyball camps?
            </div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Three things set us apart: (1) your coaching staff is integrated into every session
                — they learn alongside your athletes; (2) the curriculum is built around YOUR
                program, not a generic template; and (3) you get post-camp support including
                in-season refreshers, a coaching network, and our video library.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              How do I register my athlete for a confirmed camp?
            </div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Click &ldquo;Register Now&rdquo; on any confirmed camp location above. You&apos;ll
                be taken to a registration form where you can select your camp from the dropdown
                menu. For questions, email gregwalkervolley@gmail.com.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What about the Nike Camp at Smith College?</div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                The Nike Volleyball Camp at Smith College is a separate experience run through US
                Sports Camps on the beautiful Smith College campus in Northampton, MA. It offers
                both overnight and day-camp options across two sessions. Registration is handled
                through the US Sports Camps website.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-footer">
        <div className="container">
          <h2>
            Ready to Elevate
            <br />Your Program?
          </h2>
          <p>
            Whether you want to host a satellite camp or register an athlete — let&apos;s talk.
            Spots for summer 2026 are limited.
          </p>
          <div className="cta-actions">
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Satellite Camp Inquiry"
              className="btn btn-primary"
            >
              Host a Camp at Your School →
            </a>
            <a href="#camps" className="btn btn-outline">
              View Open Camps
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <span className="copyright">
            © 2026 Creative Performance Consulting LLC. All rights reserved.
          </span>
          <div className="footer-links">
            <a href="/about">About / Staff</a>
            <a href="https://www.gregwalkervolley.com/camp-staff">Staff</a>
            <a href="https://www.gregwalkervolley.com/blog">Blog</a>
            <a href="https://www.gregwalkervolley.com/contact-8">Contact</a>
            <a href="https://www.gregwalkervolley.com/general-8">Private Lessons</a>
          </div>
        </div>
      </footer>
    </>
  );
}
