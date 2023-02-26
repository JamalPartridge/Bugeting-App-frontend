import { Link } from "react-router-dom";

export default function NavBar(){
return(
    <nav className="Nav">
        <h1>
            <Link to="/">Home</Link>
        </h1>
        <h1>
            <Link to="/transaction/new">New Transaction</Link>
        </h1>
    </nav>
)
}
