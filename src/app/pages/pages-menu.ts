import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Landing',
    //icon: 'nb-home',
    link: '../landingPage/landing',
    
  },
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Menu1',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'cp001',
        link: '/pages/cp001',
      },
      {
        title: 'cp002',
        link: '/pages/cp002',
      },
      {
        title: 'cp003',
        link: '/pages/cp003',
      },
      {
        title: 'cp004',
        link: '/pages/cp004',
      },
      {
        title: 'cp005',
        link: '/pages/cp005',
      },
      {
        title: 'cp006',
        link: '/pages/cp006',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
