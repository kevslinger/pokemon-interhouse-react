import React from "react";
import { MENUITEMS } from "./menuItems";
import "./navbar.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    state = {
        clicked: false,
        width: 0,
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
    };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
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
                <ul className={'nav-menu-top'}>
                    <li className={"navbar-logo-container"}>
                            <img className={"navbar-logo"} src={"pottamon_logo.png"}/>
                            <a className={"navbar-title"} href={"/"}>PoTTa&#8202;MoN</a>
                    </li>
                    {
                        MENUITEMS.slice(0, Math.floor((this.state.width-450)/100)).map((item, index) =>
                            <li className={"menu-item-top"} key={index}><a className={item.cName} href={item.url}><strong>{item.title}</strong></a></li>
                        )
                    }
                </ul>
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