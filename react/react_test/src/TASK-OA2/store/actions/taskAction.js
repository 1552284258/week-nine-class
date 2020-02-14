import * as TYPES from '../action-types'
import api from '../../api/index'
import { message } from 'antd'
const taskAction = {
    asyncTaskList() {
        return async dispatch => {
            let { code, list } = await api.task.getTaskList();
            if (parseInt(code) !== 0) {
                message.error('获取任务数据失败，请稍后再试')
                return
            }
            dispatch({
                type: TYPES.TASK_SYNCTASK,
                payload: list
            })
        }
    },
    //=>删除
    deleteTask(id){
        return {
            type:TYPES.TASK_DELETE,
            taskId:id
        }
    }
}
export default taskAction