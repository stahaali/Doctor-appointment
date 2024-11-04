import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Appointment from './../../pages/Appointment';

export default function Header() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);  // Initialize state correctly

    return (
        <>
            <header className="desktop-menu">
                <Container>
                    <nav>
                        <NavLink to="/">
                            <img src="/assets/images/logo.svg" className="img-fluid" alt="Logo" />
                        </NavLink>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/doctors">All Doctors</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/login">Admin Panel</NavLink></li>
                        </ul>
                        <ul>

                            {
                                token ?

                                <div className="profile-div">
                                    <img src="/assets/images/profile_pic.png" alt="Profile" />
                                    <FontAwesomeIcon icon={faAngleDown} />

                                    <div className="profile-list">
                                        <ul>
                                            <li><a href="/myprofile">my profile</a></li>
                                            <li><a href="/appointment">my Appointment</a></li>
                                            <li><a href={()=> setToken('false')}>logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                : 
                                <div className="create-account">
                                    <NavLink to="/login">Create Account</NavLink>
                                </div>
                            }

                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    );
}
