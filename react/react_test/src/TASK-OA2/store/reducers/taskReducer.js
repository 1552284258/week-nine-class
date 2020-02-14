import * as TYPES from "../action-types";
const initial = {
    taskList: []
};
export default function taskReducer(state = initial, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.TASK_SYNCTASK:
            state.taskList = action.payload;
            break;
        case TYPES.TASK_DELETE:
            state.taskList = state.taskList.filter(item => parseInt(item.id)!==action.taskId);
            break;

        default:
            break;
    }
    return state;
}
