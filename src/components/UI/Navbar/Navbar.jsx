import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__link">
               <MyButton><Link to="/about">О сайте </Link></MyButton> 
                <MyButton><Link to="/posts">Посты</Link></MyButton>
            </div>
        </div>
    )
}

export default Navbar;