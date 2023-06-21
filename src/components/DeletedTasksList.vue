<script setup>
import { useTaskStore } from '../stores/TaskStore'
import { dateProcessor } from '../functions/index.js'

let store = useTaskStore()
</script>

<template>
        <transition-group name='task-list'>
        <div v-for="task in store.getDeletedTasks"
            class='mx-auto relative flex items-center justify-between my-5 p-5 border-4 bg-red-950 text-white border-white w-7/12'
            
        >
            <div>
                <p class="text-2xl">{{ task.title }}</p>
                <p>Importance: {{ task.importance }}/5 <span class="ml-3">deadline: {{ dateProcessor(task.deadline) }}</span></p>
            </div>   

            <button class="bg-green-900 py-2 px-3 
                rounded-lg border-2 text-white border-white 
                hover:bg-green-500 transition-colors"  @click="store.makeActive(task.id)"
            >
                make active
            </button>
            <p v-if="task.changed" class="absolute text-white bottom-1 left-5 text-xs">changed</p>
        </div>
    </transition-group>
    
    <teleport  to="#da"><div @click="store.clearTrash" class="bg-red-950 border-4 border-white text-white
        py-2 px-4 rounded-xl hover:bg-red-800 cursor-pointer">clear trash</div>
    </teleport>
</template>

<style>

</style>