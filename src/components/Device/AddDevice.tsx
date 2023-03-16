import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, DefaultSelect } from '../Generals';
import { UpdatePath } from '../../utils/RUDPath';
import { Row, Col, Form, Input, Space } from 'antd'
import '../Generals/DataEntry/Form/styles/Form.css'

// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

export const AddDevice = () => {
    const deviceCreatePath = ['device', 'create']
    UpdatePath(deviceCreatePath)

    return (
        <ContentSpace>
            <ContentTitle title='Quản lý thiết bị' />
            <QSCard>
                <QSTypography.Title level={2}>Thông tin thiết bị</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập mã thiết bị' }]}
                                label="Mã thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Input placeholder='Nhập mã thiết bị' value='' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng chọn loại thiết bị' }]}
                                label="Loại thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Chọn loại thiết bị'
                                    onChange={handleChange}
                                    options={[
                                        { value: 'all', label: 'Tất cả'},
                                        { value: 'active', label: 'Hoạt động' },
                                        { value: 'inactive', label: 'Ngưng hoạt động' },
                                    ]} 
                                    className='select-device-type'
                                    getPopupContainer={() => document.querySelector('.select-device-type')!}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập tên thiết bị' }]}
                                label="Tên thiết bị:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Input placeholder='Nhập tên thiết bị' value='' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
                                label="Tên đăng nhập:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Input placeholder='Nhập tài khoản' value='' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ IP' }]}
                                label="Địa chỉ IP:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Input placeholder='Nhập địa chỉ IP' value='' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                                label="Mật khẩu:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Input placeholder='Nhập mật khẩu' value='' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Form.Item
                                rules={[{ required: true, message: 'Vui lòng nhập dịch vụ sử dụng' }]}
                                label="Dịch vụ sử dụng:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >

                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Nhập dịch vụ sử dụng'
                                    onChange={handleChange}
                                    options={[
                                        { value: 'all', label: 'Tất cả'},
                                        { value: 'active', label: 'Hoạt động' },
                                        { value: 'inactive', label: 'Ngưng hoạt động' },
                                    ]}
                                    mode='multiple'
                                    className='select-service-used'
                                    getPopupContainer={() => document.querySelector('.select-service-used')!}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Space>
                                {Asterisk}
                                <QSTypography.Text>Là trường thông tin bắt buộc</QSTypography.Text>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </QSCard>
            <p>Actions</p>
        </ContentSpace>
    );
}