<script setup>
import { useTaskStore } from '../stores/TaskStore'
import { dateProcessor } from '../functions/index.js'

let store = useTaskStore()

</script>

<template>
    <transition-group name='task-list'>
        <div 
            v-for="task in store.getComplitedTasks"
            class='mx-auto relative flex items-center 
            justify-between my-5 p-5 border-black border-4 
            bg-yellow-600 w-7/12'
        >   
            <div>
                <p class="text-2xl">{{ task.title }}</p>
                <p>Importance: {{ task.importance }}/5 <span class="ml-3">deadline: {{ dateProcessor(task.deadline) }}</span></p>
            </div>    
            <button class="bg-green-700 py-2 px-3 
                rounded-lg border-2 border-black 
                hover:bg-green-500 transition-colors" 
                @click="store.makeActive(task.id)"
            >
                make active
            </button>
            <p class="absolute bottom-1 left-5 text-xs"><span class="mr-8" v-if="task.changed">changed</span><span v-if="new Date(task.deadline).toDateString() <= new Date().toDateString()">completed on time</span></p>
            
        </div>
    </transition-group>
    
    <teleport to="#da">
        <div 
            @click="store.makeAllActive" 
            class="bg-yellow-600 border-4 border-black
            py-2 px-4 rounded-xl hover:bg-yellow-500 cursor-pointer"
        >
            make all active
        </div>
    </teleport>
</template>

<style>

</style>