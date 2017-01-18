import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="header">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/notes" activeClassName="active">Notes App</Link>
        </nav>
    );
};

export default Header;
