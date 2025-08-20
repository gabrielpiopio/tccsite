import {Link} from "react-router"

export function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/aboutus"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/details"}>Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}