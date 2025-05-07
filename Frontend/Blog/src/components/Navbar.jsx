import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{border:"2px solid black",backgroundColor:"blue",display:"flex",justifyContent:"space-evenly",color:"white",height:"30px",alignContent:"center",marginBottom:"30px"}}>
     <h2> <Link to="/">Blog Application</Link></h2>
     <Link to="/">Home</Link>
    <Link  to="/create">Create</Link>
    </div>
  )
}
