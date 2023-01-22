<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    isOpen: Boolean,
})

const routes = reactive([
    { path: '/tags-project', link: 'Tags' },
    { path: '/drag-drop-project', link: 'Drag And Drop' },
])
</script>

<template>
    <div class="sidebar-menu" :style="{ left: isOpen ? 0 : '-240px' }">
        <h1 class="sidebar-title">Sidebar</h1>
        <router-link
            v-for="(route, key) in routes"
            :key="key"
            :to="route.path"
            class="sidebar-link"
            active-class="active"
            >{{ route.link }}</router-link
        >
    </div>
</template>

<style scoped>
.sidebar-menu {
    width: 240px;
    height: 100%;
    position: absolute;
    top: 0;
    background: #222222;
    transition: all 0.5s ease;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.sidebar-menu .sidebar-title {
    text-align: center;
    padding: 15px;
    color: #ffffff;
    margin-bottom: 20px;
}

.sidebar-menu .sidebar-link {
    color: #ffffff;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;
    padding: 15px 25px;
    position: relative;
}

.sidebar-menu .sidebar-link::before {
    content: "";
    width: 6px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #005774;
    display: none;
}

.sidebar-menu .sidebar-link.active {
    background: #6b6b6b;
}

.sidebar-menu .sidebar-link.active::before, .sidebar-menu .sidebar-link:hover::before {
    display: block;
}


.sidebar-menu .sidebar-link:hover {
    background: #6b6b6b;
}
</style>
