import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore', {
    state: () => ({
        tasks:[
            {id: 1, title: 'task 1', importance: 3, deadline: '2023-08-13',  status: 'active', changed: false},
            {id: 7, title: 'task 2', importance: 3, deadline: '2023-08-17',  status: 'active', changed: false},
            {id: 8, title: 'task 3', importance: 4, deadline: '2023-08-27',  status: 'active', changed: false},
            {id: 2, title: 'task 4', importance: 2, deadline: '2023-09-26', status: 'complite', changed: false},
            {id: 3, title: 'task 5', importance: 4, deadline: '2023-10-29', status: 'delete', changed: false},
            {id: 4, title: 'task 6', importance: 5 , deadline: '2023-11-09', status: 'active', changed: false},
            {id: 5, title: 'task 7', importance: 5, deadline: '2023-12-31', status: 'complite', changed: true},
            {id: 6, title: 'task 8', importance: 2, deadline: '2023-12-31', status: 'delete', changed: false},
            
        ],

        search: '',
        select: false,
    }),
    
    getters: {
        getTasks(){
            return this.tasks.filter(task => task.status === 'active')
        },

        getComplitedTasks(){
            return this.tasks.filter(task => task.status === 'complite')
        },

        getDeletedTasks(){
            return this.tasks.filter(task => task.status === 'delete')
        },

        searchTask(){
            return this.sortTasks.filter(task => task.title.toLowerCase().includes(this.search.toLowerCase()))
        },

        sortTasks(){
            if(this.select == 'deadline'){
                return [...this.getTasks].sort((a, b) =>  {
                    a.deadline > b.deadline ? 1 : -1
                })
                
              } else if(this.select == 'importance') {
                return [...this.getTasks].sort((a, b) => a.importance < b.importance ? 1 : -1)
              } else {
                return this.getTasks
              }
        }

    },

    actions: {
        addTask(task) {
          this.tasks.push(task)
        },

        compliteTask(id){
          const task = this.tasks.find(t => t.id === id)
          task.status = 'complite' 
        },

        deleteTask(id){
            const task = this.tasks.find(t => t.id === id)
            task.status = 'delete' 
        },

        makeActive(id){
            const task = this.tasks.find(t => t.id === id)
            task.status = 'active' 
        },

        changeSearch(data){
            this.search = data
        },

        changeSelect(data){
            this.select = data
        },

        updateTask(task){
            this.tasks.forEach(item => {
                if(item.id == task.id) {
                    item.title = task.title
                    item.importance = task.importance
                    item.deadline = task.deadline
                    item.changed = true
                }           
            })
        },

        clearTrash(){
            this.tasks = this.tasks.filter(el => el.status != 'delete')
        },

        makeAllActive(){
            this.tasks.forEach(el => {
                el.status === 'complite' ? el.status = 'active' : false
            })
        }
    }
})