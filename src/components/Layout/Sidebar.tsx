import { SiderProps } from 'antd/lib/layout'
import { Layout, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import routes from 'routes'
import SubMenu from 'antd/lib/menu/SubMenu'

const { Sider } = Layout

function Sidebar(props: SiderProps) {
  const { pathname } = window.location

  const navigationsMap: { [key: string]: any } = {}

  // add all parent node
  routes.forEach((menu) => {
    if (!menu.menuParentId) {
      navigationsMap[menu.id] = { ...menu }
    }
  })

  // add children to node
  routes.forEach((menu) => {
    if (menu.menuParentId && menu.menuParentId !== '-1') {
      const parent = navigationsMap[menu.menuParentId]
      if (parent) {
        !parent.children && (parent.children = [])
        parent.children.push(menu)
      }
    }
  })

  const navigations = Object.values(navigationsMap)

  const selectedNav = routes.find((item) => item.route === pathname)

  return (
    <Sider width={256} collapsible trigger={null} breakpoint="xl" {...props}>
      <div className="flex flex-col h-screen">
        <div className="h-16  text-white flex items-center justify-center font-semibold">
          CoBank
        </div>

        <div className="flex-1 py-6 overflow-y-auto overflow-x-hidden app-sider-menu">
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedNav ? [selectedNav.id] : undefined}
            onClick={() =>
              props.onCollapse &&
              props.onCollapse(props.collapsed ? false : true, 'clickTrigger')
            }
            defaultOpenKeys={
              selectedNav && selectedNav.menuParentId
                ? [selectedNav.menuParentId]
                : undefined
            }
          >
            {navigations.map((nav) => {
              const { children } = nav

              // parent navigation
              if (!children) {
                return (
                  <Menu.Item key={nav.id} icon={<nav.icon />}>
                    <Link to={nav.route}>{nav.name}</Link>
                  </Menu.Item>
                )
              }

              // sub navigation
              return (
                <SubMenu key={nav.id} icon={<nav.icon />} title={nav.name}>
                  {children.map((sub: any) => (
                    <Menu.Item key={sub.id} icon={<sub.icon />}>
                      <Link to={sub.route}>{sub.name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            })}
          </Menu>
        </div>

        {!props.collapsed && (
          <div className="text-gray-500	h-16 flex items-center justify-center truncate">
            coBank Team @ 2021
          </div>
        )}
      </div>
    </Sider>
  )
}

export default Sidebar
