import { Card } from 'antd'
import type { CardProps } from 'antd/es/card'
import './styles/QSCard.css'

export const QSCard = (props:CardProps) => {
  const { children } = props

  return (
    <Card {...props} className='qs-card'>
      {children}
    </Card>
  )
}