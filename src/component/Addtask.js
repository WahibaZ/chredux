import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks, filterPost, filterStatus } from '../redux/reducer/TaskSlice';

function AddTask() {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');  // Filtre par statut
    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        dispatch(filterStatus(e.target.value));  // Dispatch du filtre de statut
    };

    const AjouterTask = (e) => {
        e.preventDefault();
        if (titre && description) {
            dispatch(addTasks({
                id: Date.now(),
                titre,
                description,
                isDone: false  // Tâche par défaut comme incomplète
            }));
            setTitre('');
            setDescription('');
        }
    };

    return (
        <div>
            <h1>Your Tasks</h1>

            {/* Recherche */}
            <input type="text" placeholder="Search" value={search} onChange={(e) => {
                setSearch(e.target.value);
                dispatch(filterPost(e.target.value));  // Dispatch de l'action de filtre
            }} />
            <br />

            {/* Filtre par statut */}
            <select value={statusFilter} onChange={handleStatusChange}>
                <option value="all">All Tasks</option>
                <option value="completed">Completed Tasks</option>
                <option value="incomplete">Incomplete Tasks</option>
            </select>
            <br />

            {/* Formulaire d'ajout de tâche */}
            <input type="text" placeholder="Task Title" value={titre} onChange={(e) => setTitre(e.target.value)} />
            <input type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <button type="submit" onClick={AjouterTask}>Add Task</button>
        </div>
    );
}

export default AddTask;
