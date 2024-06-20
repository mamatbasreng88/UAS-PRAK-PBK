import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../pages/Home.vue';
import Tasks from '../pages/Tasks.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'tasks', component: Tasks },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
