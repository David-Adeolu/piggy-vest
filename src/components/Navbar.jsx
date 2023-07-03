import React from 'react'
import img from '../image/piggyicon.svg'

const Navbar = () => {
    return (
        <div className=" nav">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-lg">
                    <a className="navbar-brand " href="#"><img className="w-75 uu" src={img} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold fs-4 mx-4" aria-current="page" href="#">Save</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold fs-5 mx-3" href="#">Invest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold fs-5 mx-3" href="#">Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold fs-5 mx-3" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold fs-5 mx-3" href="#">Resources</a>
                            </li>
                           
                        </ul>
                        <div>
                            <button className="rounded-2 mx-3 p-2 bg-light fw-bold ">Sign In</button>
                            <button className="rounded-2 mx-3 bg-dark text-light fw-bold p-2">Creat Free Account</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

