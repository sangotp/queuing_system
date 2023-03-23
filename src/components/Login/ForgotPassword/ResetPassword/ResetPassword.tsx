import { Row, Col, Form, Space } from 'antd'
import { QSTypography, Asterisk, QsInputPassword, QsButton } from '../../../Generals';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/ResetPassword.css'

export const ResetPassword = () => {
    // Params
    const { resetId } = useParams()

    // Navigate
    const navigate = useNavigate()

    // Handle Continue Forgot Password
    const handleConfirmResetPwd = () => {
        // navigate(`/resetpassword/confirm/${resetId}`, {
        //     state: {
        //         resetId: resetId
        //     }
        // })
        navigate(`/`, {
            state: {
                resetId: resetId
            }
        })
    }

    return (
        <Space className='reset-password-space'>
            <Space className='reset-password-form-space' direction='vertical'>
                <div className='alta-media-logo'></div>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24, 0]} className='reset-password-form-row'>
                        <Col xs={24} className={'reset-password-form-col'}>
                            <QSTypography.Title level={2}>Đặt lại mật khẩu mới</QSTypography.Title>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]} className='reset-password-form-row'>
                        <Col xs={24} className={'reset-password-form-col'}>
                            <Form.Item
                                className='qs-form-item'
                                label="Mật khẩu"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInputPassword type='password' placeholder='Nhập mật khẩu' />
                            </Form.Item>
                            <Form.Item
                                className='qs-form-item'
                                label="Nhập lại mật khẩu"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInputPassword type='password' placeholder='Nhập lại mật khẩu' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space className='form-actions-space form-reset-password-actions-space'>
                        <QsButton.Submit onClick={handleConfirmResetPwd}><QSTypography.Button>Xác nhận</QSTypography.Button></QsButton.Submit>
                    </Space>
                </Form>
            </Space>
            <Space className='illustration-image-space'>
                <div className='illustration-image-desc'>
                    {/* <QSTypography.Title level={2} className='illustration-image-sub-title'>Hệ thống</QSTypography.Title>
                    <QSTypography.Title level={2} className='illustration-image-main-title'>Quản Lý Xếp Hàng</QSTypography.Title> */}
                </div>
            </Space>
        </Space>
    );
}