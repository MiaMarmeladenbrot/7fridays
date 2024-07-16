import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const HeaderNav = () => {
    return ( 
    <header>
        <nav className="flex justify-between items-center px-10 py-5 fixed top-0 w-full ">
            <Link to="/">            
                <img className="w-8" src="/images/logo-rainbow.png" alt="logo of the shop" />
            </Link>
            <CartWidget/>
        </nav>
    </header>
    );
}
 
export default HeaderNav;