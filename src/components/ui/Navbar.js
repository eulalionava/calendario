import React from 'react';

export const Navbar = () =>{
    return(
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Eulalio
            </span>
            <button className="btn btn-outline-danger">
                <i className="btn btn-outline-alt"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}