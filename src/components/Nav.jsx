import React from 'react';

function Nav(){
    return(
        <>
        <nav className="navbar navbar-light bg-light mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="www.xyz.com">Netflix</a>
                <form className="d-flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    );
}
export default Nav;