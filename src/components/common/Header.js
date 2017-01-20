import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({auth, logout}) => {
    return (
        <nav className="header">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {auth && " | "}
            {
                auth && <Link to="/notes" activeClassName="active">Notes</Link>
            }
            {!auth && " | "}
            {
                !auth && <Link to="/login" activeClassName="active">Login</Link>
            }
            {auth && " | "}
            {
                auth && <Link to="/" onClick={logout} activeClassName="active">Log Out</Link>
            }
        </nav>
    );
};

Header.propTypes = {
    auth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default Header;
