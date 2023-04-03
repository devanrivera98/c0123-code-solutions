import { FaCircle, FaRegCircle, FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { useState, useEffect } from "react";
import './Carousel.css'
import readItems from './PokemonList';
import pikachu from "./images/025.png"

readItems();

export default function Carousel({url, name, characterList}) {
  const [current, setCurrent] = useState(0)
  const [attribute, setAttribute] = useState()
  const [photo, setPhoto] = useState()

  // useEffect(() => {
  //   readItems()
  //   .then((res) => {
  //     console.log('Working?')
  //     setAttribute(res)
  //     setPhoto(characterList[0].url)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // })

  function handleClick() {

  }

  return (
    <>
    <div className='row'>
      <div className='holder'>
        <LeftArrow />
        <img alt={attribute} src= {characterList[0].url} />
        <RightArrow />
      </div>
      <div className='selector'>
        <Buttons count={characterList.length}/>
      </div>
    </div>
    </>
  )
}

function RightArrow({onCustomClick}) {
  return (<FaGreaterThan className='arrows'/>)
}

function LeftArrow({onCustomClick}) {
  return (<FaLessThan className='arrows' />)
}

function Buttons({onCustomClickShow, count}) {
  const buttons = []

  for (let i = 0; i < count; i++) {
    buttons.push(
      <EachButton
      key={i}
      onCustomClick ={() => onCustomClickShow(i)}
    />)
  }
  return (
      <>
      {buttons}
      </>
  )
}

function EachButton({onCustomClick, id, isActive}) {
  return (
    <FaRegCircle onClick={onCustomClick} className="circle" />


  )
}
