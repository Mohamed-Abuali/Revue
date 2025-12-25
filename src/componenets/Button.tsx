

interface BtnProps{
    text:string,
    variant?:"main" | "secondary" | "outline",
    onClick:() => void,
}

const Button = ({text,variant,onClick}:BtnProps) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

export default Button