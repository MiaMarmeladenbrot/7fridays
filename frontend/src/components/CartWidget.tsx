import { FaCartShopping } from "react-icons/fa6";
import { IconContext } from "react-icons";

import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useEffect } from "react";

const GET_CART = gql`
    query {
        cart {
            total
        }
    }
    `

const CartWidget = () => {
    const { updatedCart } = useCartContext()
    const {loading, error, data, refetch} = useQuery(GET_CART)

    useEffect(()=> {
        refetch();
    }, [updatedCart, refetch])

    if(loading) return 
    if(error) return <p>Something went wrong</p>

    return ( 
        <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
            <div className="bg-[#101965] rounded-lg py-1 px-2">
                <Link to="/cart" className="flex items-center gap-3">
                    <FaCartShopping /> 
                    <p className="text-white">{data.cart.total} €</p>
                </Link>
            </div> 
        </IconContext.Provider>
     );
}
// [#e0362d]
export default CartWidget;