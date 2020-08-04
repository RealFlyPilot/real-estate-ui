import * as React from 'react'
import { Test } from './Components/Test'
import { StyleGuidePreview } from './Components/StyleGuidePreview'
import Dashboard from './Pages/Dashboard'
import { icons } from 'real-estate-ui'

const { RemoteIcon, MansanoryIcon, Heading1Icon, BookIcon } = icons
export const routes = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard // Dashboard
  },
  {
    name: 'Buttons',
    path: '/elements/buttons',
    component: Test // Buttons
  },
  {
    name: 'Alerts',
    path: '/elements/alerts',
    component: Test // Alerts
  },
  {
    name: 'Grid',
    path: '/elements/grid',
    component: Test // Grid
  },
  {
    name: 'Typography',
    path: '/elements/typography',
    component: Test // Typography
  },
  {
    name: 'Cards',
    path: '/elements/cards',
    component: Test // Cards
  },
  {
    name: 'Tabs',
    path: '/elements/tabs',
    component: Test // Tabs
  },
  {
    name: 'Tables',
    path: '/elements/tables',
    component: Test // Tables
  },
  {
    name: 'Progress Bars',
    path: '/elements/progressbars',
    component: Test // ProgressBars
  },
  {
    name: 'Pagination',
    path: '/elements/pagination',
    component: Test // PaginationPage
  },
  {
    name: 'Modals',
    path: '/elements/modals',
    component: Test // Modals
  },
  {
    name: 'Breadcrumbs',
    path: '/elements/breadcrumbs',
    component: Test // Breadcrumbs
  },
  {
    name: 'Forms',
    path: '/elements/forms',
    component: Test // Forms
  },
  {
    name: 'Loaders',
    path: '/elements/loaders',
    component: Test // Loaders
  },
  {
    name: 'Avatars',
    path: '/elements/avatars',
    component: Test // Avatars
  },
  {
    name: 'Blank',
    path: '/pages/blank',
    component: Test // BlankPage
  },
  {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: Test // SubNav
  },
  {
    name: '404',
    path: '/pages/404',
    component: Test // ErrorPage
  },
  {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Test // Analytics
  },
  {
    name: 'Activity Feed',
    path: '/apps/feed',
    component: Test // Feed
  },
  {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Test // Invoice
  },
  {
    name: 'Style Guide Generator',
    path: '/apps/styleguide-generator',
    component: StyleGuidePreview // CmsPage
  },
  {
    name: 'Widgets',
    path: '/widgets',
    component: Test // Widgets
  }
]

export const nav: any = [
  {
    name: 'Home',
    url: '/home',
    icon: <RemoteIcon />
  },
  {
    name: 'UI Elements',
    url: '/elements/ui',
    icon: <MansanoryIcon />
  },
  // {
  //   name: 'Buttons',
  //   url: '/elements/buttons',
  // },
  // {
  //   name: 'Grid',
  //   url: '/elements/grid',
  // },
  // {
  //   name: 'Alerts',
  //   url: '/elements/alerts',
  // },
  {
    name: 'Typography',
    url: '/elements/typography',
    icon: <Heading1Icon />
  },
  // {
  //   name: 'Cards',
  //   url: '/elements/cards',
  // },
  // {
  //   name: 'Tabs',
  //   url: '/elements/tabs',
  // },
  // {
  //   name: 'Tables',
  //   url: '/elements/tables',
  // },
  // {
  //   name: 'Breadcrumbs',
  //   url: '/elements/breadcrumbs',
  // },

  // {
  //   name: 'Activity Feed',
  //   url: '/apps/feed',
  // },
  {
    name: 'Style Guide Generator',
    url: '/apps/styleguide-generator',
    icon: <BookIcon />
  }
]
