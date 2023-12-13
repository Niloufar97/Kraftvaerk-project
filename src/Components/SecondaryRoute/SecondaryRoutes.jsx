import { NavLink } from "react-router-dom";

function SecondaryRoutes() {
  return (
    <div className="secondary-route">
      <ul className="sec-route-ul">
        <li>
          <NavLink className="link-style sec-route-link" to="report">SST Report</NavLink>
        </li>
        <li>
          <NavLink className="link-style sec-route-link" to="execute">Execute SST</NavLink>
        </li>
        <li>
          <NavLink className="link-style sec-route-link" to="upload">Upload SST</NavLink>
        </li>
      </ul>
      
    </div>
  );
}

export default SecondaryRoutes;
