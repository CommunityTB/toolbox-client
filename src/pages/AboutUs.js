import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
  
  render() {
    return (
      <div className="aboutUs">
        <article>
          <h2>Our Story and concept</h2>
          <p>Welcome to The Community Toolbox. Our concept is simple and built on the idea of traditional libraries with a twist. We are a non-profit community focused center that stores and maintains a variety of useful tools for home projects.</p>
          <p>A group of neighbors got together and decided to pool their resources to invest in some tools to share as they did home imporvment projects like patios, landscaping, repairs and the like. No single family wanted to spend the money for a tool they might only use once or twice. Storage space could be an issue for some. Rental fees at the big stores can be cost prohibitive for many.</p>
          <p>That group of neighbors became the co-op we have today. Our tools are now purchased by the co-op and maintained by our volunteers. We welcome you to browse our tool selection and if we have what you need, register with us, reserve the tool and come in for it. We'll ask you to join the co-op with a yearly fee (income based sliding slace or $100.00/yr/), and you can borrow as many tools throughout the year as you need. We simply ask that you maintain the tools you borrow and return or renew them promptly. For those that money is still an issue, become one of our shop vollunteers. Pay your deposit by reviewing tool safety with renters, helping with basic repairs of tools, helping with paperwork, or shopping for replacements.</p>
          <p>Our tools do not include the blades or bits but we have them here for purchase or to borrow. Our team will gladly assist you in finding the right components to help you finish your projects. Welcome to our community!</p>
        </article>
        <section>
          
          {/* replace with general button later */}
          <Link to='/' className="back-link">back</Link>
        </section>
      </div>
    );
  }
}

