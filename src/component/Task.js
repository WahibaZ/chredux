import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deletePost, updatePost } from '../redux/reducer/TaskSlice';

function Task({ task }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitre, setNewTitre] = useState(task.titre);
    const [newDescription, setNewDescription] = useState(task.description);

    const handleToggleStatus = () => {
        dispatch(toggleTaskStatus(task.id));
    };

    const handleDelete = () => {
        dispatch(deletePost(task.id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(updatePost({ id: task.id, titre: newTitre, description: newDescription }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <tr>
            <td>{task.id}</td>
            <td>
                {isEditing ? (
                    <input type="text" value={newTitre} onChange={(e) => setNewTitre(e.target.value)} />
                ) : (
                    task.titre
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                ) : (
                    task.description
                )}
            </td>
            <td>
                <button onClick={handleToggleStatus}>
                    {task.isDone ? 'Complete' : 'Incomplete'}
                </button>
            </td>
            <td>
                <button onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
}

export default Task;
