import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom';
import { AltaLogo ,Element4, Monitor, Question, Stack, BarChart, Setting, More, Logout } from './MenuIcons';
import type { MenuProps } from 'antd';
import './styles/Menu.css'
import { useState } from 'react';


const { Sider } = Layout

export const Menubar = () => {
    // Key
    const [key, setKey] = useState([window.location.pathname])

    // Alta Logo Click Selected Event
    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e.domEvent.currentTarget);
        setKey([window.location.pathname])
        // console.log(key)
      };

    // Redirect Component
    const Links = [
        <Link to='/'>Dashboard</Link>,
        <Link to='/device'>Thiết bị</Link>,
        <Link to='/service'>Dịch vụ</Link>,
        <Link to='/progression'>Cấp số</Link>,
        <Link to='/report'>Báo cáo</Link>,
        <Link to='#'>Cài đặt hệ thống</Link>,
        <Link to='/role'>Vai trò</Link>,
        <Link to='/account'>Tài khoản</Link>,
        <Link to='/log'>Nhật ký người dùng</Link>,
        <Link to='/profile'>Thông tin cá nhân</Link>
    ]

    const Icons = [
        Element4, Monitor, Question, Stack, BarChart, Setting
    ]
    // console.log(window.location.pathname)
    // console.log(Links[0].props.to)

    // Menu Items
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

    const items:MenuItem[] = 
    Icons.map((icon, index) => {
        if(Icons.length - 1 === index)
        {
            return getItem(Links[index], String(Links[index].props.to), React.createElement(icon), [
                getItem(Links[Links.length - 4], String(Links[Links.length - 4].props.to)),
                getItem(Links[Links.length - 3], String(Links[Links.length - 3].props.to)),
                getItem(Links[Links.length - 2], String(Links[Links.length - 2].props.to)),
            ])
        }
        return getItem(Links[index], String(Links[index].props.to), React.createElement(icon),null!)
    }) as MenuItem[]

    return (
        <Sider
            className='menubar'
            theme='light'
            breakpoint='lg'
            collapsedWidth={0}
            onBreakpoint={(broken) => {
            // console.log(broken)
            }}
            onCollapse={(collapse, type) => {
            //  console.log(collapse, type)
                document.querySelector('.logout')?.classList.toggle('hide')
            }}
        >
            <div className='alta-logo'>
                <Link to='/' onClick={() => setKey([window.location.pathname])}>{React.createElement(AltaLogo)}</Link>
            </div>
            <ConfigProvider
                theme={{ 
                    token: {
                        colorText: '#7e7d88',
                        colorPrimary: '#fff',
                        fontFamily: 'Nunito',
                        fontWeightStrong: 600,
                        lineHeight: 24,
                        fontSize: 16
                    },
                 }}
            >
            <Menu
                onClick={onClick}
                style={{ border: 0 }}
                theme='light'
                mode='vertical'
                expandIcon={React.createElement(More)}
                defaultSelectedKeys={key}
                items={items}
                onOpenChange={(keys) => {
                    // console.log(keys)
                }}
                selectedKeys={[window.location.pathname]}
            />
            </ConfigProvider>
            <div className='logout'>
                <Link to='#' className='logout-link'>
                    {React.createElement(Logout)}
                    <span className='logout-link-text'>Đăng xuất</span>
                </Link>
            </div>
      </Sider>
    );
}