import './styles/Status.css'

type StatusProps = {
  color?: 'green' | 'red' | 'blue' | 'grey'
  text: string
}

export const Status = ({ color, text }: StatusProps) => {
  return (
    <span className='status-container'>
      {color?.length! > 0 ? <i style={{ backgroundColor: `${color}` }}></i> : false}
      {text}
    </span>
  )
}