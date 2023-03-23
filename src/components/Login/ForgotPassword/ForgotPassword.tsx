import { Row, Col, Form, Space } from 'antd'
import { QSTypography, Asterisk, QsInput, QsButton } from '../../Generals';
import { useNavigate } from 'react-router-dom';
import './styles/ForgotPassword.css'

export const ForgotPassword = () => {
    // Navigate
    const navigate = useNavigate()

    // Handle Cancel Forgot Password
    const handleCancelForgotPwd = () => {
        navigate('/login')
    }

    // Handle Continue Forgot Password
    const handleContinueForgotPwd = () => {
        const resetId = 'id01'
        navigate(`/resetpassword/${resetId}`, {
            state: {
                resetId: resetId,
            }
          })
    }

    return (
        <Space className='forgot-password-space'>
            <Space className='forgot-password-form-space' direction='vertical'>
                <div className='alta-media-logo'></div>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24, 0]} className='forgot-password-form-row'>
                        <Col xs={24} className={'forgot-password-form-col'}>
                            <QSTypography.Title level={2}>Đặt lại mật khẩu</QSTypography.Title>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]} className='forgot-password-form-row'>
                        <Col xs={24} className={'forgot-password-form-col'}>
                            <Form.Item
                                className='qs-form-item'
                                label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập địa chỉ email' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space className='form-actions-space form-forgot-password-actions-space'>
                        <QsButton.Cancel onClick={handleCancelForgotPwd}><QSTypography.Button>Hủy</QSTypography.Button></QsButton.Cancel>
                        <QsButton.Submit onClick={handleContinueForgotPwd}><QSTypography.Button>Tiếp tục</QSTypography.Button></QsButton.Submit>
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