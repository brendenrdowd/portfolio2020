import React from 'react'
// import Tilt from 'react-parallax-tilt';

export default function workCard(props) {
  const interactive = props.interactive == true ? "The example on the left is interactive!" : "";
  return (
    <div class="card col-sm-12 col-lg-3 glass">
      <img src="" alt="" />
      {props.iframe}
      {/* <iframe title="MobileRedesign" width="375" height="750" src="https://xd.adobe.com/embed/d2dfd28b-0bcf-4995-b5c1-851c59f92e0f-878c/" frameborder="0" allowfullscreen></iframe> */}
      <div class="flex-col pad-1 ">
        <h1 class="black">{props.title}</h1>
        <p class="w60"><span className="demo">{interactive}</span>{props.description}</p>
      </div>
    </div>
  )
}
