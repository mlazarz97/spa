import { Link, Outlet } from "react-router-dom";

export default function Home () {
    return <>
    <nav>
        <ul>
            <li>
                <Link className="link" to='/'>Home</Link>
            </li>
            <li>
                <Link className="link" to='/about'>About</Link>
            </li>
            <li>
                <Link className="link" to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
}