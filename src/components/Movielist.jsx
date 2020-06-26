import React from 'react';
import Movie from './Movie';
import Mlist from '../list';

function Movielist(){
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gridGap:"1rem"}}>
        {Mlist.map(val =>{
            return (
            <Movie key={val['id']} name={val['name']} imgsrc={val['imgsrc']} rating={val['rating']} watch={val['watch']}/>
            );
         })}
        </div>
    );
}

export default Movielist;