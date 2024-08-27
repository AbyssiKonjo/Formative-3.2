import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <div id='topNav'>
                {/* LOGO */}
                <div id="logo">
                    <Link to="/">WUX</Link>
                </div>

                {/* DESKTOP MENU */}
                <ul id='menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
