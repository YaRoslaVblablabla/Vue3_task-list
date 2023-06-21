<script setup>

let routes = [ 
  { name: 'Active', link: '/tasks'}, 
  { name: 'Complited', link: '/complited-tasks'},
  { name: 'Trash', link: '/deleted-tasks'},
]

</script>

<template>

  <div class="mx-auto flex justify-between  items-center mb-5 w-7/12  h-14 ">
    
    <div class="border-4 flex justify-start  rounded-lg  border-white w-96">
      <router-link v-for="route in routes"  active-class="bg-purple-950"
        class="text-white Sans-serif py-4 bg-green-900
          flex items-center justify-center  px-6 transition-colors 
          w-32 hover:bg-purple-950"
        :to="route.link">{{ route.name }}
      </router-link>
      
    </div>
    <div id="da"></div>
</div>

</template>

<style scoped>

</style>