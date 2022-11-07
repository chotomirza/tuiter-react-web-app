import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function Nav() {
    const {pathname} = useLocation()
    console.log(pathname)

    return (
        <div className = "nav nav-pills">

            <Link className={`nav-link ${pathname.indexOf('tuiter') !== -1 ? 'active': ''}`} to="/tuiter">Tuiter</Link>
            <Link className={`nav-link ${pathname === '/' ? 'active': ''}`} to="/">Assignment 6</Link>
            <Link className={`nav-link ${pathname.indexOf('a7') !== -1 ? 'active': ''}`} to="/a7">Assignment 7</Link>


            {/*<Link to="/">Labs</Link>*/}
            {/*<Link to="/a6">Assignment 6</Link> |*/}
            {/*<Link to="/a7">Assignment 7</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link> |*/}
            {/*<Link to="/mid">Mid</Link>*/}
        </div>
    );
}

export default Nav;