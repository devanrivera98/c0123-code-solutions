import { FaRegCircle, FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { useState, useEffect} from "react";
import './Carousel.css'
// import readItems from './PokemonList';


// readItems();

export default function Carousel({url, name, characterList}) {
  const [current, setCurrent] = useState(0)

  const carouselMovement = () => {
    if (current === characterList.length - 1) {
      return setCurrent(0)
    }
    return setCurrent(current + 1)
  }

  function handleClick(number) {
    if (number !== current) {
      setCurrent(number)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselMovement()}, 1000)
    return () => clearInterval(interval)
  })

  return (
    <>
    <div className='row'>
      <div className='holder'>
        <LeftArrow onCustomClick={() => setCurrent(((current -1) + characterList.length) % characterList.length)} />
        <CurrentImage isActive={current} alt={characterList[0].name} image={handleClick} characterList={characterList} />
          <RightArrow onCustomClick={() => setCurrent((current + 1) % characterList.length)} />
      </div>
      <div className='selector'>
        <Buttons current={current} onCustomClickShow={(index) => setCurrent(index)} count={characterList.length}/>
      </div>
    </div>
    </>
  )
}

function CurrentImage({characterList, isActive}) {
  const characterListItems = characterList.map(characterList =>
    <>
      {isActive === characterList.number ? (<img id={characterList.number} key={characterList.number} alt={characterList.name} src={characterList.url} />) : undefined }

    </>

    )
    return (
      <>
      <div>{characterListItems}</div>
      </>
    )
}

function RightArrow({onCustomClick}) {
  return (<FaGreaterThan onClick={onCustomClick} className='arrows'/>)
}

function LeftArrow({onCustomClick}) {
  return (<FaLessThan onClick={onCustomClick} className='arrows' />)
}

function Buttons({onCustomClickShow, count, current}) {
  const buttons = []

  for (let i = 0; i < count; i++) {
    buttons.push(
      <EachButton
      key={i}
      name={i}
      onCustomClick ={() => onCustomClickShow(i)}
      bkg={i === current ? 'black' : undefined}
    />)
  }
  return (
      <>
      {buttons}
      </>
  )
}

function EachButton({onCustomClick, id, isActive, bkg = 'white'}) {
  return (
    <FaRegCircle onClick={onCustomClick} className="circle" style={{backgroundColor : bkg}} />


  )
}
