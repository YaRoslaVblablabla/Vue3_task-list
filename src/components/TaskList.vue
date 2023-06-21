<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import { dateProcessor } from '../functions/index.js'
import ModalWindow from './ModalWindow.vue'

const store = useTaskStore()

let modal =ref(false)

let editTask = ref(null)

console.log()

function onpenModal(task){
    modal.value = true
    console.log(task)
    editTask.value = Object.assign({},  task)
}

function updateTask(data){
    console.log(data)
    store.updateTask(data)
    modal.value = false
}

</script>

<template>

<transition-group name='task-list'>
    <div 
        v-for="task in store.searchTask"  
        :key='task.id'
        class='
            mx-auto my-5 p-5 border-4 items-center flex 
            justify-between border-white-900 w-7/12
            bg-blue-950 text-white relative'
    >
        <div>
            <p class="text-2xl">{{ task.title }}</p>
            <p>Importance: {{ task.importance }}/5 <span class="ml-3">deadline: {{ dateProcessor(task.deadline) }}</span></p>
        </div>

        <div class="font-mono text-6xl">
            <button class="text-green-600 transition-colors hover:text-green-800" @click="store.compliteTask(task.id)">&#10004;</button>
            <button class="text-yellow-600 mx-2 transition-colors hover:text-yellow-800" @click="onpenModal(task)">&#9998;</button>
            <button class="text-red-600 transition-colors hover:text-red-800" @click="store.deleteTask(task.id)">&#10006;</button>
        </div>
        
        <p v-if="task.changed" class="absolute bottom-1 left-5 text-white text-xs">changed</p>
    </div>
</transition-group>

<ModalWindow 
    :editTask="editTask" 
    :modal="modal"
    @updateTask="updateTask"
/>
    
</template>

<style>

.task-list-item {
  display: inline-block;
  margin-right: 10px;
}
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translatex(250px);
}
</style>