import { FaCartShopping } from "react-icons/fa6";

import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";

const GET_CART = gql`
    query {
        cart {
            total
        }
    }
    `
const CartWidget = () => {

    const {loading, error, data} = useQuery(GET_CART)

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>

    return ( 
        <div>
            <Link to="/cart" className="flex items-center gap-3">
                <FaCartShopping /> 
                <p>{data.cart.total} €</p>
            </Link>
        </div> 
     );
}
 
export default CartWidget;