<script setup>
import SideBar from '@/components/SideBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import { ref } from 'vue'

const sidebarOpen = ref(false)

const handleClick = () => {
    sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
    <NavMenu :onHandleClick="handleClick" />
    <SideBar :isOpen="sidebarOpen" />
    <main class="container">
        <RouterView />
    </main>
</template>

<style scoped>
.container {
    width: 100%;
    height: calc(100vh - 50px);
    position: relative;
}
</style>
