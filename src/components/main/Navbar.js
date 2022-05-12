import jwt_decode from 'jwt-decode';
import { Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/navbar.css';


const Navbar = (props) => {    
    const navigate = useNavigate();
    const userInfo = useSelector(state => state.userState);
    const cartVals = useSelector(state => state.cartVals);

    const token = localStorage.getItem('token');
    let deToken = null;
    if(token !== null){
        deToken = jwt_decode(token);
    }
    
    const logOut = () => {
        localStorage.clear();
        navigate('/');
    }

   
    return (
        <Fragment>
          
            <nav className="navbar sticky-top flex-md-nowrap p-0 shadow " style={{backgroundColor: '#E8F8F5'}} >
                <div className="container">
                    <span className="navbar-brand col-md-2" >
                        sudoshop
                    </span>
                    <ul className="nav ">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link btn btn-link mybtnhover" >Home</NavLink>
                        </li>
                        
                        <li className="nav-item ">
                            <NavLink to='/cart' className="nav-link btn btn-link mybtnhover" >Cart{cartVals.cartSize}</NavLink>
                        </li>
                        <li className='nav-item'>
                           <button onClick={()=>navigate('/yourorders')} className='nav-link btn btn-link mybtnhover'>Your Orders</button>
                        </li>
                    </ul>
                    
                </div>
            </nav>
           
        </Fragment>
    )
}

export default Navbar;