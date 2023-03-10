import { Space, Typography, Button } from "antd"
import { ArrowUpShortIcon, ArrowDownShortIcon } from "./Card_Icons"
import './styles/CardOverall.css'

type CardOverallDescriptionProps = {
  totalCount: number
  statusByPercent: number
}

export const CardOverallDescription = ({totalCount, statusByPercent}: CardOverallDescriptionProps) => {
  /* Up or Down Arrow Icon And Color Based On 0 and 1 (This is using to demonstrate how it look not actual work) */
  const isUp = Math.floor(Math.random() * 2)
  
  return (
    <Space direction='horizontal' align='end' className='card-overall-desc'>
      <Typography.Title level={2} className='card-overall-desc-title'>{totalCount.toString()}</Typography.Title>
      <Button icon={ isUp ? <ArrowUpShortIcon /> : <ArrowDownShortIcon />} type='text' className={isUp ? 'card-overall-desc-text-btn up' : 'card-overall-desc-text-btn down'} disabled>
        {statusByPercent.toString().replace('.', ",")}%
      </Button>
    </Space>
  )
}