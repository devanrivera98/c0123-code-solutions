import { FaCircle, FaLessThan, FaGreaterThan } from 'react-icons/fa'
// import { useState, useEffect } from "react";
import './Carousel.css'

export default function Carousel() {
  return (
    <Button />
  )
}



function Button() {
  return (
    <>
    <div className="row">
      <div className="holder">
        <FaLessThan className="arrows fa-solid fa-less-than" />
          <img src='images/004.png' alt="Pikachu" />
        <FaGreaterThan className="arrows fa-solid fa-greater-than" />
      </div>
      <div className="selector">
        <FaCircle className="one circle fa-sharp fa-solid fa-circle" />
        <FaCircle className="two circle fa-sharp fa-solid fa-circle" />
        <FaCircle className="three circle fa-sharp fa-solid fa-circle" />
        <FaCircle className="four circle fa-sharp fa-solid fa-circle" />
      </div>
    </div>
    </>
   )
}

// function Images() {

// }
