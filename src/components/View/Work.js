import React from 'react'
import Tilt from 'react-parallax-tilt';
import designLogo from '../../assets/designcodeicons-01.png'
import codeLogo from '../../assets/designcodeicons-03.png'

// change to one row per project
// https://www.stevec.design/projects/filos

export default function Work() {
  return (
    <article className="portfolio">
      {/* <Tilt>
      <h1>...Currently Under Construction...</h1>
      </Tilt> */}
      {/* <h3 className="left">My Work.</h3> */}
      {/* <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} scale={0.95}> */}
        <div class="card col-sm-12 col-lg-3 glass">
          <img class="work-icon" src={designLogo} alt="design logo" />
          {/* <iframe title="MobileRedesign" width="375" height="750" src="https://xd.adobe.com/embed/d2dfd28b-0bcf-4995-b5c1-851c59f92e0f-878c/" frameborder="0" allowfullscreen></iframe> */}
          <div class="flex-col pad-1 ">
            <h1 class="black">Local Restaurant Mobile Redesign</h1>
            <p class="work-text">For this project I found a local restaurant that needed a revamp for their mobile website. You can see the original site <a href="http://www.naraithai.com/index.htm">here</a>. This was done purely for practice purposes, and not paid for or done maliciously.</p>
            <button class="btn">
            <a href="https://xd.adobe.com/view/d2dfd28b-0bcf-4995-b5c1-851c59f92e0f-878c/?fullscreen" target="_blank" rel="noreferrer">demo</a>
            </button>
          </div>
        </div>
      {/* </Tilt> */}
      <div class="card col-sm-12 col-lg-3 glass">
      <img class="work-icon" src={designLogo} alt="design logo" />
        {/* <iframe title="Restaurant" height="200" src="https://xd.adobe.com/embed/06154bdd-fbae-4d96-8f9a-3a2dc733c831-5346/" frameborder="0" allowfullscreen></iframe> */}
        <div class="flex-col pad-1 ">
          <h1 class="black">Visual Menu for Indian Restaurant</h1>
          <p class="work-text">This was a practice foray into a visually driven menu for a restaurant. The primary theory being that people tend to eat with their eyes, especially in a foreign food restaurant where menu items may not be clear on the page.</p>
          <button class="btn">
            <a href="https://xd.adobe.com/view/06154bdd-fbae-4d96-8f9a-3a2dc733c831-5346/?fullscreen" target="_blank" rel="noreferrer">demo</a>
            </button>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
      <img class="work-icon" src={designLogo} alt="design logo" />
        {/* <iframe title="Quest Board" width="375" height="750" src="https://xd.adobe.com/embed/5be66125-eb7e-4866-a699-689c5bf820c9-0eb5/" frameborder="0" allowfullscreen></iframe> */}
        <div class="flex-col pad-1 ">
          <h1 class="black">Adventr</h1>
          <p class="work-text">When I was browsing reddit someone mentioned that its hard to find people to play Dungeons and Dragons with, so I wanted to make a matchmaking app to make it easier for people to find others to play any tabletop game with.</p>
          <button class="btn">
            <a href="https://xd.adobe.com/view/5be66125-eb7e-4866-a699-689c5bf820c9-0eb5/?fullscreen" target="_blank" rel="noreferrer">demo</a>
            </button>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
      <img class="work-icon" src={designLogo} alt="design logo" />
        {/* <iframe title="Affinity" width="375" height="667" src="https://xd.adobe.com/embed/353d8c11-c74a-44b2-9435-231215977725-606e/" frameborder="0" allowfullscreen></iframe> */}
        <div class="flex-col pad-1 ">
          <h1 class="black">Affinity Pages</h1>
          <p class="work-text">This was a mock up designed for a social media style marketing data collector. We wanted to capture the slot machine mechanic that features across many social websites to keep users engaged in rating companies in a fun way.</p>
          <button class="btn">
            <a href="https://xd.adobe.com/view/6c53104d-eaed-48c6-845b-4f3dca188f90-3900/?fullscreen" target="_blank" rel="noreferrer">demo</a>
            </button>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
      <img class="work-icon" src={designLogo} alt="design logo" />
        {/* <iframe title="Meal Plan" width="375" height="667" src="https://xd.adobe.com/embed/919e2c0b-ed35-41c8-a555-116d3d3d24ff-c4cd/" frameborder="0" allowfullscreen></iframe> */}
        <div class="flex-col pad-1 ">
          <h1 class="black">Meal Plan Wire Frame</h1>
          <p class="work-text">I sometimes struggle with meal planning and eating a balanced diet so I wanted to build an app that would make meal management simpler. This is the wireframe for that application.</p>
          <button class="btn">
            <a href="https://xd.adobe.com/view/69b02139-ed72-4692-86bf-8578bac58b46-3ce3/?fullscreen" target="_blank" rel="noreferrer">demo</a>
            </button>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
        <img class="work-icon" src={codeLogo} alt="code logo" />
        <div class="flex-col pad-1 ">
          <h1 class="black">Mealplan</h1>
          <p class="work-text">Nutrionist is a mealplanning web application that lets users find recipes by keyword and add them to the users' calendar.Built with HTML, CSS, React, Node, Express, and PostgreSQL with mocha, jest, and supertest. </p>
          <div class="button-bar">
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://mealplan.now.sh/">Demo</a></button>
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://github.com/brendenrdowd/mealplanner-client">Code</a></button>
          </div>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
        <img class="work-icon" src={codeLogo} alt="code logo" />
        <div class="flex-col pad-1 ">
          <h1 class="black">Viking Plumbing</h1>
          <p class="work-text">Viking Plumbing is a small family owned business based in the Seattle area. They wanted a website built to draw in business as they previously had no web presence. </p>
          <div class="button-bar">
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://tranquil-waters-99328.herokuapp.com/">Demo</a></button>
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://github.com/brendenrdowd/vikingPlumbingWebsite">Code</a></button>
          </div>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
        <img class="work-icon" src={codeLogo} alt="code logo" />
        <div class="flex-col pad-1 ">
          <h1 class="black">It Takes a Village</h1>
          <p class="work-text">It takes a village is a community based altruism application that lets users post things they need, like food or assistance and lets others nearby opt to provide assistance if they can. This was a team project that I led the development on. I plan to update the styling to reflect my passion for design and experience. </p>
          <div class="button-bar">
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://tranquil-waters-99328.herokuapp.com/">Demo</a></button>
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://github.com/brendenrdowd/itTakesAVillage-client">Code</a></button>
          </div>
        </div>
      </div>
      <div class="card col-sm-12 col-lg-3 glass">
        <img class="work-icon" src={codeLogo} alt="code logo" />
        <div class="flex-col pad-1 ">
          <h1 class="black">Storefront</h1>
          <p class="work-text">Storefront is an attempt to create a shopping cart based website that can function on its own or as a theme for sites like shopify. </p>
          <div class="button-bar">
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://sleepy-harbor-12611.herokuapp.com/about#">Demo</a></button>
            <button class="btn"><a target="_blank" rel="noreferrer" href="https://github.com/brendenrdowd/storefront">Code</a></button>
          </div>
        </div>
      </div>
    </article>
  )
}
