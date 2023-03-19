import { Card } from 'antd'
import type { CardProps } from 'antd/es/card'
import './styles/QSCard.css'

type QSCardProps = {
  qscardtype: 'default' | 'form'
} & CardProps

export const QSCard = (props:QSCardProps) => {
  const { children, qscardtype } = props

  const baseClass = qscardtype === 'form' ? 'qs-card qs-card-form' : 'qs-card'

  return (
    <Card {...props} className={props.className ? `${props.className} ${baseClass}`: baseClass}>
      {children}
    </Card>
  )
}