import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom';
import { AltaLogo, More, Logout } from './MenuIcons';
import type { MenuProps } from 'antd';
import './styles/Menu.css'
import { ReadPath, UpdatePath } from '../../../utils/RUDPath';
import Links, { menuLink } from './Routes/MenuBarRoutes';

const { Sider } = Layout

    // Is Path Vaild
    const isMenuPathValid = (considerPath: string, baseLinks: menuLink[]) => {
        let isValid = false

        // Main Menu
        if(considerPath === '/')
        {
            baseLinks.map((baseLink) => {
                if(baseLink.pathLink === considerPath)
                {
                    isValid = true
                }

                if(baseLink.children!.length > 0)
                {
                    baseLink.children?.map((subLink) => {
                        if (subLink.pathLink === '/')
                        {
                            if(subLink.pathLink === considerPath)
                            {
                                isValid = true
                            }
                        }
                        else
                        {
                            if(subLink.pathLink.split('/').filter((subPath) => subPath.length > 0)[subLink.pathLink.split('/').filter((subPath) => subPath.length > 0).length - 1] === considerPath)
                            {
                                isValid = true
                            }
                        }
                        return subLink
                    })
                }

                return baseLink
            })
        }
        else
        {

            baseLinks.map((baseLink) => {
                if(baseLinks.findIndex((baseLink) => baseLink.pathLink.split('/').filter((path) => path.length > 0)[baseLink.pathLink.split('/').filter((path) => path.length > 0).length -1] === considerPath) !== -1)
                {
                    isValid = true
                }

                if(baseLink.children!.length > 0)
                {
                    baseLink.children?.map((subLink) => {
                        if (subLink.pathLink === '/')
                        {
                            if(subLink.pathLink === considerPath)
                            {
                                isValid = true
                            }
                        }
                        else
                        {
                            if(subLink.pathLink.split('/').filter((subPath) => subPath.length > 0)[subLink.pathLink.split('/').filter((subPath) => subPath.length > 0).length - 1] === considerPath)
                            {
                                isValid = true
                            }
                        }
                        return subLink
                    })
                }

                return baseLink
            })
        }
        
        // console.log(isValid)
        return isValid
    }
export const Menubar = () => {
    const [key, setKey] = useState(window.location.pathname === '/' ? [window.location.pathname] : window.location.pathname.split('/').filter((path) => path.length > 0))

    UpdatePath(key)

    // Alta Logo Click Selected Event
    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e.domEvent.currentTarget);

        if (window.location.pathname !== '/')
            setKey(window.location.pathname.split('/').filter((path) => path.length > 0))
        else
            setKey([window.location.pathname])
    };

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

    // Sub Menu
    const subMenu = (MenuLink: menuLink) => {
        return MenuLink.children!.map((subMenuLink) => {
            return getItem(<Link to={subMenuLink.link.to}>{subMenuLink.link.children}</Link>, subMenuLink.pathLink === '/' ? subMenuLink.pathLink : subMenuLink.pathLink.split('/').filter((subPath) => subPath.length > 0)[subMenuLink.pathLink.split('/').filter((subPath) => subPath.length > 0).length - 1])
        })
    }
    
    // Main Menu
    const items:MenuItem[] = Links.map((MenuLink) => {
        if(MenuLink.children && MenuLink.children.length > 0)
        {
            return getItem(<Link to={MenuLink.link.to}>{MenuLink.link.children}</Link>, MenuLink.pathLink === '/' ? MenuLink.pathLink : MenuLink.pathLink.split('/').filter((subPath) => subPath.length > 0)[MenuLink.pathLink.split('/').filter((subPath) => subPath.length > 0).length - 1], MenuLink.icon !== undefined ? React.createElement(MenuLink.icon) : null, subMenu(MenuLink))
        }
        return getItem(<Link to={MenuLink.link.to}>{MenuLink.link.children}</Link>, MenuLink.pathLink === '/' ? MenuLink.pathLink : MenuLink.pathLink.split('/').filter((path) => path.length > 0)[MenuLink.pathLink.split('/').filter((subPath) => subPath.length > 0).length -1], MenuLink.icon !== undefined ? React.createElement(MenuLink.icon) : null)
    })

    // Read Path
    const paths = ReadPath() as string[]
    // console.log(paths)
    // console.log(isMenuPathValid(paths[paths.length - 1], Links))

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
                <Link to='/' onClick={() => {setKey(['/'])}}>{React.createElement(AltaLogo)}</Link>
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
                selectedKeys={isMenuPathValid(paths[paths.length - 1], Links) ? paths : [window.location.pathname]}
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