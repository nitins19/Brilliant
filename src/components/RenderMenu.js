import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
function RenderMenu()
{
      return(<>
           <li className="nav-item active">
       <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      </>)
}
export default RenderMenu;