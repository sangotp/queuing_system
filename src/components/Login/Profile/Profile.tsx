import { Space, Avatar, Typography, Button, Form, Input, Row, Col } from "antd";
import { UpdatePath } from "../../../utils/RUDPath";
import './styles/Profile.css'
import ProfileImage from './images/profile.png'
import { Camera } from "./ProfileIcons";
import React from "react";

export const Profile = () => {
    UpdatePath(['profile'])
    return (
        <Space direction='horizontal' className='profile-container'>
            <Space className='avatar-group' direction='vertical'>
                <Space className='profile-avatar-container'>
                    <Avatar className='profile-avatar' size={248} src={<img src={ProfileImage} alt="Profile Avatar" />}/>
                    <Button className='profile-avatar-upload-btn' type='text' icon={React.createElement(Camera)}></Button>
                </Space>
                <Typography.Text className='profile-fullname'>Lê Quỳnh Ái Vân</Typography.Text>
            </Space>
            <Form layout='vertical' className='profile-form-control'>
                <Row gutter={[24,0]}>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Tên người dùng">
                            <Input value='Lê Quỳnh Ái Vân' disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Tên đăng nhập">
                            <Input value='lequynhaivan01' disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Số điện thoại">
                            <Input value='0767375921' disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Mật khẩu">
                            <Input value='311940211' disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Email">
                            <Input value='adminSSO1@domain.com' disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} xl={12} className='form-group'>
                        <Form.Item label="Vai trò">
                            <Input value='Kế toán' disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Space>
    );
}