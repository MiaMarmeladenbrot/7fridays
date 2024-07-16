import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


const HeaderNav = () => {
    return ( 
    <header>
        <nav className="flex justify-between items-center px-10 py-5">
            <Link to="/">            
                <img className="w-8" src="/images/adfa8454b5eb4ac88263593816419af4-free.png" alt="logo of the shop" />
            </Link>
            <Link to="/cart">
               <FaCartShopping />  
            </Link>
        </nav>
    </header>
    );
}
 
export default HeaderNav;