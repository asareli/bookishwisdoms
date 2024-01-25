import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
    <header className='header-container'>
        <h1 className='header-title'>Bookish Wisdoms - BookStore</h1>
        <nav className='header-nav'>
            <ul className='header-list'>
                <li className='header-list-items'>Romance</li>
                <li className='header-list-items'>Fiction</li>
                <li className='header-list-items'>Drama</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar