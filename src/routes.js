import { HomeOutline as HomeIcon, AppsOutline as AppsIcon, LinkOutline as LinkIcon } from '@vicons/ionicons5'

import Layout from './layout/index.vue'

const routes = [
  { path: '/404', component: () => import('./views/404.vue'), hidden: true },
  { path: '/login', component: () => import('./views/login.vue'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('./views/home/home.vue'),
        name: 'home',
        label: '首页',
        key: 'home',
        icon: HomeIcon
      }
    ]
  },
  {
    path: '/examples',
    component: Layout,
    label: '示例',
    key: 'examples',
    name: 'examples',
    icon: AppsIcon,
    children: [
      {
        path: '/table', component: () => import('./views/table/table.vue'),
        name: 'table',
        key: 'table',
        label: '表格'
      },
      {
        path: '/list', component: () => import('./views/home/home.vue'),
        name: 'list',
        key: 'list',
        label: '表单'
      },
      {
        path: '/other', component: () => import('./views/home/home.vue'),
        name: 'other',
        key: 'other',
        label: '其他'
      },
    ]
  }
]
export default routes