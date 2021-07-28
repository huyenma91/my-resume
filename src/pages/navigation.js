import React from 'react';
import { Link } from 'react-router-dom';
// import ListIcon from './icons/ListIcon';
import '../components/navigation.css';
function Navigation() {
    const logout = ()=>{
        localStorage.removeItem('token')
    }

    
    return (
        <>
            <nav className="navbar">
                <a href="/home" className="navbar_logo">Phạm Nhật Phương</a>
                <div className="navbar_bars">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="navbar_menu">
                    <Link  to='/home' className="navbar_menu--links">Home</Link>
                    <Link  to='/CV' className="navbar_menu--links">CV</Link>
                    {/* <a href="/CV" className="navbar_menu--links">CV</a> */}
                    <a href="/" onClick={logout} className="navbar_menu--links" id="button">Logout</a>
                </div>
            </nav>
        </>

    )
}

export default Navigation;