<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>Weather Chikal</q-toolbar-title>
          <q-btn flat round dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="right" bordered>
        <q-list>
          <q-item to="/" exact clickable>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item to="/tasks" clickable>
            <q-item-section>Tasks</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
      
      <q-footer class="text-center">
        <q-toolbar>
          <q-toolbar-title>&copy; Chikal Verguson</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        leftDrawerOpen: false
      };
    }
  };
  </script>
  