import { useParams } from "react-router-dom";
import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, DefaultSelect, QsInput, QsButton, QsInputPassword } from '../../../Generals';
import { Row, Col, Form, Space } from 'antd'
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../../../state/reducers';
import type { DefaultOptionType } from 'antd/es/select';
import { QsUtilsRead } from "../../../../utils/CRUD";


// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

export const UpdateAccount = () => {
    const { userId } = useParams()
    // Account
    const account = QsUtilsRead.Account(userId!)

    // Roles
    const roles = useSelector((state: reducerTypes) => state.userRoles)

    return account && (
        <ContentSpace>
            <ContentTitle title='Quản lý tài khoản' />
            <QSCard qscardtype='form'>
                <QSTypography.Title level={2}>Thông tin tài khoản</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                                label="Họ tên:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập họ tên' value={account.fullname} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
                                label="Tên đăng nhập:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tên đăng nhập' value={account.username} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                                label="Số điện thoại:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập số điện thoại' value={account.phone_number} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                                label="Mật khẩu:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInputPassword type='password' placeholder='Nhập mật khẩu' value={account.password} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập Email' }]}
                                label="Email:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập email' value={account.email} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                                label="Nhập lại Mật khẩu:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInputPassword type='password' placeholder='Nhập lại mật khẩu' value={account.password} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
                                label="Vai trò:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Chọn vai trò'
                                    onChange={handleChange}
                                    defaultValue={account.user_role_id}
                                    options={
                                        roles.map((role) => {
                                            return { value: role.doc_id, label: role.name } as DefaultOptionType
                                        })
                                    } 
                                    className='select-roles'
                                    getPopupContainer={() => document.querySelector('.select-roles')!}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng chọn tình trạng' }]}
                                label="Tình trạng:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Chọn tình trạng'
                                    onChange={handleChange}
                                    defaultValue={account.activity_status}
                                    options={
                                        [
                                            { value: 0, label: 'Ngưng hoạt động' },
                                            { value: 1, label: 'Hoạt động' },
                                        ]
                                    } 
                                    className='select-account-status'
                                    getPopupContainer={() => document.querySelector('.select-account-status')!}
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
                <QsButton.Submit><QSTypography.Button>Cập nhật tài khoản</QSTypography.Button></QsButton.Submit>
            </Space>
        </ContentSpace>
    );
}