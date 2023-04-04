import { FaRegCircle, FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { useState} from "react";
import './Carousel.css'
import readItems from './PokemonList';


readItems();

export default function Carousel({url, name, characterList}) {
  const [current, setCurrent] = useState(0)
  // const [attribute, setAttribute] = useState()
  // const [photo, setPhoto] = useState()

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

  // function handleClick() {

  // }

  return (
    <>
    <div className='row'>
      <div className='holder'>
        <LeftArrow />
        <img alt={characterList[0].name} src= {characterList[0].url} />
        <RightArrow />
      </div>
      <div className='selector'>
        <Buttons current={current} onCustomClickShow={(index) => setCurrent(index)} count={characterList.length}/>
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
