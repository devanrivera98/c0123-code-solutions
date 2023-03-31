import './MyDrawer.css'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


export default function MyDrawer({menuHeading, menuList}) {
  const [isActive, setIsActive] = useState(true)
  // const [current, setCurrent] = useState('this')

  function handleClick() {
    setIsActive(!isActive)
  }

  const menuItemsList = menuList.map(menuList =>
    <li key={menuList.number}>
      <div>{menuList.name}</div>
    </li>)

  return (
    <>
    {isActive ?
        (<div className='bar-page'>
          <Bars onCustomClick={handleClick}></Bars>
          <div className='item-selected'>
            <h1>here</h1>
          </div>
        </div> ) :
    (<>
    <div className='pop-up'>
      <div onClick={handleClick} className='menu'>{menuHeading}</div>
      <div className='menu-items'>
        <ul onClick={handleClick}>{menuItemsList}</ul>
      </div>
    </div>
      <div id='overlay' onClick={handleClick}></div>
    </>
    )}
    {/* <div className="pop-up">
      <div className='menu'>{menuHeading}</div>
      <div className='menu-items'>
        <ul>{menuItemsList}</ul>
      </div>
    </div>
    <div className='everything-else' /> */}
    </>
  )
}


export function Bars({onCustomClick}) {

  return (
  <div onClick={onCustomClick} className='icon'>
      <FaBars  />
  </div>
  )
}
