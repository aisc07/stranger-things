import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
            <Link to = "/">Posts</Link>
            <Link to = "/profile">Profile</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
        </div>
    )
}

export default NavBar