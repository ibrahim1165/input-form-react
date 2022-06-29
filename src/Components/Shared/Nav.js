import React from 'react';
import { Link } from 'react-router-dom';
import Linesteps from '../Hooks/Linesteps';

const Nav = () => {
    return (
        <div className="text-2xl inline m-8 text-center">
            <Link to='/'>Home</Link>
            <Link to='/email'>Email</Link>
            <Link to='/user'>User</Link>
            <Link to='/location'>Location</Link>
        </div>
    );
};

export default Nav;