import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <article>
      <div className="hero">
        <h2 className="hero-text">My Name is Brenden Dowd.</h2>
        <h2 className="hero-text">I paint in code.</h2>
      </div>
      <div className="cta">
        <Link to="/work" className="cta-btn glass">PORTFOLIO</Link>
      </div>
    </article>
  )
}