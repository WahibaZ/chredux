import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        item: [],  // Liste des tâches
        filter: '',  // Filtre de recherche par texte
        filterStatus: 'all'  // Filtre par statut (all, completed, incomplete)
    },
    reducers: {
        addTasks: (state, action) => {
            state.item.push(action.payload);
        },
        deletePost: (state, action) => {
            state.item = state.item.filter(task => task.id !== action.payload);
        },
        updatePost: (state, action) => {
            state.item = state.item.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, titre: action.payload.titre, description: action.payload.description };
                }
                return task;
            });
        },
        toggleTaskStatus: (state, action) => {
            state.item = state.item.map(task => {
                if (task.id === action.payload) {
                    task.isDone = !task.isDone;
                }
                return task;
            });
        },
        filterPost: (state, action) => {
            state.filter = action.payload;
        },
        filterStatus: (state, action) => {
            state.filterStatus = action.payload;
        }
    }
});

export const { addTasks, deletePost, updatePost, toggleTaskStatus, filterPost, filterStatus } = TaskSlice.actions;
export default TaskSlice.reducer;
