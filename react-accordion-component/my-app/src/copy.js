// import { useState } from "react";
// import './Accordion.css'

// export default function Accordion({ topicList }) {
//   const [current, setCurrent] = useState(0)

//   function handleClick() {
//     setCurrent()
//     console.log('Working?')
//   }


//   return (
//     <Topics onCustomClick={handleClick} topicList={topicList} />
//   )
// }

// export function Topics({ text, topicList, onCustomClick, isActive, onShow }) {


//   const topicListItems = topicList.map(topicList =>
//     <div key={topicList.number} className="container">
//       <div onClick={onCustomClick} className="each-topic">{topicList.name}</div>
//       {isActive ? (<div className="each-paragraph">{topicList.paragraph}</div>) : undefined}
//       {/* <div className="each-paragraph">{topicList.paragraph}</div> */}
//     </div>
//   )

//   return (
//     <div className="all-topics">
//       <div>{topicListItems}</div>
//     </div >
//   )
// }

// import { useState } from "react";
// import './Accordion.css'

// export default function Accordion({topicList}) {
// //  const [current, setCurrent] = useState(0)

// //  function handleClick() {
// //   setCurrent()
// //   console.log('Working?')
// //  }

//   return (
//     <Topics paragraphs={topicList[1].paragraph} names={topicList[1].name} numbers={topicList[1].number} topicList={topicList} count={topicList.length}/>
//   )
// }

// export function Topics({paragraphs, names, numbers, count, topicList, onShow}) {

//   console.log('this is count:', count)
//   console.log(names)
//   const topics = []
//   for (let i = 0; i < count; i++) {
//     topics.push(
//       <Topic
//       name={names[i]}
//       paragraph={paragraphs[i]}
//       number={numbers[i]}
//       key={topicList.number[i]}
//       onCustomClick={() => onShow(i)}
//       />
//     )
//   }
//   return (
//     <div>{topics}</div>
//   )
// }

// function Topic({paragraph, name, number, topicList, onCustomClick, isActive}) {
//   <div key={number} className="container">
//     <div onClick={onCustomClick} className="each-topic">{name}</div>
//     {isActive ? (<div className="each-paragraph">{paragraph}</div>) : undefined}
//   </div>
// }
