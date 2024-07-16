import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return ( 
        <div className="flex items-center gap-3">
            <FaCartShopping /> 
            <h2>PRICE</h2>
        </div> 
     );
}
 
export default CartWidget;