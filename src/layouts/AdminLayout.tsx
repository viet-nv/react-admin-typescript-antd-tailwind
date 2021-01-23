import { Avatar, Drawer, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import useWindowSize from 'hooks/useWindowSize'
import { Sidebar } from 'components/Layout'

const { Header, Content } = Layout
const { SubMenu } = Menu

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  const handleClickMenu = ({ key }: any) => {
    console.log(key)
  }

  return (
    <Layout className="h-screen">
      {isMoblie ? (
        <Drawer
          maskClosable
          closable={false}
          onClose={toggleCollapse}
          visible={!collapsed}
          placement="left"
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar collapsed={false} />
        </Drawer>
      ) : (
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} />
      )}

      <Layout>
        <Header className="sticky top-0 border-b bg-white px-0 flex justify-between">
          <div
            role="button"
            className="w-16 text-center cursor-pointer hover:bg-gray-200 text-blue-500 duration-300"
            onClick={toggleCollapse}
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="text-lg" />
            ) : (
              <MenuFoldOutlined className="text-lg" />
            )}
          </div>
          <div className="overflow-hidden">
            <Menu key="user" mode="horizontal" onClick={handleClickMenu}>
              <SubMenu
                title={
                  <>
                    <span style={{ color: '#999', marginRight: 4 }}>Hi,</span>
                    <span>Soleil</span>
                    <Avatar
                      style={{ marginLeft: 8 }}
                      src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-9/138399758_1897937860375528_7226162987715132143_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=-bGj0r_lQZwAX-T7qqk&_nc_ht=scontent.fhan5-4.fna&oh=b94c0dc3731432702fa2ee28fca32624&oe=60317D50"
                    />
                  </>
                }
              >
                <Menu.Item key="SignOut">Sign out</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Header>
        <div className="px-4 py-6 overflow-auto">
          <Content className="bg-white">
            <div style={{ height: '1000px' }} />
          </Content>
        </div>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
