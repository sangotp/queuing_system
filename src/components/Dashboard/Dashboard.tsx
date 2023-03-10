import './styles/Dashboard.css'
import { Space, Typography, Card, Row, Col } from 'antd'
import { CardOverallTitle, CardOverallDescription, CalendarIcon, CalendarSuccessIcon, ContactIcon, BookMarkIcon } from './Overall_Card';
import { ChartHeader ,AreaChart } from './Chart'
import { MenuBar } from './MenuBar';

export const Dashboard = () => {
    return (
        <>
            <Space direction='horizontal' className='dashboard-container' style={{ justifyContent: 'space-between' }}>
                <Space direction='vertical' className='analysis-chart-container'>
                    <Typography.Title className='analysis-chart-title'>Biểu đồ cấp số</Typography.Title>
                    <Row gutter={[26, 16]} className='analysis-chart-overall-row'>
                        <Col span={6} className='analysis-chart-overall-col'>
                            <Card bordered={false} className='analysis-chart-overall-card'>
                                <Card.Meta className='analysis-chart-overall-card-meta icon-blue' avatar={<CalendarIcon />} title={<CardOverallTitle text='Số thứ tự đã cấp'/>} />
                                <CardOverallDescription totalCount={4.221} statusByPercent={32.41} />
                            </Card>
                        </Col>
                        <Col span={6} className='analysis-chart-overall-col'>
                            <Card bordered={false} className='analysis-chart-overall-card'>
                                <Card.Meta className='analysis-chart-overall-card-meta icon-green' avatar={<CalendarSuccessIcon />} title={<CardOverallTitle text='Số thứ tự đã sử dụng'/>} />
                                <CardOverallDescription totalCount={3.721} statusByPercent={32.41} />
                            </Card>
                        </Col>
                        <Col span={6} className='analysis-chart-overall-col'>
                            <Card bordered={false} className='analysis-chart-overall-card'>
                                <Card.Meta className='analysis-chart-overall-card-meta icon-orange' avatar={<ContactIcon />} title={<CardOverallTitle text='Số thứ tự đang chờ'/>} />
                                <CardOverallDescription totalCount={468} statusByPercent={56.41} />
                            </Card>
                        </Col>
                        <Col span={6} className='analysis-chart-overall-col'>
                            <Card bordered={false} className='analysis-chart-overall-card'>
                                <Card.Meta className='analysis-chart-overall-card-meta icon-pink' avatar={<BookMarkIcon />} title={<CardOverallTitle text='Số thứ tự đã bỏ qua'/>} />
                                <CardOverallDescription totalCount={32} statusByPercent={22.41} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='analysis-chart-row'>
                        <Col span={24} className='analysis-chart-col'>
                            <Card bordered={false} className='analysis-chart-card'>
                                <ChartHeader />
                                <AreaChart />
                            </Card>
                        </Col>
                    </Row>
                </Space>
            </Space>
            <MenuBar />
        </>
    );
}