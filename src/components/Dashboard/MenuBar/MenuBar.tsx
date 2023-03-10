import { Space, Typography, Card } from "antd"
import './styles/MenuBar.css'
import { DeviceMultiDonutChart, ServiceMultiDonutChart, ProgressionTrippleDonutChart, DotIcon } from "./MenuBarIcons"
import { CardMetaDesc, CardMetaStatusDesc } from "./CardMeta"
import { MonitorIcon, QuestionIcon, StackIcon } from "./CardMeta/CardMetaIcons"
import { CustomCalendar } from "./Calendar"

export const MenuBar = () => {

  return (
    <Space direction='vertical' className='menubar-overall-container'>
      <Typography.Title className='menubar-overall-title'>Tổng quan</Typography.Title>
      <Card bordered={false} className='overall-card'>
        <Space direction='horizontal' className='overall-card-meta-container'>
          <Card.Meta className='overall-card-meta' avatar={<DeviceMultiDonutChart />} title='4221' description={<CardMetaDesc icon={MonitorIcon} title='Thiết bị' className='orange' />} />
          <Space direction='vertical' className='overall-card-status-container'>
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#FFD130' />} title='Đang hoạt động' description={<CardMetaStatusDesc totalCount={3799} color='#FF7506' />} />
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#7E7D88' />} title='Ngưng hoạt động' description={<CardMetaStatusDesc totalCount={422} color='#FF7506' />} />
          </Space>
        </Space>
      </Card>
      <Card bordered={false} className='overall-card'>
        <Space direction='horizontal' className='overall-card-meta-container'>
          <Card.Meta className='overall-card-meta' avatar={<ServiceMultiDonutChart />} title='276' description={<CardMetaDesc icon={QuestionIcon} title='Dịch vụ' className='blue' />} />
          <Space direction='vertical' className='overall-card-status-container'>
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#4277FF' />} title='Đang hoạt động' description={<CardMetaStatusDesc totalCount={210} color='#4277FF' />} />
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#7E7D88' />} title='Ngưng hoạt động' description={<CardMetaStatusDesc totalCount={422} color='#4277FF' />} />
          </Space>
        </Space>
      </Card>
      <Card bordered={false} className='overall-card'>
        <Space direction='horizontal' className='overall-card-meta-container'>
          <Card.Meta className='overall-card-meta' avatar={<ProgressionTrippleDonutChart />} title='4221' description={<CardMetaDesc icon={StackIcon} title='Cấp số' className='green' />} />
          <Space direction='vertical' className='overall-card-status-container'>
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#35C75A' />} title='Đã sử dụng' description={<CardMetaStatusDesc totalCount={3.721} color='#35C75A' />} />
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#7E7D88' />} title='Đang chờ' description={<CardMetaStatusDesc totalCount={486} color='#35C75A' />} />
            <Card.Meta className='overall-card-meta-status' avatar={<DotIcon color='#F178B6' />} title='Bỏ qua' description={<CardMetaStatusDesc totalCount={32} color='#35C75A' />} />
          </Space>
        </Space>
      </Card>
      <Card bordered={false} className='calendar-card'>
        <CustomCalendar />
      </Card>
    </Space>
  )
}