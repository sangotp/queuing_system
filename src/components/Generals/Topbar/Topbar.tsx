import { Layout, Breadcrumb, Space, Button, Avatar, Dropdown, Typography } from 'antd'
import { ArrowRight } from './TopbarIcons';
import React from 'react';
import './styles/TopBar.css'
import { BreadcrumbItemsGenerator } from '../../../utils/BreadcrumbItemsGenerator';
import profileImage from './images/profile.png'
import { Link } from 'react-router-dom';
import type { MenuProps } from 'rc-menu';
import { Notification } from './TopbarIcons/Notification';
import { useSelector } from 'react-redux';
import { reducerTypes } from '../../../state/reducers';
import { ProgressionGrantedDateFormatter } from '../../../utils/FormatDate';

const { Header } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    style?: React.CSSProperties,
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        style,
      } as MenuItem;
}

export const Topbar = () => {
    const breadcrumbItems = BreadcrumbItemsGenerator()
    const progressions = useSelector((state: reducerTypes) => state.progressions)
    // Dropdown Menu Items
    const items: MenuItem[] = progressions.map((progression, index) => {
        return getItem(
            <Space direction='vertical' className='notification-item'>
                <Typography.Title className='notification-item-title'>Người dùng: {progression.customer_name}</Typography.Title>
                <Typography.Text className='notification-item-text'>Thời gian nhận số: {ProgressionGrantedDateFormatter('ngày', 'time', progression.grant_time)}</Typography.Text>
                <div className='notification-item-divider'></div>
            </Space>,
            index
        )
    });

    return (
        // ">"
        <Header className='topbar' >
            <Breadcrumb separator={React.createElement(ArrowRight)} className='qs-breadcrumb'>
                {breadcrumbItems.map((item, index) => {
                    return (
                        <Breadcrumb.Item key={index}>
                            {/* <Button type="text" className='text-btn'>{item}</Button> */}
                            {item}
                        </Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
            
            {/* If location is '/' (DashBoard) then we'll fixed topbar right side */}
            <Space className={window.location.pathname === '/' ? 'topbar-right-side-fixed' : 'topbar-right-side'} size='large'>
                <div id='notification'>
                    {/* Offset X = ((360 - 32 (button)) / 2) - 86, Offset Y = 27 */}
                    <Dropdown align={{ offset: [78, 27] }} placement='bottom' menu={{ items }} trigger={['click']} onOpenChange={(isOpen) => {
                        // console.log(isOpen)
                    }} getPopupContainer={(trigger) => document.getElementById('notification')!} >
                        <Button className='notification-btn' type='text' shape='circle' icon={React.createElement(Notification)} onClick={(e) => {
                            // console.log(e)
                        }} />
                    </Dropdown>
                </div>
                <Link to='/profile' className='profile'>
                    <Space size='small'>
                        <Avatar size={40} src={<img src={profileImage} alt='Profile' />} />
                        <Space direction='vertical' className='profile-group'>
                            <span className='profile-status'>Xin chào</span>
                            <span className='profile-fullname'>Lê Quỳnh Ái Vân</span>
                        </Space>
                    </Space>
                </Link>
            </Space>
        </Header>
    );
}