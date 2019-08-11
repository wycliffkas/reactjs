import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{props.homeLink}</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                </ul>
            </div>
            
        </nav>
    );
}