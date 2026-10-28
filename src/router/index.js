import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/App.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { breadcrumb: 'Home' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { breadcrumb: 'About' }
      },
      {
        path: 'browse',
        name: 'browse',
        component: () => import('@/views/Browse.vue'),
        meta: { breadcrumb: 'Browse' },
        redirect: '/browse/events',
        children: [
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
            meta: { breadcrumb: 'Event List' }
          },
          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
            meta: { breadcrumb: 'Event Detail' }
          },
          // PENAMBAHAN RUTE BARU DARI MODUL 5
          {
            path: 'events/:id/register',
            name: 'event-registration',
            component: () => import('@/views/EventRegistration.vue'),
            meta: { breadcrumb: 'Register Event' }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
            meta: { breadcrumb: 'Category' }
          },
          // PENAMBAHAN RUTE BARU DARI MODUL 5
          {
            path: 'your-events',
            name: 'your-events',
            component: () => import('@/views/YourEvents.vue'),
            meta: { breadcrumb: 'Your Events' }
          },
          {
            path: 'your-events/:id',
            name: 'ticket-receipt',
            component: () => import('@/views/TicketReceipt.vue'),
            meta: { breadcrumb: 'Ticket Receipt' }
          }
        ]
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: { breadcrumb: 'Contact' }
      }
    ]
  },

  // Dashboard organizer: layout sendiri (Rail & Pane), tanpa Navbar publik
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'events', // relatif, TANPA garis miring di awal
        name: 'dashboard-events',
        component: () => import('@/views/EventManagement.vue'),
        meta: { breadcrumb: 'Event Management' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // PENAMBAHAN SCROLL BEHAVIOR DARI MODUL 5
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router