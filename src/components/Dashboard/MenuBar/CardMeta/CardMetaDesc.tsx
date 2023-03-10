import { Button } from "antd"
import './styles/CardMeta.css'

type CardMetaDescProps = {
  title: string
  icon: React.ReactNode
  className: string
}

export const CardMetaDesc = ({ icon, title, className }: CardMetaDescProps) => {
  return (
    <Button icon={icon} type='text' className={`card-meta-desc-btn ${className}`} disabled>{title}</Button>
  )
}