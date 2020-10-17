// import { Home, Profile, Contact, Login, ProfileId } from '../pages';

// const routes = [
//   {
//     path: '/profile/:profileId',
//     component: ProfileId,
//     isPublic: false,
//   },
//   {
//     path: '/profile',
//     component: Profile,
//     isPublic: false,
//   },
//   {
//     path: '/contact',
//     component: Contact,
//     isPublic: true,
//   },
//   {
//     path: '/home',
//     component: Home,
//     isPublic: true,
//   },
//   {
//     path: '/login',
//     component: Login,
//     isPublic: true,
//   },

//   {
//     path: '/',
//     component: Home,
//     isPublic: true,
//   },
// ];

// export default routes;

import {
  HomePage,
  AboutPage,
  ContactPage,
  PortfolioPage,
  DetailPortfolioPage,
} from '../pages/index';

const routes = [
  {
    path: '/about',
    component: AboutPage,
    isPublic: true,
  },
  {
    path: '/contact',
    component: ContactPage,
    isPublic: true,
  },
  {
    path: '/portfolio/:id',
    component: DetailPortfolioPage,
    isPublic: true,
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
    isPublic: true,
  },
  {
    path: '/',
    component: HomePage,
    isPublic: true,
  },
];

export default routes;
