import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Navbar.css"


import SearchBar from "./SearchBar"

import {useTheme}  from "../hooks/useTheme"



export default function NavBar() {

   const { color } = useTheme()
   

  return (
    <div className="navbar" style={{background: color}}>
      <nav >
        <Link to="/" className="brand">
            <h1>Cooking Ninjas</h1>
        </Link>
        <SearchBar/>
        <Link to="/Create">
            Create Recipe
        </Link>
      </nav>
      
    </div>
  )
}
