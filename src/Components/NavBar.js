import { Link } from "react-router-dom";
import navBar from "../css/navBar.css"

export default function NavBar(){
return(
    <nav className="NavBar">
        <h1>
            <Link to="/">Home</Link>
        </h1>
        <h1>
            <Link to="/transactions">Transactions</Link>
        </h1>
        <h1>
            <Link to="/transactions/new">New Transaction</Link>
        </h1>
    </nav>
);
}
