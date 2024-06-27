import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";


class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/"
                    className={({ isActive, isPending }) => {
                        return isPending ? "pending" : isActive ? "active" : "";
                    }}
                    relative="path">Home</NavLink>
                <NavLink to="/todos" relative="path">Todos</NavLink>
                <NavLink to="/users" relative="path">User</NavLink>
                {/* <NavLink to="/about" relative="path">About</NavLink> */}
                {/* <a class="active" href="./">Home</a>
                <a href="./todo">Todos</a>
                <a href="#about">About</a> */}
            </div>
        )
    }
}

export default Nav;