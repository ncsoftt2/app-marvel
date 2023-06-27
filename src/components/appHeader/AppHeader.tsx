import './appHeader.scss';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <NavLink to={ROUTES.HOME}>
                    <span>Marvel</span> information portal
                </NavLink>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink to={ROUTES.HOME}>Characters</NavLink></li>
                    /
                    <li><NavLink to={ROUTES.COMICS}>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;