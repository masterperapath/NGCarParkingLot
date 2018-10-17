import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Landing',
    //icon: 'nb-home',
    link: '/landing',
    
  },
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Profile',
    icon: 'nb-person',
    // link: '/pages/iot-dashboard',
  },
  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Menu หลัก'
    ,
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      // {
      //   title: 'cp001',
      //   link: '/pages/cp001',
      // },
      {
        title: 'เลือกระบบการจอง',
        link: '/pages/cp002',
      },
      {
        title: 'ทำการจองด้วยระบบGeneral',
        link: '/pages/cp003',
      },
      {
        title: 'ชำระเงิน',
        link: '/pages/cp004',
      },
      {
        title: 'ออกใบเสร็จ',
        link: '/pages/cp005',
      },
      // {
      //   title: 'cp006',
      //   link: '/pages/cp006',
      // },
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
