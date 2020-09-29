import React, { useState } from 'react'
import { FaReact,FaCode,FaBars,FaTimes } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import {Link} from "react-router-dom"
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from "react-icons";

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick =()=> setClick(!click);
    const closeMobileMenu =()=>  setClick(false);
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
   
    window.addEventListener('resize',showButton)

    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <FaReact style={{fontSize:'32px', color:'aqua'}} className="navbar-icon" />
                        React <span style={{color:"#61dafb"}}> Fresh</span>
                        <DiCode style={{fontSize:"28px"}}/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> :<FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' :'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}> Home </Link>
                        </li>

                            {/* menu */}

                        <li className="nav-item">
                            <Link to="/feature" className="nav-links" onClick={closeMobileMenu}> Feature</Link>
                        </li>

                            {/* menu */}

                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}> About </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu} >
                                    <Button buttonStyle='btn--outline' >SIGN UP</Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className="btn-link" >
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN UP1</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
