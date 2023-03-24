import { Row, Col, Form, Space } from 'antd'
import { Link } from 'react-router-dom';
import { QSTypography, Asterisk, Warning, QsInput, QsInputPassword, QsButton } from '../Generals';
import { bindActionCreators } from 'redux';
import { LoginActionCreators } from '../../state/action-creators';
import { useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../state/reducers';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css'

export const Login = () => {
    // Navigate
    const navigate = useNavigate()

    // OnChange Login Form
    const [username, setUserName] = useState('user01')
    const [password, setPassWord] = useState('Pa$$w0rd')

    // Handle OnChange Input
    const handleOnChangeUserName = (e: React.ChangeEvent<HTMLInputElement>, isLoggedIn?: React.MutableRefObject<boolean>) => {
        setUserName(e.target.value)
        if (isLoggedIn?.current)
        {
            isLoggedIn.current = false
        }
    }

    const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>, isLoggedIn?: React.MutableRefObject<boolean>) => {
        setPassWord(e.target.value)
        if (isLoggedIn?.current)
        {
            isLoggedIn.current = false
        }
    }

    // Login Action Creators
    const dispatch = useDispatch()
    const loginACT = bindActionCreators(LoginActionCreators, dispatch)

    // loading submit
    const [isSubmit, setIsSubmit] = useState(false)

    // Handle Submit Login
    const handleSubmitLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('Submit Login')
        e.preventDefault()
        setIsSubmit(true)
        loginACT.LoginAction(username, password)

        // Navigate To Path '/' If Path is "/login"
        if (window.location.pathname === '/login')
        {
            navigate('/')
        }
    }

    // Handle Login Info Status (Login Faild Or Success)
    const isLoggedIn = useRef(false);
    const loginInfo = useSelector((state: reducerTypes) => state.loginInfo)
    useEffect(() => {
        if (!loginInfo?.isLoggedIn && loginInfo?.loginDate)
        {
            console.log('Login Failed')
            isLoggedIn.current = true
            setIsSubmit(false)
        }

        // Unmount
        return (() => {
            setIsSubmit(false)
        })
    }, [loginInfo])
    
    return (
        <Space className='login-space'>
            <Space className='login-form-space' direction='vertical'>
                <div className='alta-media-logo'></div>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24, 0]} className='login-form-row'>
                        <Col xs={24} className={isLoggedIn.current ? 'login-form-col login-form-col-validation red-border-warning' : 'login-form-col'}>
                        <Form.Item
                                className='qs-form-item'
                                label="Tên đăng nhập"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tên đăng nhập' onChange={(e) => handleOnChangeUserName(e, isLoggedIn)} value={username} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} className={isLoggedIn.current ? 'login-form-col login-form-col-validation red-border-warning' : 'login-form-col'}>
                            <Form.Item
                                className='qs-form-item'
                                label="Mật khẩu"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInputPassword type='password' placeholder='Nhập mật khẩu' onChange={(e) => handleOnChangePassword(e, isLoggedIn)} value={password} />
                                {isLoggedIn.current ? <Space size={4} align='center' className='form-space-validation-password'>
                                    {Warning}
                                    <QSTypography.Text>Sai mật khẩu hoặc tên đăng nhập</QSTypography.Text>
                                </Space> : false}
                            </Form.Item>
                        </Col>
                    </Row>
                    {
                        isLoggedIn.current ?
                        false
                        :
                        <Row gutter={[24, 0]} className='login-form-row'>
                            <Col xs={24} lg={24} xl={24} className='login-form-col'>
                                <Space size={4} align='center' className='form-space-forgot-password'>
                                    <Link to={'/forgotpassword'}>Quên mật khẩu?</Link>
                                    {/* {Asterisk} */}
                                </Space>
                            </Col>
                        </Row> 
                    }
                    <Row gutter={[24, 0]} className='login-form-row'>
                        <Col xs={24} lg={24} xl={24} style={{ textAlign: 'center' }} className='login-form-col'>
                            <QsButton.Submit className='submit-login-btn' onClick={(e) => handleSubmitLogin(e)} loading={isSubmit} htmlType="submit"><QSTypography.Button>Đăng nhập</QSTypography.Button></QsButton.Submit>
                        </Col>
                    </Row>
                    {
                        isLoggedIn.current ?
                        <Row gutter={[24, 0]} className='login-form-row'>
                            <Col xs={24} lg={24} xl={24} className='login-form-col login-form-col-validation'>
                                <Space size={4} align='center' className='form-space-forgot-password form-space-forgot-password-validation'>
                                    <Link to={'/forgotpassword'}>Quên mật khẩu?</Link>
                                    {/* {Asterisk} */}
                                </Space>
                            </Col>
                        </Row>
                        :
                        false
                    }
                </Form>
            </Space>
            <Space className='illustration-image-space'>
                <div className='illustration-image-desc'>
                    <QSTypography.Title level={2} className='illustration-image-sub-title'>Hệ thống</QSTypography.Title>
                    <QSTypography.Title level={2} className='illustration-image-main-title'>Quản Lý Xếp Hàng</QSTypography.Title>
                </div>
            </Space>
        </Space>
    );
}