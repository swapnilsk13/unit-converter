import React from "react";
import './Links.css'
import { Link } from "react-router-dom";
 
export default function Links(){
    return(
        <div className="links">
            <Link to='/'>Welcome</Link>
            <Link to='/speed'>Speed</Link>
            <Link to='/temperature'>Temperature</Link>
        </div>
    )
}