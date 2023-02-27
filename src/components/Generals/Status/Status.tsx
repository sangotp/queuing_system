type StatusProps = {
  color?: 'green' | 'red' | 'blue' | 'grey'
  text: string
}

export const Status = ({ color, text }: StatusProps) => {
  return (
    <span>
      {color?.length! > 0 ? <i style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: `${color}`, borderRadius: '50%' }}></i> : null}
      {text}
    </span>
  )
}