import { useParams } from "react-router-dom";
import { ContentSpace, ContentTitle, QsAsideActions, QSCard, QSTypography, EditSquareIcon } from '../../Generals'
import { QsUtilsRead } from '../../../utils/CRUD'
import { Row, Col } from 'antd'
import { useNavigate, useLocation } from "react-router-dom";
import './styles/DetailsDevice.css'

export const DetailsDevice = () => {
    // Location
    const location = useLocation()

    // Params
    const { deviceId } = useParams()

    // Device
    const device = QsUtilsRead.Device(deviceId!)

    // Aside Actions Event
    const navigate = useNavigate();

    const handleUpdateDeviceClick = () => {
        navigate(`/device/update/${deviceId}`, {
            state: {
                deviceId: location.state?.deviceId
            }
        })
    }

    return device && (
        <ContentSpace>
            <ContentTitle title='Quản lý thiết bị' />
            <QSCard qscardtype='default' className='qs-card-details'>
                <Row>
                    <Col xs={24}>
                        <QSTypography.Title level={2}>Thông tin thiết bị</QSTypography.Title>
                    </Col>
                    <Col xs={24} lg={12}>
                        <QSTypography.Group direction='horizontal' title='Mã thiết bị:'>{device?.id}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Tên thiết bị:'>{device?.name}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Địa chỉ IP:'>{device?.ip}</QSTypography.Group>
                    </Col>
                    <Col xs={24} lg={12}>
                        <QSTypography.Group direction='horizontal' title='Loại thiết bị:'>{device?.type}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Tên đăng nhập:'>{device?.password}</QSTypography.Group>
                        <QSTypography.Group direction='horizontal' title='Mật khẩu:'>{device?.password}</QSTypography.Group>
                    </Col>
                    <Col xs={24}>
                        <QSTypography.Group direction='vertical' title='Dịch vụ sử dụng:'>{device?.customServices ? 
                    device?.customServices.map((service) => {
                        if(device.customServices![device.customServices!.length - 1] === service)
                            return ` ${service.name}`
                        return service.name
                    }).toString() 
                    : 
                    'Không có dịch vụ sử dụng'}</QSTypography.Group>
                    </Col>
                </Row>
            </QSCard>
            <QsAsideActions actions={
                [
                    {icon: EditSquareIcon, onClick: handleUpdateDeviceClick, children: <><span>Cập nhật</span><br/><span>thiết bị</span></> ,className:'qs-aside-btn-fixed-card'},
                ]
            } />
        </ContentSpace>
    );
}