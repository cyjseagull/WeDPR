import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: {
      title: '用户登录',
      requireAuth: false,
      permissionCheck: false,
      isParent: true
    }
  },
  {
    path: '/register',
    name: '/register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/index.vue'),
    meta: {
      title: '用户注册',
      requireAuth: false,
      permissionCheck: false,
      isParent: true
    }
  },
  {
    path: '/noPermission',
    component: () => import(/* webpackChunkName: "noPermission" */ '../views/noPermission/index.vue'),
    meta: {
      title: '暂无权限',
      requireAuth: false,
      permissionCheck: false,
      isParent: true
    }
  },
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '',
      requireAuth: false,
      permissionCheck: false,
      isParent: true
    }
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/tenantManage',
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: {
          title: '平台首页',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['home']
        }
      },
      {
        name: 'tenantManage',
        path: '/tenantManage',
        component: () => import(/* webpackChunkName: "tenantManage" */ '@/views/tenantManage/index.vue'),
        meta: {
          title: '用户管理',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['tenantManage']
        }
      },
      {
        name: 'accountManage',
        path: '/accountManage',
        component: () => import(/* webpackChunkName: "accountManage" */ '@/views/accountManage/index.vue'),
        meta: {
          title: '管理用户组',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['accountManage']
        }
      },
      {
        name: 'dataManage',
        path: '/dataManage',
        component: () => import(/* webpackChunkName: "dataManage" */ '@/views/dataManage/index.vue'),
        meta: {
          title: '数据资源',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'dataCreate',
        path: '/dataCreate',
        component: () => import(/* webpackChunkName: "dataCreate" */ '@/views/dataCreate/index.vue'),
        meta: {
          title: '新增数据资源',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'dataApply',
        path: '/dataApply',
        component: () => import(/* webpackChunkName: "dataApply" */ '@/views/dataApply/index.vue'),
        meta: {
          title: '申请使用',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'dataApplyModify',
        path: '/dataApplyModify',
        component: () => import(/* webpackChunkName: "dataApplyModify" */ '@/views/dataApplyModify/index.vue'),
        meta: {
          title: '申请使用',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'dataDetail',
        path: '/dataDetail',
        component: () => import(/* webpackChunkName: "dataDetail" */ '@/views/dataDetail/index.vue'),
        meta: {
          title: '数据详情',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'modifyData',
        path: '/modifyData',
        component: () => import(/* webpackChunkName: "modifyData" */ '@/views/modifyData/index.vue'),
        meta: {
          title: 'modifyData',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['dataManage']
        }
      },
      {
        name: 'projectManage',
        path: '/projectManage',
        component: () => import(/* webpackChunkName: "projectManage" */ '@/views/projectManage/index.vue'),
        meta: {
          title: '项目空间',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'projectCreate',
        path: '/projectCreate',
        component: () => import(/* webpackChunkName: "projectCreate" */ '@/views/projectCreate/index.vue'),
        meta: {
          title: '新增项目',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'projectEdit',
        path: '/projectEdit',
        component: () => import(/* webpackChunkName: "projectEdit" */ '@/views/projectEdit/index.vue'),
        meta: {
          title: '编辑项目',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'projectDetail',
        path: '/projectDetail',
        component: () => import(/* webpackChunkName: "projectDetail" */ '@/views/projectDetail/index.vue'),
        meta: {
          title: '项目详情',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'jobDetail',
        path: '/jobDetail',
        component: () => import(/* webpackChunkName: "jobDetail" */ '@/views/jobDetail/index.vue'),
        meta: {
          title: '任务详情',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'leadMode',
        path: '/leadMode',
        component: () => import(/* webpackChunkName: "leadMode" */ '@/views/leadMode/index.vue'),
        meta: {
          title: '新增项目',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'resetParams',
        path: '/resetParams',
        component: () => import(/* webpackChunkName: "resetParams" */ '@/views/resetParams/index.vue'),
        meta: {
          title: '调参重跑',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['projectManage']
        }
      },
      {
        name: 'messageManage',
        path: '/messageManage',
        component: () => import(/* webpackChunkName: "messageManage" */ '@/views/messageManage/index.vue'),
        meta: {
          title: '消息通知',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['messageManage']
        }
      },
      {
        name: 'logManage',
        path: '/logManage',
        component: () => import(/* webpackChunkName: "logManage" */ '@/views/logManage/index.vue'),
        meta: {
          title: '日志审计',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['logManage']
        }
      },
      {
        name: 'approveManage',
        path: '/approveManage',
        component: () => import(/* webpackChunkName: "approveManage" */ '@/views/approveManage/index.vue'),
        meta: {
          title: '审批中心',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['approveManage']
        }
      },
      {
        name: 'approveDetail',
        path: '/approveDetail',
        component: () => import(/* webpackChunkName: "approveDetail" */ '@/views/approveDetail/index.vue'),
        meta: {
          title: '审批详情',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['approveManage']
        }
      },
      {
        name: 'serverManage',
        path: '/serverManage',
        component: () => import(/* webpackChunkName: "serverManage" */ '@/views/serverManage/index.vue'),
        meta: {
          title: '服务发布',
          isParent: true,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['serverManage']
        }
      },
      {
        name: 'serverCreate',
        path: '/serverCreate',
        component: () => import(/* webpackChunkName: "serverCreate" */ '@/views/serverCreate/index.vue'),
        meta: {
          title: '服务发布',
          isParent: false,
          requireAuth: true,
          permissionCheck: true,
          permissionNeed: ['serverManage']
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
