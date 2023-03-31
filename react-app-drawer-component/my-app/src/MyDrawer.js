import './MyDrawer.css'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


export default function MyDrawer({menuHeading, menuList}) {
  const [isActive, setIsActive] = useState(true)

  function handleClick() {
    setIsActive(!isActive)
  }

  function handleEmptySpace() {
    setIsActive(true)
  }

  const menuItemsList = menuList.map(menuList =>
    <li key={menuList.number}>
      <div>{menuList.name}</div>
    </li>)

  return (
    <>
    {isActive ?
    (<Bars onCustomClick={handleClick}></Bars>) :
    (<>
    <div className='pop-up'>
      <div onClick={handleClick} className='menu'>{menuHeading}</div>
      <div className='menu-items'>
        <ul onClick={handleClick}>{menuItemsList}</ul>
      </div>
    </div>
    <div onClick={handleEmptySpace} className='everything-else' />
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
