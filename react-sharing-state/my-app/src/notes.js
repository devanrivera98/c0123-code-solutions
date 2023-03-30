import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work correctly!
 */
export default function Container({ items }) {
  return (
    <div>
      <div>{items[0]}</div>
      <div>
        <Button text="Prev" />
        <Buttons count={items.length} />
        <Button text="Next" />
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 * TODO: Remove the toggle behavior and make the background color a prop, default white.
 * TODO: When clicked, change the current item in the Container.
 */
function Button({ text }) {
  const [backgroundColor, setBackgroundColor] = useState('white');
  function toggleBackground() {
    setBackgroundColor(backgroundColor === 'lightblue' ? 'white' : 'lightblue');
  }
  return <button onClick={toggleBackground} style={{ backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons.
 * TODO: Highlight only the active button lightblue.
 */
function Buttons({ count }) {
  const [current, setCurrent] = useState(0);

  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onClick={() => setCurrent(i)}
        backgroundColor={i === current ? 'lightblue' : undefined} />)
  }
  return <div>{buttons}</div>;
}

// how do I update the div name
// would buttons have a state since it is the parent of button 
