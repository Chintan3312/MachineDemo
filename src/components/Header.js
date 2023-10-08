import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center justify-content-lg-between">
                    <h1 className="logo me-auto me-lg-0"><a href="index.html">Demo<span>.</span></a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}

                            <li><Link className={`nav-link scrollto ${location.pathname == "/" ? "active" : ""}`} to="/"><h6><b>Home</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/about" ? "active" : ""}`} to="/about"><h6><b>About</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/services" ? "active" : ""}`} to="/services"><h6><b>Services</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/portfolio" ? "active" : ""}`} to="/portfolio"><h6><b>Portfolio</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/team" ? "active" : ""}`} to="/team"><h6><b>Team</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/blogs" ? "active" : ""}`} to="/blogs"><h6><b>Blogs</b></h6></Link></li>
                            <li><Link className={`nav-link scrollto ${location.pathname == "/contact" ? "active" : ""}`} to="/contact"><h6><b>Contact</b></h6></Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* <a href="#about" className="get-started-btn scrollto">Get Started</a> */}
                </div>
            </header>
        </>
    )
}