import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
    <header className='header-container'>
        <Link to="/">
            <h1 className='header-title'>Bookish Wisdoms - BookStore</h1>
        </Link>
        <nav className='header-nav'>
            <ul className='header-list'>
                <li className='header-list-items'>
                    <NavLink to="/category/1">
                        Romance
                    </NavLink>
                </li>
                <li className='header-list-items'>
                    <NavLink to="/category/2">
                        Fiction
                    </NavLink>
                </li>
                <li className='header-list-items'>
                    <NavLink to="/category/3">
                        Drama
                    </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar