import React from 'react'

export default function Work() {
  return (
    <article className="portfolio">
    {/* <h3 className="left">My Work.</h3> */}
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Mobile Redesign</h1>
      <iframe width="375" height="750" src="https://xd.adobe.com/embed/d2dfd28b-0bcf-4995-b5c1-851c59f92e0f-878c/" frameborder="0" allowfullscreen></iframe>
      <p><span className="demo">You can demo me!</span>For this project I found a local restaurant that needed a revamp for their mobile website. You can see the original site <a href="http://www.naraithai.com/index.htm">here</a>. This was done purely for practice purposes, and not paid for or done maliciously.</p>
    </div>
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Indian Restaurant</h1>
      <iframe height="200" src="https://xd.adobe.com/embed/06154bdd-fbae-4d96-8f9a-3a2dc733c831-5346/" frameborder="0" allowfullscreen></iframe>
      <p><span className="demo">You can demo me!</span>This was a practice foray into a visually driven menu for a restaurant. The primary theory being that people tend to eat with their eyes, especially in a foreign food restaurant where menu items may not be clear on the page.</p>
    </div>
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Quest Board</h1>
      <iframe width="375" height="750" src="https://xd.adobe.com/embed/5be66125-eb7e-4866-a699-689c5bf820c9-0eb5/" frameborder="0" allowfullscreen></iframe>
      <p><span className="demo">You can demo me!</span>When I was browsing reddit I someone mentioned that its hard to find people to play Dungeons and Dragons with, so I wanted to make a matchmaking app to make it easier for people to find others to play any tabletop game with.</p>
    </div>
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Affinity Pages</h1>
      <iframe width="375" height="667" src="https://xd.adobe.com/embed/353d8c11-c74a-44b2-9435-231215977725-606e/" frameborder="0" allowfullscreen></iframe>
      <p><span className="demo">You can demo me!</span>This was a mock up designed for a social media style marketing data collector. We wanted to capture the slot machine mechanic that features across many social websites to keep users engaged in rating companies in a fun way.</p>
    </div>
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Meal Plan Wire Frame</h1>
      <iframe width="375" height="667" src="https://xd.adobe.com/embed/919e2c0b-ed35-41c8-a555-116d3d3d24ff-c4cd/" frameborder="0" allowfullscreen></iframe>
      <p><span className="demo">You can demo me!</span>I sometimes struggle with meal planning and eating a balanced diet so I wanted to build an app that would make meal management simpler. This is the wireframe for that application.</p>
    </div>
    <div class="card col-sm-12 col-lg-3">
      <img src="" alt="" />
      <h1>Mealplan</h1>
      {/* <iframe width="375" height="667" src="https://xd.adobe.com/embed/919e2c0b-ed35-41c8-a555-116d3d3d24ff-c4cd/" frameborder="0" allowfullscreen></iframe> */}
      <div class="button-bar">
      <button class="btn"><a target="_blank" href="https://mealplan.now.sh/">Demo</a></button>
      <button class="btn"><a target="_blank" href="https://github.com/brendenrdowd/mealplanner-client">Code</a></button>
      </div>
      <p>Nutrionist is a mealplanning web application that lets users find recipes by keyword and add them to the users' calendar.Built with HTML, CSS, React, Node, Express, and PostgreSQL with mocha, jest, and supertest. </p>
    </div>
  </article>
  )
}
