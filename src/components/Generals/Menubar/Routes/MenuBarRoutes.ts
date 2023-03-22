import React from "react";
import { To } from "react-router-dom"
import { Element4, Monitor, Question, Stack, BarChart, Setting } from '../MenuIcons';

// Array Of Routes
const MenuBarRoutes = [
    {
      type: 'menuItem',
      level: 1,
      paths: ['/'],
      pathName: 'Dashboard',
      textDisplay: 'Dashboard',
      icon: Element4,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      paths: ['device'],
      pathName: 'device',
      textDisplay: 'Thiết bị',
      icon: Monitor,
      children: [],
      actionLinks: [
        {
          type: 'actionLink',
          level: -1,
          paths: ['device', 'create'],
          pathName: 'create device',
          parentPaths: ['device']
        },
        {
          type: 'actionLink',
          level: -1,
          paths: ['device', 'details'],
          pathName: 'details device',
          parentPaths: ['device']
        },
        {
          type: 'actionLink',
          level: -1,
          paths: ['device', 'update'],
          pathName: 'update device',
          parentPaths: ['device']
        },
      ]
    },
    {
      type: 'menuItem',
      level: 1,
      paths: ['service'],
      pathName: 'service',
      textDisplay: 'Dịch vụ',
      icon: Question,
      children: [],
      actionLinks: [
        {
          type: 'actionLink',
          level: -1,
          paths: ['service', 'create'],
          pathName: 'create service',
          parentPaths: ['service']
        },
        {
          type: 'actionLink',
          level: -1,
          paths: ['service', 'details'],
          pathName: 'details service',
          parentPaths: ['service']
        },
        {
          type: 'actionLink',
          level: -1,
          paths: ['service', 'update'],
          pathName: 'update service',
          parentPaths: ['service']
        },
      ]
    },
    {
      type: 'menuItem',
      level: 1,
      paths: ['progression'],
      pathName: 'progression',
      textDisplay: 'Cấp số',
      icon: Stack,
      children: [],
      actionLinks: [
        {
          type: 'actionLink',
          level: -1,
          paths: ['progression', 'create'],
          pathName: 'create progression',
          parentPaths: ['progression']
        },
        {
          type: 'actionLink',
          level: -1,
          paths: ['progression', 'details'],
          pathName: 'details progression',
          parentPaths: ['progression']
        },
      ]
    },
    {
      type: 'menuItem',
      level: 1,
      paths: ['report'],
      pathName: 'report',
      textDisplay: 'Báo cáo',
      icon: BarChart,
      children: []
    },
    {
      type: 'menuItem',
      level: 1,
      paths: ['#'],
      pathName: '#',
      textDisplay: 'Cài đặt hệ thống',
      icon: Setting,
      children: [
        {
          type: 'subMenuItem',
          level: 2,
          paths: ['role'],
          pathName: 'role',
          textDisplay: 'Vai trò',
          icon: null,
          children: [],
          actionLinks: [
            {
              type: 'actionLink',
              level: -1,
              paths: ['role', 'create'],
              pathName: 'create role',
              parentPaths: ['role']
            },
            {
              type: 'actionLink',
              level: -1,
              paths: ['role', 'update'],
              pathName: 'update role',
              parentPaths: ['role']
            },
          ]
        },
        {
          type: 'subMenuItem',
          level: 2,
          paths: ['account'],
          pathName: 'account',
          textDisplay: 'Tài khoản',
          icon: null,
          children: [],
          actionLinks: [
            {
              type: 'actionLink',
              level: -1,
              paths: ['account', 'create'],
              pathName: 'create account',
              parentPaths: ['account']
            },
            {
              type: 'actionLink',
              level: -1,
              paths: ['account', 'update'],
              pathName: 'update account',
              parentPaths: ['account']
            },
          ]
        },
        {
          type: 'subMenuItem',
          level: 2,
          paths: ['log'],
          pathName: 'log',
          textDisplay: 'Nhật ký người dùng',
          icon: null,
          children: []
        }
      ]
    },
  ]

export type actionLink = {
  type: 'actionLink',
  level: -1,
  paths: string[],
  pathName: string,
  parentPaths: string[]
}

// Array of actual Link
const Links = [] as menuLink[]

export type subMenuLink = {
  type: 'subMenuLink'
  level: number
  link: {to: To, children: React.ReactNode}
  pathLinks: string[]
  linkDisplayText: string
  icon?: JSX.Element
  actionLinks?: actionLink[]
}

export type menuLink = {
  type: 'menuLink'
  level: number
  link: {to: To, children: React.ReactNode}
  pathLinks: string[]
  linkDisplayText: string
  icon?: () => JSX.Element
  children?: subMenuLink[]
  actionLinks?: actionLink[]
}

const generateLink = (paths: string[]) => {
  let link = ''

  if (JSON.stringify(paths) === JSON.stringify(['/']))
  {
    link = '/'
  }
  else if (JSON.stringify(paths) === JSON.stringify(['#']))
  {
    link = '#'
  }
  else
  {
    paths.map((path) => {
      link += `/${path}`

      return path
    })
  }
  
  return link
}

MenuBarRoutes.map((route) => {
  const menu:menuLink = {
    type: 'menuLink',
    level: 1,
    link: { to: generateLink(route.paths), children: route.textDisplay },
    pathLinks: route.paths,
    linkDisplayText: route.textDisplay,
    icon: route.icon,
    children: [] as subMenuLink[],
    actionLinks: route.actionLinks as actionLink[]
  }

  if (route.children.length > 0)
  {
    route.children.map((subRoute) => {
      const subMenu:subMenuLink = {
        type: 'subMenuLink',
        level: 2,
        link: { to: generateLink(subRoute.paths), children: subRoute.textDisplay },
        pathLinks: subRoute.paths,
        linkDisplayText: subRoute.textDisplay,
      }
      return menu.children!.push(subMenu)
    })
  }

  return Links.push(menu)
})

export default Links;
