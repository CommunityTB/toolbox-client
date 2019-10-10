import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class AboutUs extends Component {

  render() {
    return (
      <div className="divaboutUs">
        <div className="text-wrapper">
          
          <article className="about-text">
            <h2 className="sectionTitle">Our Story and concept</h2>
            <p className="paragraph-text">Welcome to The Community Toolbox. Our concept is simple and built on the idea of traditional libraries with a twist. We are a non-profit community focused center that stores and maintains a variety of useful tools for home projects.</p>
            <p className="paragraph-text">A group of neighbors got together and decided to pool their resources to invest in some tools to share as they did home improvement projects like patios, landscaping, repairs and the like. No single family wanted to spend the money for a tool they might only use once or twice. Storage space could be an issue for some. Rental fees at the big stores can be cost prohibitive for many.</p>
            <p className="paragraph-text">That group of neighbors became the co-op we have today. Our tools are now purchased by the co-op and maintained by our volunteers. We welcome you to browse our tool selection and if we have what you need, register with us, reserve the tool and come in for it. We'll ask you to join the co-op with a yearly fee (income based sliding slace or $100.00/yr/), and you can borrow as many tools throughout the year as you need. We simply ask that you maintain the tools you borrow and return or renew them promptly. For those that money is still an issue, become one of our shop vollunteers. Pay your deposit by reviewing tool safety with renters, helping with basic repairs of tools, helping with paperwork, or shopping for replacements.</p>
            <p className="paragraph-text">Our tools list online does not include the blades or bits but we have them here for purchase or to borrow. Our team will gladly assist you in finding the right components to help you finish your projects. Welcome to our community!</p>
          </article>

          <article className="about-text">
            <h2 className="sectionTitle">How it Works</h2>
            <h3 className="HowItworksTitle">I picked my tools—now what?</h3>
            <p className="nextSteps">We're happy we have what you needed! Just follow the list below and your pick up at our warehouse should go smoothly.</p>
            <ul className="stepsList">
              <li className='bold-list'>1) Bring your ID (state ID, passport, photo id work badge)</li>
              <li className='bold-list'>2) Bring cash or debit/credit card to join if you aren't already a member of the co-op (if planning on sliding scale or volunteer hours please bring proof of income in the form of two recent paystubs or direct deposit proof of income.)</li>
              <li className='bold-list'>3) Go through safety checklist with staff member</li>
              <li className='bold-list'>4) Checkout your tool(s) and get to work!</li>
            </ul>
          </article>

      </div>
      </div>
    );
  }
}

