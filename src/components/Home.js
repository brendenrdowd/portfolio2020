import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <article className="container">
      <div className="hero">
        <h2 className="hero-text">I'm Brenden Dowd.</h2>
        <h2 className="hero-text">I paint on code.</h2>
      </div>
      <div className="cta">
        <Link to="/work" className="cta-btn">PORTFOLIO</Link>
      </div>
    </article>
  )
}