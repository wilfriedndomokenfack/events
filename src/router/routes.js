
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: "home",
        component: () => import('pages/Index.vue')
      },
      {
        path: "/newEvent",
        name: 'newEvent',
        meta: { breadcrumb: 'Create a new Event' },
        component: () => import('pages/events/NewEvent.vue'),
      },
      {
        path: ":event_id/edit",
        name: 'editEvent',
        meta: { breadcrumb: 'Edit a Event' },
        component: () => import('pages/events/EditEvent.vue'),
      },
      {
        path: "/login",
        name: "login",
        meta: {
          requireAuth: false,
          breadcrumb: 'loginPage'
        },
        component: () => import("pages/LoginPage.vue")
      },
      {
        path: "/registrazione",
        name: "registrazione",
        meta: {
          requireAuth: false,
          breadcrumb: 'RegistrationPage'
        },
        component: () => import("pages/RegistrationPage.vue")
      },
      {
        path: "/users/:tokenDatas",
        name: 'confirmation',
        component: () => import('pages/user/EmailConfirmationPage.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
