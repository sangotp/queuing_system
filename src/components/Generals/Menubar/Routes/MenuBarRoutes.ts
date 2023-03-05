import React from "react";
import { To } from "react-router-dom"
import { Element4, Monitor, Question, Stack, BarChart, Setting } from '../MenuIcons';

// Array Of Routes
const MenuBarRoutes = [
    {
      type: 'menuItem',
      level: 1,
      path: '/',
      pathName: 'Dashboard',
      textDisplay: 'Dashboard',
      icon: Element4,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      path: '/device',
      pathName: 'device',
      textDisplay: 'Thiết bị',
      icon: Monitor,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      path: '/service',
      pathName: 'service',
      textDisplay: 'Dịch vụ',
      icon: Question,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      path: '/progression',
      pathName: 'progression',
      textDisplay: 'Cấp số',
      icon: Stack,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      path: '/report',
      pathName: 'report',
      textDisplay: 'Báo cáo',
      icon: BarChart,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      path: '#',
      pathName: '#',
      textDisplay: 'Cài đặt hệ thống',
      icon: Setting,
      children: [
        {
          type: 'subMenuItem',
          level: 2,
          path: '/role',
          pathName: 'role',
          textDisplay: 'Vai trò',
          icon: null,
          children: []
        },
        {
          type: 'subMenuItem',
          level: 2,
          path: '/account',
          pathName: 'account',
          textDisplay: 'Tài khoản',
          icon: null,
          children: []
        },
        {
          type: 'subMenuItem',
          level: 2,
          path: '/log',
          pathName: 'log',
          textDisplay: 'Nhật ký người dùng',
          icon: null,
          children: []
        }
      ]
    },
  ]

// Array of actual Link
const Links = [] as menuLink[]

export type subMenuLink = {
  type: 'subMenuLink',
  level: number,
  link: {to: To, children: React.ReactNode},
  pathLink: string,
  linkDisplayText: string,
  icon?: JSX.Element,
}

export type menuLink = {
  type: 'menuLink',
  level: number,
  link: {to: To, children: React.ReactNode},
  pathLink: string,
  linkDisplayText: string,
  icon?: () => JSX.Element,
  children?: subMenuLink[]
}

MenuBarRoutes.map((route) => {
  const menu:menuLink = {
    type: 'menuLink',
    level: 1,
    link: { to: route.path, children: route.textDisplay },
    pathLink: route.path,
    linkDisplayText: route.textDisplay,
    icon: route.icon,
    children: [] as subMenuLink[]
  }

  if (route.children.length > 0)
  {
    route.children.map((subRoute) => {
      const subMenu:subMenuLink = {
        type: 'subMenuLink',
        level: 2,
        link: { to: subRoute.path, children: subRoute.textDisplay },
        pathLink: subRoute.path,
        linkDisplayText: subRoute.textDisplay,
      }
      return menu.children!.push(subMenu)
    })
  }

  return Links.push(menu)
})

export default Links;
