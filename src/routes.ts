import {
  UserOutlined,
  DashboardOutlined,
  GroupOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import Dashboard from 'components/Dashboard'

const routes = [
  {
    id: '1',
    icon: DashboardOutlined,
    name: 'Dashboard',
    route: '/',
    component: Dashboard,
  },

  {
    id: '2',
    icon: UserOutlined,
    name: 'User Managents',
  },
  {
    id: '21',
    breadcrumbParentId: '1',
    menuParentId: '2',
    route: '/users',
    component: Dashboard,
    icon: UnorderedListOutlined,
    name: 'User List',
  },
  {
    id: '22',
    route: '/users/:id',
    menuParentId: '-1',
    breadcrumbParentId: '21',
    component: Dashboard,
    name: 'User Detail',
  },
  {
    id: '23',
    route: '/users/statistic',
    breadcrumbParentId: '21',
    menuParentId: '2',
    component: Dashboard,
    icon: BarChartOutlined,
    name: 'Statistic',
  },

  {
    id: '3',
    route: '/settings',
    breadcrumbParentId: '1',
    component: Dashboard,
    icon: SettingOutlined,
    name: 'Settings',
  },

  {
    id: '4',
    icon: GroupOutlined,
    name: 'Groups',
  },
  {
    id: '41',
    route: '/groups',
    name: 'Group List',
    menuParentId: '4',
    breadcrumbParentId: '1',
    icon: GroupOutlined,
  },
  {
    id: '42',
    route: '/groups/import',
    name: 'Import Group',
    menuParentId: '4',
    breadcrumbParentId: '41',
    icon: GroupOutlined,
  },
]

export default routes
