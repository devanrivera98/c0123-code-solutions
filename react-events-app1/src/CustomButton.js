import './CustomButton.css'

export default function CustomButton({text,color,onCustomClick}) {
  //Step 4
  // function handleClick() {
  //   window.alert(text)
  // }

  return (
    <button onClick={() => onCustomClick(text)} style={{color: color}} className='Button' text={text}>{text}</button>
  )
}
