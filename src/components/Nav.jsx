import React from 'react';

function Nav({filterrobot}){
    return(
        <>
        <nav className="navbar navbar-light bg-light mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="www.xyz.com">Netflix</a>
                <form className="d-flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" onChange={filterrobot}/>
                </form>
            </div>
        </nav>
        </>
    );
}
export default Nav;