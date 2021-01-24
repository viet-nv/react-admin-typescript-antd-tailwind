import { Drawer, Layout } from 'antd'
import React, { useState } from 'react'
import useWindowSize from 'hooks/useWindowSize'
import { Content, Header, Sidebar } from 'components/Layout'

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

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
          <Sidebar
            isMobile={isMoblie}
            collapsed={false}
            onCollapse={toggleCollapse}
          />
        </Drawer>
      ) : (
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} />
      )}

      <Layout>
        <Header toggleCollapse={toggleCollapse} collapsed={collapsed} />
        <Content />
      </Layout>
    </Layout>
  )
}

export default AdminLayout
