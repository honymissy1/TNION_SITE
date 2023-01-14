import '../asset/styles/nav.css';
import { Navigate } from "react-router-dom";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useContextHook from "../Hooks/contestHook";
const Nav = ({blogSearch}) =>{
    const {username, userLogout} = useContextHook();
    const navigate = useNavigate()

    const handleLogout = () =>{
        userLogout();
        navigate('/signin', {replace: false})
        navigate(0)
    }
    return (
        <nav className='nav'>
            <div className='blog-logo'>
                <h1>TNION</h1>
            </div>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                </ul>
       

            <div className="group">
                <div className='search' style={{display: blogSearch ? 'flex':'none'}}>
                    <input type="input" placeholder='Search...' />
                    <span class="material-symbols-outlined">
                      search
                    </span>
                </div>
                {
                   username.user.username ? (
                    <div className="welcome" style={{padding: '5px', textAlign: 'center'}}>
                     {/* <p>Welcome</p> */}
                     <p style={{color: 'steelblue', fontWeight: 'bolder'}}>{username.user.username }</p>
                     <Link to="/signin">
                       <button onClick={handleLogout}>Logout</button>
                     </Link>
                    </div>
                   ): (
                    <Link to="/signin">
                        <button className="log-btn">
                            Login
                        </button>
                    </Link>
                   ) 
                }
                
            </div>
        </nav>
    )
}

export default Nav