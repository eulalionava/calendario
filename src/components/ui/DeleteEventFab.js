import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/events';
import '../estilos/style.css';

export const DeleteEventFab = ()=>{

    const dispatch = useDispatch();

    const handDelete = ()=>{
        dispatch( eventDeleted() )
    }
    
    return(
        <button 
            className="btn btn-danger fab-danger"
            onClick={ handDelete }
        >
            <i className="fas fa-trash"></i>
            <span>Borrar evento</span>
        </button>
    )
}