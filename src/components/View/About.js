import React from 'react'
import profileImage from '../../assets/brendendowd.jpg'

export default function About() {
  return (
    <article className="backgroundFill left glass">
    {/* <h3 className="left">About Me.</h3> */}
    <section class="profile">
    <img className="profileImg" src={profileImage} alt="brenden dowd" />
    <div>
    <p>My Name is Brenden Dowd. I'm a LA based full stack developer and designer. </p>
    <p>I have a passion for design and problem solving. I am obsessed with the art
          of coalescing form and function. I am skilled in JavaScript with MEAN and React, Python with Flask
          and Django, and C# with .NET. I am a graduate of Coding Dojo and the web development course through
          Thinkful. I am, at heart, a creator. I love the challenge and the thrill of designing something from
          scratch and watching it come to life. I love creating intuitive applications that are just as much
          art as tools. </p>
          <p>I have a background as a mechanic and a filmmaker, with coding as the middle ground between the two.
          Diagnosing and problem solving meets creation and consumption. Outside of coding I enjoy storytelling,
          whether consuming through books, history, film and television, or video games, or telling my own stories.
          I love learning and spend most of my free time learning new things and new skills.</p>
    </div>
    </section>
  </article>
  )
}
