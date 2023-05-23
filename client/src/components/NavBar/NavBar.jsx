import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const [ruta, setRuta] = useState(path);

  useEffect(() => {
    setRuta(path);
  }, [path]);

  return (
    <nav>
      <div className={style.logo}>
        <NavLink to="/home" className={style.navlink}>
          PI-Pokemon
        </NavLink>
      </div>

      <ul>
        {/* <li><a className={style.active} href="#">Home</a></li> */}
        <li>
          <NavLink to="/home" className={ruta === "home" ? style.active : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" className={ruta === "form" ? style.active : ""}>
            Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={ruta === "about" ? style.active : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Exit</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
