import {
  UserOutlined,
  DashboardOutlined,
  GroupOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import Dashboard from 'components/Dashboard'
import { Route } from 'types'

const routes: Route[] = [
  {
    id: '1',
    icon: DashboardOutlined,
    name: 'Dashboard',
    path: '/',
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
    path: '/users',
    component: Dashboard,
    icon: UnorderedListOutlined,
    name: 'User List',
  },
  {
    id: '22',
    path: '/users/:id',
    menuParentId: '-1',
    breadcrumbParentId: '21',
    component: Dashboard,
    name: 'User Detail',
  },
  {
    id: '23',
    path: '/users/statistic',
    breadcrumbParentId: '21',
    menuParentId: '2',
    component: Dashboard,
    icon: BarChartOutlined,
    name: 'Statistic',
  },

  {
    id: '3',
    path: '/settings',
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
    path: '/groups',
    name: 'Group List',
    menuParentId: '4',
    breadcrumbParentId: '1',
    icon: GroupOutlined,
    component: Dashboard,
  },
  {
    id: '42',
    path: '/groups/import',
    name: 'Import Group',
    menuParentId: '4',
    breadcrumbParentId: '41',
    icon: GroupOutlined,
    component: Dashboard,
  },
]

export default routes
