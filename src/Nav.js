import Menu from "./component/Menu";
import logo from "./assets/images/logo.png";
import MenuModal from "./MenuModal";
import { Link } from "react-router-dom";
import "./assets/style/header.scss"


function Nav() {
  return (
    <div className="Header">
      <Link to="*" className="mainlogo">
        <img src={logo} alt="logo" />
      </Link>
      <Menu />
      <MenuModal />
    </div>
  );
}

export default Nav;
