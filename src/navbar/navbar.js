import React from "react";
import { MENUITEMS } from "./menuItems";
import "./navbar.css";

class Navbar extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className={"NavbarItems"}>
                <div className={"menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MENUITEMS.map((item, index) =>
                            <li className={"menu-item"} key={index}><a className={item.cName} href={item.url}><strong>{item.title}</strong></a></li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar;