import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* use 'Link' instead of 'a' for links when using router */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;