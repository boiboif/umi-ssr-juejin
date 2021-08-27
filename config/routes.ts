import type { IRoute } from 'umi';

export interface MyRoute extends IRoute {
  hidden?: boolean;
  order?: number;
}

const routes: MyRoute[] = [
  {
    path: '/',
    component: '@/Layout',
    routes: [
      {
        path: '/pins',
        title: '沸点',
        component: '@/pages/pins',
        order: 1,
      },
      {
        path: '/creator',
        component: '@/pages/creator',
        wrappers: ['@/wrappers/auth'],
        hidden: true,
      },
      {
        path: '/writeArticle',
        component: '@/pages/writeArticle',
        wrappers: ['@/wrappers/auth'],
        hidden: true,
      },
      {
        path: '/',
        component: '@/pages/index/index',
        title: '首页',
        order: 0,
        routes: [
          {
            path: '/',
            component: '@/pages/index/recommend',
            title: '推荐',
            hidden: true,
          },
          {
            path: '/recommend',
            component: '@/pages/index/recommend',
            title: '推荐',
          },
          {
            path: '/frontend',
            component: '@/pages/index/frontend',
            title: '前端',
          },
          {
            path: '/backend',
            component: '@/pages/index/backend',
            title: '后端',
          },
        ],
      },
    ],
  },
];

export default routes;
