import { createRouter, createWebHistory } from 'vue-router'
import ProjectTags from '../pages/ProjectTags.vue'
import DragDrop from '../pages/DragDrop.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/tags-project',
            name: 'TagsProject',
            component: ProjectTags,
        },
        {
            path: '/drag-drop-project',
            name: 'DragDropProject',
            component: DragDrop,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
})

export default router
