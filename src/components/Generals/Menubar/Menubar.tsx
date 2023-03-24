import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom';
import { AltaLogo, More, Logout } from './MenuIcons';
import type { MenuProps } from 'antd';
import './styles/Menu.css'
import { ReadPath, UpdatePath } from '../../../utils/RUDPath';
import Links, { menuLink } from './Routes/MenuBarRoutes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { LoginActionCreators } from '../../../state/action-creators/Login';

const { Sider } = Layout

// Is Path Vaild
const isMenuPathValid = (considerPaths: string[], menuLinks: menuLink[]) => {
    let isValid = false

    menuLinks.map((menuLink) => {
        // If Valid Menu Link
        if(JSON.stringify(considerPaths) === JSON.stringify(menuLink.pathLinks) && !isValid)
        {
            isValid = true
        }
        
        // If Valid Sub Menu Link
        if (menuLink.children && !isValid)
        {
            menuLink.children.map((subLink) => {
                if(JSON.stringify(considerPaths) === JSON.stringify(subLink.pathLinks) && !isValid)
                {
                    isValid = true
                }

                return subLink
            })
        }

        // If Valid actionLink
        if (menuLink.actionLinks)
        {
            menuLink.actionLinks.map((actionLink) => {
                if(JSON.stringify(considerPaths) === JSON.stringify(actionLink.paths) && !isValid)
                {
                    isValid = true
                }

                return actionLink
            })
        }

        return menuLink
    })
    
    // console.log(isValid)
    return isValid
}

const selectedKeysGenerator = (considerPaths: string[], menuLinks: menuLink[]) => {
    if (isMenuPathValid(considerPaths, menuLinks))
    {
        const selectedKeys = [] as string[]
        menuLinks.map((menuLink) => {
            if(menuLink.actionLinks)
            {
                if(menuLink.actionLinks.findIndex((actionLink) => JSON.stringify(actionLink.paths) === JSON.stringify(considerPaths)) !== -1 && selectedKeys.length === 0)
                {
                    const actionLinkIndex = menuLink.actionLinks.findIndex((actionLink) => JSON.stringify(actionLink.paths) === JSON.stringify(considerPaths))
                    selectedKeys.push(...menuLink.actionLinks![actionLinkIndex].parentPaths)
                }
            }

            return menuLink
        })
        // console.log(selectedKeys)

        return selectedKeys.length > 0 ? selectedKeys : considerPaths
    }

    return considerPaths
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
            return getItem(<Link to={subMenuLink.link.to}>{subMenuLink.link.children}</Link>, subMenuLink.pathLinks[subMenuLink.pathLinks.length - 1])
        })
    }
    
    // Main Menu
    const items:MenuItem[] = Links.map((MenuLink) => {
        if(MenuLink.children && MenuLink.children.length > 0)
        {
            return getItem(<Link to={MenuLink.link.to}>{MenuLink.link.children}</Link>, MenuLink.pathLinks[MenuLink.pathLinks.length - 1], MenuLink.icon !== undefined ? React.createElement(MenuLink.icon) : null, subMenu(MenuLink))
        }
        return getItem(<Link to={MenuLink.link.to}>{MenuLink.link.children}</Link>, MenuLink.pathLinks[MenuLink.pathLinks.length - 1], MenuLink.icon !== undefined ? React.createElement(MenuLink.icon) : null)
    })

    // Read Path
    const paths = ReadPath() as string[]
    // console.log(paths)
    // console.log(isMenuPathValid(paths[paths.length - 1], Links))

    // Logout
    const dispatch = useDispatch()
    const { LogoutAction } = bindActionCreators(LoginActionCreators, dispatch)

    // Handle Logout Button Click
    const handleLogoutBtnClick = () => {
        LogoutAction()
    }

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
                // Logout Button
                collapse ? document.querySelector('.logout')?.classList.add('hide') : document.querySelector('.logout')?.classList.remove('hide')

                // Topbar
                collapse ? document.querySelector('.topbar')?.classList.add('reset-margin-start-menubar') : document.querySelector('.topbar')?.classList.remove('reset-margin-start-menubar')

                // Content
                collapse ? document.querySelector('.content-container')?.classList.add('reset-margin-start-menubar') : document.querySelector('.content-container')?.classList.remove('reset-margin-start-menubar')

                // Content Card Form
                collapse ? document.querySelector('.qs-card-form')?.classList.add('qs-card-form-no-menubar') : document.querySelector('.qs-card-form')?.classList.remove('qs-card-form-no-menubar')

                // Actions Card Form Space
                collapse ? document.querySelector('.form-actions-space')?.classList.add('form-actions-space-no-menubar') : document.querySelector('.form-actions-space')?.classList.remove('form-actions-space-no-menubar')
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
                selectedKeys={selectedKeysGenerator(paths, Links)}
            />
            </ConfigProvider>
            <div className='logout'>
                <Link to='/login' onClick={handleLogoutBtnClick} className='logout-link'>
                    {React.createElement(Logout)}
                    <span className='logout-link-text'>Đăng xuất</span>
                </Link>
            </div>
      </Sider>
    );
}