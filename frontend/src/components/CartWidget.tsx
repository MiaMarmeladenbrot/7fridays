import { FaCartShopping } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useEffect } from "react";
import LoadingIcon from "./LoadingIcon";

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
    }, [updatedCart])

    return ( 
        <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
            {loading && <div className="relative"><LoadingIcon/></div>}
            {error && <p className="font-poppins-reg">Cannot show cart</p>}
            {data && 
                <div className="bg-[#101965] rounded-lg py-1 px-2">
                    <Link to="/cart" className="flex items-center gap-3">
                        <FaCartShopping /> 
                        <p className="text-white font-poppins-reg">{data?.cart.total} €</p>
                    </Link>
                </div> 
            }
        </IconContext.Provider>
     );
}

export default CartWidget;