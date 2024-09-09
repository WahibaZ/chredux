import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
    const tasks = useSelector(state => state.task.item);  // Liste des tâches
    const filterText = useSelector(state => state.task.filter);  // Texte de recherche
    const filterStatus = useSelector(state => state.task.filterStatus);  // Filtre par statut

    // Filtrer par texte de recherche
    const filteredByText = tasks.filter(task =>
        task.titre.toLowerCase().includes(filterText.toLowerCase())
    );

    // Filtrer par statut (completed/incomplete/all)
    const filteredTasks = filteredByText.filter(task => {
        if (filterStatus === 'completed') {
            return task.isDone === true;
        } else if (filterStatus === 'incomplete') {
            return task.isDone === false;
        }
        return true;  // Retourne toutes les tâches si le filtre est "all"
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredTasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </tbody>
        </table>
    );
}

export default ListTask;
