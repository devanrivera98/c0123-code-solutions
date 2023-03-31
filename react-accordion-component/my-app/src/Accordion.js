import { useState } from "react";
import './Accordion.css'

export default function Accordion({ topicList }) {
  const [current, setCurrent] = useState(null)

  function handleClick(number) {
    if (number === current) {
      setCurrent(null)
    } else {
      setCurrent(number)
    }
    // console.log(current)
    // console.log(e.target)
    // console.log('Working?')
  }

  return (
    <Topics  isActive={current} onCustomClick={handleClick} topicList={topicList} />
  )
}

export function Topics({ text, topicList, onCustomClick, isActive, onShow }) {


  const topicListItems = topicList.map(topicList =>
    <div id={topicList.number} key={topicList.number} className="container">
      <div onClick={() => onCustomClick(topicList.number)} className="each-topic">{topicList.name}</div>
      {isActive === topicList.number ? (<div className="each-paragraph">{topicList.paragraph}</div>) : undefined}
      {/* <div className="each-paragraph">{topicList.paragraph}</div> */}
    </div>
  )

  return (
    <div className="all-topics">
      <div>{topicListItems}</div>
    </div >
  )
}
