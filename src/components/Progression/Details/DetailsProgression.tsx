import { useParams } from "react-router-dom";
import { ContentSpace, ContentTitle, QsAsideActions, QSCard, QSTypography, ReturnSquareIcon } from '../../Generals'
import { QsUtilsRead } from '../../../utils/CRUD'
import { Row, Col } from 'antd'
import { useNavigate } from "react-router-dom";
import { DateAndTimeFormatter } from "../../../utils/FormatDate";
import { ProgressionStatus } from "../Status";
import './styles/DetailsProgression.css'

export const DetailsProgression = () => {
    // Params
    const { progressionId } = useParams()

    // Progression
    const progression = QsUtilsRead.Progression(progressionId!)

    // Aside Actions Event
    const navigate = useNavigate();

    const handleReturnProgressionClick = () => {
        navigate(`/progression`)
    }

    return progression && (
        <ContentSpace>
            <ContentTitle title='Quản lý thiết bị' />
            <QSCard qscardtype='default' className='qs-card-details'>
                <Row>
                    <Col xs={24}>
                        <QSTypography.Title level={2}>Thông tin cấp số</QSTypography.Title>
                    </Col>
                    <Col xs={24} lg={12}>
                        <QSTypography.Group direction='horizontal' title='Họ tên:'>{progression?.customer_name}</QSTypography.Group>
                        <QSTypography.Group className='mb-12' direction='horizontal' title='Tên dịch vụ:'>{progression?.custom_Service?.name}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Số thứ tự:'>{progression?.id}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Thời gian cấp:'>{DateAndTimeFormatter('-', 'time', progression?.grant_time)}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Hạn sử dụng:'>{DateAndTimeFormatter('-', 'time', progression?.expire_time)}</QSTypography.Group>
                    </Col>
                    <Col xs={24} lg={12}>
                        <QSTypography.Group direction='horizontal' title='Nguồn cấp:'>{progression?.custom_Device?.type}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Trạng thái:'>{ProgressionStatus({status: progression.status})}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Số điện thoại:'>{progression?.phone_number}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Địa chỉ Email:'>{progression?.email}</QSTypography.Group>
                    </Col>
                </Row>
            </QSCard>
            <QsAsideActions actions={
                [
                    {icon: ReturnSquareIcon, onClick: handleReturnProgressionClick, children: <><span>Quay lại</span></> ,className:'qs-aside-btn-fixed-card'},
                ]
            } />
        </ContentSpace>
    );
}