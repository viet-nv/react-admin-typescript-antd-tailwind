import { SiderProps } from 'antd/lib/layout'
import { Layout, Menu } from 'antd'
import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

function Sidebar(props: SiderProps) {
  return (
    <Sider width={256} collapsible trigger={null} breakpoint="xl" {...props}>
      <div className="flex flex-col h-screen">
        <div className="h-16  text-white flex items-center justify-center font-semibold">
          CoBank
        </div>

        <div className="flex-1 py-6 overflow-y-auto overflow-x-hidden app-sider-menu">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
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
