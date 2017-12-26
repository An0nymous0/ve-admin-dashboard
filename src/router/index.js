import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import MainLayout from '@/pages/layout/MainLayout'
import TableSample1 from '@/pages/TableSample1'
import RadarChar from '@/pages/char/Radar'
import BubbleChar from '@/pages/char/Bubble'

Vue.use(Router)
//  MenuSettings:
//    hidden:是否在左侧菜单显示,默认:false
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: MainLayout,
      MenuSettings: {hidden: true},
      redirect: '/welcome',
      children: [
        {path: 'welcome', component: Welcome, name: '欢迎页'}
      ]
    },
    {
      path: '/table',
      name: '表格1',
      component: MainLayout,
      children: [
        {path: 'tableSample1', name: '表格1-1', component: TableSample1},
        {path: 'tableSample2', name: '表格1-2', component: TableSample1},
      ]
    },
    {
      path: '/char',
      name: '图表',
      component: MainLayout,
      children: [
        {path: 'radar', component: RadarChar, name: '雷达图'},
        {path: 'bubble', component: BubbleChar, name: '气泡图'},
      ]
    },
    {path: '/login', component: Login, MenuSettings: {hidden: true}, name: '登录'},
    {path: '*', component: MainLayout, redirect: '/welcome',}
  ]
})
