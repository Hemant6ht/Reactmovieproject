import React from 'react';
import Movie from './Movie';


function Movielist({movies}){
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gridGap:"1rem"}}>
        {movies.map(val =>{
            return (
            <Movie key={val['id']} name={val['name']} imgsrc={val['imgsrc']} rating={val['rating']} watch={val['watch']}/>
            );
         })}
        </div>
    );
}

export default Movielist;