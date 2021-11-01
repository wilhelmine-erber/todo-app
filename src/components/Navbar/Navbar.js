import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const activeClass="active-menu-item";
  return(
    <nav className="topNav">
      <ul>
        <li><NavLink activeClassName={activeClass} to="/" exact>Home</NavLink></li>
        <li><NavLink activeClassName={activeClass} to="/about">About</NavLink></li>
        <li><NavLink activeClassName={activeClass} to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// *** Erkärungen ***
/*

Links mit <a> Element realisiert:
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>

=> Das würde dazu führen, dass die Seite immer komplett
neu geladen wird. Wir wollen aber, dass nur die entsprechenden
page-components gemountet oder entfernt werden
Lösung: React Router Components für die Navigation verwenden:
Link oder NavLink


Link vs Navlink
- NavLink fügt unserem aktiven Menüpunkt eine
CSS-Klasse hinzu. Aktiv bedeutet, dass die page
des Menüpunkts gerade angezeigt wird
- mittels des props "activeClassName" können wir den Namen der
Klasse ändern (standard ist "active")
*/
