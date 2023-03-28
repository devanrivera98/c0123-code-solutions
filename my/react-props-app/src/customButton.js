export default function CustomButton({text,color}) {
  return <button style={{width: "100px",height:"30px"}}text={text} className={color}>{text}</button>
}
