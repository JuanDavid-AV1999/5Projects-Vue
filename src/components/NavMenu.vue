<script setup>
import { defineProps } from 'vue'
import MenuIcon from '@/assets/icons/MenuIcon.vue'

defineProps({
    onHandleClick: Function,
})

const w = '20px'
const h = '20px'
const f = 'black'
</script>

<template>
    <header>
        <nav class="nav-menu">
            <div class="btn-hamburger" @click="onHandleClick">
                <MenuIcon :width="w" :height="h" :fill="f" />
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.8);
}
header .nav-menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

header .nav-menu .btn-hamburger {
    width: 45px;
    height: 45px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

header .nav-menu .btn-hamburger:hover {
    background: #e2e2e2;
}
</style>
