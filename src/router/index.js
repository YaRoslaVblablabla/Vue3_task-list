import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/TaskList.vue'
import ComplitedTasksList from '../components/ComplitedTasksList.vue'
import DeletedTasksList from '../components/DeletedTasksList.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/tasks', name: 'one', component: TaskList },
        { path: '/deleted-tasks', name: 'two', component: DeletedTasksList },
        { path: '/complited-tasks', name: 'three', component: ComplitedTasksList },
    ]
})

export default(router)