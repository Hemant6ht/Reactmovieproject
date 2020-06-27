import React from "react";
import './moviemobile.css';

function Movie(props){
    return(
        <>
            <div className="card" style={{width: "100%",borderRadius:"15px"}}>
                <img src={props.imgsrc} className="card-img-top" alt="poatto" style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px",height:"10rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.rating}</p>
                    <a href={props.watch} target="blank" className="btn btn-outline-success">Watch Now</a>
                </div>
            </div>
        </>
    );
}
export default Movie;