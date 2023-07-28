import React from "react"
export default function Card(props){
    return(
<div class="card" style={{width:'18rem'}}>
  <img src={props.imgSrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href={props.href} class="btn btn-primary">{props.buttonValue}</a>
  </div>
</div>
    )
}
