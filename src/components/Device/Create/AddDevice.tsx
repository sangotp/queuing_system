import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, DefaultSelect, QsInput, QsButton } from '../../Generals';
import { UpdatePath } from '../../../utils/RUDPath';
import { Row, Col, Form, Space } from 'antd'
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../../state/reducers';
import type { DefaultOptionType } from 'antd/es/select';
import './styles/AddDevice.css'
import '../../Generals/DataEntry/Form/styles/Form.css'

// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

export const AddDevice = () => {
    // Path
    const deviceCreatePath = ['device', 'create']
    UpdatePath(deviceCreatePath)

    // Services
    const services = useSelector((state:reducerTypes) => state.services)

    return (
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
                                <QsInput placeholder='Nhập mã thiết bị' />
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
                                    // defaultValue="deviceSelect"
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
                                <QsInput placeholder='Nhập tên thiết bị' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
                                label="Tên đăng nhập:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tài khoản' />
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
                                <QsInput placeholder='Nhập địa chỉ IP' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                                label="Mật khẩu:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập mật khẩu' />
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
                                        // [
                                        // { value: 'all', label: 'Tất cả'},
                                        // { value: 'active', label: 'Hoạt động' },
                                        // { value: 'inactive', label: 'Ngưng hoạt động' },
                                        // ]
                                    }
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
                <QsButton.Submit><QSTypography.Button>Thêm Thiết bị</QSTypography.Button></QsButton.Submit>
            </Space>
        </ContentSpace>
    );
}