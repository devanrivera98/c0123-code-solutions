import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work correctly!
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div> {items[current]}</div>
      <div>
        <Button onClick={() => setCurrent(((current - 1) + items.length) % items.length)} text="Prev" />
        <Buttons current={current} onShow={(index) => setCurrent(index)} count={items.length} />
        <Button onClick={() => setCurrent((current + 1) % items.length)} text="Next" />
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 * TODO: Remove the toggle behavior and make the background color a prop, default white.
 * TODO: When clicked, change the current item in the Container.
 */
function Button({ text, backgroundColor = 'white', onClick }) {

  return <button onClick={onClick} style={{backgroundColor : backgroundColor}}>{text}</button>;
}

/**
 * An array of buttons.
 * TODO: Highlight only the active button lightblue.
 */
// DONE : WORKS AS INTENDED
function Buttons({ count, onShow, current }) {

  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
      onClick={() => onShow(i)}
        key={i}
        text={i}
        backgroundColor={i === current ? 'lightblue' : undefined}
        />)

  }
  return <div>{buttons}</div>;
}

