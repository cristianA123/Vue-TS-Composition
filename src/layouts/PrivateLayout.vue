<template>
  <div class="flex h-screen">
    <SideBar class="w-64 p-4"/>
    <!-- <font-awesome icon="fa-solid fa-user-secret" />
    <font-awesome icon="fa-solid fa-users" />
    <font-awesome icon="fa-solid fa-plus" />
    <font-awesome icon="fa-solid fa-download" />
    <font-awesome icon="fa-solid fa-search" />
    <font-awesome icon="fa-solid fa-suitcase" />
    <font-awesome icon="fa-solid fa-eye" />
    <font-awesome icon="fa-solid fa-pencil" />
    <font-awesome icon="fa-solid fa-trash" /> -->
   

    <main class="flex-1 bg-c_gray px-2">
      <NavBar class="bg-white p-4"/>
      <router-view></router-view>
    </main>
  </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from './../ui/NavBar.vue'
import SideBar from './../ui/SideBar.vue'

export default defineComponent({
    name: 'PrivateLayout',
    components: {
        NavBar,
        SideBar
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>