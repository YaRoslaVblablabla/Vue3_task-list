<script setup>

import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()

let title = ref('')
let deadline = ref('')
let search = ref('')
let select = ref(false)

let range = ref({
    min: 1,
    max: 5,
    current: 1
})

let sort = [
    { title: 'Default', value: false },
    { title: 'Deadline', value: 'deadline' },
    { title: 'Importance', value: 'importance' }
]

function addTask(){

    let task = {
        id: Date.now(), 
        title: title.value.trim(),
        importance: range.value.current,
        deadline: deadline.value,
        status: 'active'
    }

    task.title !== '' ? store.addTask(task) : false
    
    title.value = deadline.value = ''
    range.value.current = 1
}

</script>

<template>
    <div class='
        mx-auto shadow-2xl relative my-5 p-5 
        rounded-lg border-4 bg-green-900 border-white-900 w-3/4'
    >
        <h2 class="text-center text-white text-3xl">Create Task</h2>
        
        <form @submit.prevent>
            <div class="mb-3">
                <label class="text-white text-xl">Title</label><br>
                <input 
                    v-model="title" 
                    type="text" 
                    class="mt-2 rounded-xl py-1 px-2"
                >
            </div>

            <div class="mb-3">
                <label class="text-white text-xl">Deadline</label><br>
                <input 
                    v-model="deadline" 
                    type="date" 
                    class="mt-2 w-40 rounded-md py-1 px-1"
                >
            </div>

            <div class="mb-3 text-white ">
                <label class="text-xl mr-5">Importance</label><br>
                <input 
                    type="range" 
                    class=""
                    v-model="range.current" 
                    :min="range.min" 
                    :max="range.max"                    
                >
                {{ range.current }}/{{ range.max }}
            </div>

            <button 
                type="submit" 
                @click='addTask'  
                class='bg-purple-950 border-4 transition-colors hover:bg-purple-700
                border-white-900 border-white mt-5 text-white py-2 block px-14 rounded-xl'
            >   
                Create task
            </button>
            
            <div class="absolute rounded-lg right-10 top-20 bg-purple-950 border-4 border-white p-4">
                <label class="text-white">Search</label><br>
                <input 
                    @input="store.changeSearch(search)" 
                    v-model="search" 
                    class="mt-2 mb-3 rounded-xl py-1 px-3" 
                    type="text"
                ><br>
        
                <label class="text-white">Sort</label><br>
                <select 
                    v-model="select"  
                    @change="store.changeSelect(select)" 
                    class="mt-2 rounded-t-md py-2 px-2 bg-green-900 border-2
                    border-white text-white"
                >
                    <option 
                        class="border-2 border-white p-2" 
                        :value="item.value" 
                        :key='item.value'
                        v-for="item in sort"
                    >
                        {{ item.title }}
                    </option>
                </select>

            </div>

        </form>
    </div>
</template>

<style>

</style>