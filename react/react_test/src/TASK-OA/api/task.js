import http from './http'

const taskAPI = {
    getTaskList(state = 0){
        return http.get('/getTaskList',{
            params:{
                state
            }
        })
    },

    addTask(task,time){
        return http.post('/addTask',{
            task,time
        })
    },

    removeTask(id){
        return http.get('/removeTask',{
            params:{
                id
            }
        })
    },

    completeTask(id){
        return http.get('/completeTask',{
            params:{
                id
            }
        })
    }
}
export default taskAPI
