import Vue from 'vue'
import Router from 'vue-router'
import Container from '@view/home/Container'
Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * 固定路由
 * 一些不需要权限的静态路由机制
 * 任何角色视觉一致
 */
export const constantRoutes = [
    {
        path: '/',
        component: Container,
        redirect: '/',
        children: [
            {
                path: '/',
                component: () => import('@view/home/Container'),
                name: '首页',
                meta: { title: '首页', icon: 'home', affix: true }
            }
        ]
    },
    {
        path: '/about',
        component: () => import('@view/about/About'),
        hidden: true
    },
    {
        path: '/index',
        component: () => import('@view/welcome/Welcome'),
        hidden: true
    },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
/* export const asyncRoutes = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: '权限',
        meta: {
            title: '权限',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
            {
                path: 'page',
                component: () => import('@/views/permission/page'),
                name: '页面权限',
                meta: {
                    title: '页面权限',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: () => import('@/views/permission/directive'),
                name: '指令权限',
                meta: {
                    title: '指令权限'
                    // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'role',
                component: () => import('@/views/permission/role'),
                name: '角色权限',
                meta: {
                    title: '角色权限',
                    roles: ['admin']
                }
            }
        ]
    },

    {
        path: '/icon',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/icons/index'),
                name: '图标',
                meta: { title: '图标', icon: 'icon', noCache: true }
            }
        ]
    },

    componentsRouter,
    chartsRouter,
    nestedRouter,
    tableRouter,

    {
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: '示例',
        meta: {
            title: '示例',
            icon: 'example'
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/example/create'),
                name: '创建文章',
                meta: { title: '创建文章', icon: 'edit' }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/example/edit'),
                name: '编辑文章',
                meta: { title: '编辑文章', noCache: true, activeMenu: '/example/list' },
                hidden: true
            },
            {
                path: 'list',
                component: () => import('@/views/example/list'),
                name: '文章列表',
                meta: { title: '文章列表', icon: 'list' }
            }
        ]
    },

    {
        path: '/tab',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/tab/index'),
                name: '选项卡',
                meta: { title: '选项卡', icon: 'tab' }
            }
        ]
    },

    {
        path: '/error',
        component: Layout,
        redirect: 'noRedirect',
        name: '错误页面',
        meta: {
            title: '错误页面',
            icon: '404'
        },
        children: [
            {
                path: '401',
                component: () => import('@/views/error-page/401'),
                name: '401页面',
                meta: { title: '401', noCache: true }
            },
            {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: '404页面',
                meta: { title: '404', noCache: true }
            }
        ]
    },

    {
        path: '/error-log',
        component: Layout,
        children: [
            {
                path: 'log',
                component: () => import('@/views/error-log/index'),
                name: '错误日志',
                meta: { title: '错误日志', icon: 'bug' }
            }
        ]
    },

    {
        path: '/excel',
        component: Layout,
        redirect: '/excel/export-excel',
        name: '导出',
        meta: {
            title: '导出',
            icon: 'excel'
        },
        children: [
            {
                path: 'export-excel',
                component: () => import('@/views/excel/export-excel'),
                name: '全部导出',
                meta: { title: '全部导出' }
            },
            {
                path: 'export-selected-excel',
                component: () => import('@/views/excel/select-excel'),
                name: '选中导出',
                meta: { title: '选中导出' }
            },
            {
                path: 'export-merge-header',
                component: () => import('@/views/excel/merge-header'),
                name: '组合头导出',
                meta: { title: '组合头导出' }
            },
            {
                path: 'upload-excel',
                component: () => import('@/views/excel/upload-excel'),
                name: '上传Excel',
                meta: { title: '上传Excel' }
            }
        ]
    },

    {
        path: '/zip',
        component: Layout,
        redirect: '/zip/download',
        alwaysShow: true,
        name: 'Zip',
        meta: { title: 'Zip', icon: 'zip' },
        children: [
            {
                path: 'download',
                component: () => import('@/views/zip/index'),
                name: '导出压缩示例',
                meta: { title: '导出压缩示例' }
            }
        ]
    },

    {
        path: '/pdf',
        component: Layout,
        redirect: '/pdf/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/pdf/index'),
                name: 'PDF',
                meta: { title: 'PDF', icon: 'pdf' }
            }
        ]
    },
    {
        path: '/pdf/download',
        component: () => import('@/views/pdf/download'),
        hidden: true
    },

    {
        path: '/theme',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/theme/index'),
                name: '主题',
                meta: { title: '主题', icon: 'theme' }
            }
        ]
    },

    {
        path: '/clipboard',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/clipboard/index'),
                name: '剪切板',
                meta: { title: '剪切板', icon: 'clipboard' }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]
 */
const createRouter = () => new Router({
    mode: 'history', // require service support
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
