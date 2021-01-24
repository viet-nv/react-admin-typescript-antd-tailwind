import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Avatar, Layout, Menu } from 'antd'

const { Header } = Layout
const { SubMenu } = Menu

function AppHeader({
  collapsed,
  toggleCollapse,
}: {
  collapsed: boolean
  toggleCollapse: () => void
}) {
  const handleClickMenu = () => {
    console.warn('Empty handleClickMenu')
  }

  return (
    <Header className="sticky top-0 shadow-md bg-white px-0 flex justify-between">
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
  )
}

export default AppHeader
