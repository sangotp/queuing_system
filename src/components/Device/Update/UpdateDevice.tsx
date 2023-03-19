import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, DefaultSelect, QsInput, QsButton } from '../../Generals';
import { UpdatePath } from '../../../utils/RUDPath';
import { Row, Col, Form, Space } from 'antd'
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../../state/reducers';
import type { DefaultOptionType } from 'antd/es/select';
import { useParams } from 'react-router-dom';
import { QsUtilsRead } from '../../../utils/CRUD';
import './styles/UpdateDevice.css'
import '../../Generals/DataEntry/Form/styles/Form.css'

// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

export const UpdateDevice = () => {
    // Params
    const { id } = useParams()

    // Path
    const deviceUpdatePath = ['device', 'update']
    UpdatePath(deviceUpdatePath)

    // Services
    const services = useSelector((state:reducerTypes) => state.services)

    // Devices
    const device = QsUtilsRead.Device(id!)

    return device && (
        <ContentSpace>
            <ContentTitle title='Quản lý thiết bị' />
            <QSCard qscardtype='form'>
                <QSTypography.Title level={2}>Thông tin thiết bị</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập mã thiết bị' }]}
                                label="Mã thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập mã thiết bị' value={device?.id} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng chọn loại thiết bị' }]}
                                label="Loại thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <DefaultSelect 
                                    value={device?.type}
                                    placeholder='Chọn loại thiết bị'
                                    onChange={handleChange}
                                    options={
                                        [
                                            { value: 'Kiosk', label: 'Kiosk' },
                                            { value: 'Display counter', label: 'Display counter' },
                                        ]
                                    } 
                                    className='select-device-type'
                                    getPopupContainer={() => document.querySelector('.select-device-type')!}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên thiết bị' }]}
                                label="Tên thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tên thiết bị' value={device?.name} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
                                label="Tên đăng nhập:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tài khoản' value={device?.username} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ IP' }]}
                                label="Địa chỉ IP:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập địa chỉ IP' value={device?.ip} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                                label="Mật khẩu:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập mật khẩu' value={device?.password} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập dịch vụ sử dụng' }]}
                                label="Dịch vụ sử dụng:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >

                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Nhập dịch vụ sử dụng'
                                    onChange={handleChange}
                                    options={
                                        services.map((service) => {
                                            return { value: service.name, label: service.name } as DefaultOptionType
                                        })
                                    }
                                    value={device?.customServices?.map((service) => {
                                        return service.name
                                    })}
                                    mode='multiple'
                                    className='select-service-used'
                                    getPopupContainer={() => document.querySelector('.select-service-used')!}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Space size={4} align='center' className='form-space-desc'>
                                {Asterisk}
                                <QSTypography.Text>Là trường thông tin bắt buộc</QSTypography.Text>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </QSCard>
            <Space className='form-actions-space'>
                <QsButton.Cancel><QSTypography.Button>Hủy bỏ</QSTypography.Button></QsButton.Cancel>
                <QsButton.Submit><QSTypography.Button>Cập nhật</QSTypography.Button></QsButton.Submit>
            </Space>
        </ContentSpace>
    );
}