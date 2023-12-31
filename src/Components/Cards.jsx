import React from 'react'

function Card(props) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <img src={props.img} alt='nature-img' />
        <p>{props.tel}</p>
        <p>{props.email}</p>
        <p>{props.class}</p>
      </div>
    </>
  )
}
export default Card
