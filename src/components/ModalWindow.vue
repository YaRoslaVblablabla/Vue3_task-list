<script setup>

defineProps({
    modal: {
        type: Boolean,
    },
    editTask:{
        type: Object,
        required: true
    }
})

</script>

<template>

<div v-if="modal" class="bg-gray-950 transition-opacity bg-opacity-50 fixed inset-0" >
        <div class="mx-auto my-14 relative px-5 py-5 w-2/3 transition-opacity bg-green-950 border-4 border-white">
            <h2 class="text-3xl mb-5 text-center  text-white">Edit Task</h2>
            
            <form @submit.prevent>
                <label class="text-white">new title</label><br>
                <input 
                    class="mt-2 mb-3 rounded-xl py-1 px-3" 
                    type="text" 
                    v-model="editTask.title"
                ><br>
                
                <label class="text-white">range</label><br>
                <input 
                    class="mt-2 mb-3 mr-2" type="range"
                    min="1"
                    max="5"
                    v-model="editTask.importance"
                ><span class="text-white">{{ editTask.importance }}/5</span><br>

                <label class="text-white">deadline</label><br>
                <input 
                    class="mt-2 mb-3 w-40 rounded-md py-1 px-1" 
                    type="date" 
                    v-model="editTask.deadline"
                ><br>

                <button type="submit" @click="$emit('updateTask', editTask)"
                    class='bg-purple-950 border-4 transition-colors hover:bg-purple-700
                    border-white-900 border-white mt-5
                    text-white py-2 block px-10 rounded-xl
                    mx-auto'
                >   
                    Update task
                </button>
            </form>

            <span 
                @click="modal = false" 
                class="text-white font-mono hover:text-red-700 
                cursor-pointer absolute top-3 
                right-5 text-5xl transition-colors"
            >
                &#10006;
            </span>

        </div>
    </div>

</template>

<style>
</style>