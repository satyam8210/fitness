import React from "react";
import { useDispatch } from "react-redux"
import { searchElement } from "../../actions";
import { connect } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Fitness</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                            </ul>
                            <div className="d-flex">
                                <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" onChange={(e) => dispatch(searchElement(e.target.value))}/>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )
}

const mapStatesToProps = state => ({
    search : state.search
})

export default connect(mapStatesToProps,{searchElement})(Header);