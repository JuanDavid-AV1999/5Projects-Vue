<script setup>
import { reactive } from 'vue'

const boards = reactive([
    {
        id: crypto.randomUUID(),
        name: 'Tablero 1',
        items: [
            {
                id: crypto.randomUUID(),
                title: 'Feature de archivos',
            },
        ],
        items: [
            {
                id: crypto.randomUUID(),
                title: 'Resolver bug',
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        name: 'Tablero 2',
        items: [
            {
                id: crypto.randomUUID(),
                title: 'Mandar reporte',
            },
        ],
        items: [
            {
                id: crypto.randomUUID(),
                title: 'Code review',
            },
        ],
    },
])
</script>

<template>
    <div class="todo-container">
        <button class="create-btn">Crear tablero</button>
    </div>
</template>

<style scoped>
.todo-container {
    width: 100%;
    padding: 30px;
}

.todo-container .create-btn {
    padding: 20px;
    border: none;
    border-radius: 8px;
    background: #005558;
    cursor: pointer;
    color: #ffffff;
}

.todo-container .create-btn:hover {
    opacity: 0.9;
}

</style>
