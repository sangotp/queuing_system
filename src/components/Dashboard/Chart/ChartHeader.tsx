import { Space, Card, Select, Typography } from 'antd'
import './styles/Chart.css'
import { ArrowDownIcon } from './Chart_Icons';

const selectOptions = [
  { value: 'day', label: 'Ngày' },
  { value: 'week', label: 'Tuần' },
  { value: 'year', label: 'Tháng' },
]

const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
};

export const ChartHeader = () => {
  return (
    <Space direction='horizontal' className='chart-header-container'>
      <Card.Meta className='chart-header-card-meta' title='Bảng thống kê theo ngày' description='Tháng 11/2021' />
      <Space direction='horizontal' className='chart-header-select-container'>
        <Typography.Text className='chart-header-select-label'>Xem theo</Typography.Text>
        <Select defaultValue="day" style={{ width: 106 }} onChange={handleChange} options={selectOptions} suffixIcon={<ArrowDownIcon />} getPopupContainer={ () => document.querySelector('.chart-header-select')! } className='chart-header-select' />
      </Space>
    </Space>
  )
}