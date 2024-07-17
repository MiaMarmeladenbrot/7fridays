import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { useQuery, gql } from '@apollo/client';

const GET_CART = gql`
    query {
        cart {
            items {
                product{
                    id
                }
            }
        }
    }
    `

const ChangeCartItems = ({productId}:{productId: string}) => {
    const {loading, error, data} = useQuery(GET_CART)

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>

    const isItemInCart = data.cart.items.some((singleItem: any) => singleItem.product.id === productId)    

    return ( 
    <div className="flex gap-3">
        {isItemInCart ? 
            <button className="cursor-pointer">
                <CiSquareMinus />
                <p>Remove from cart</p>
            </button>
            :
            <button className="cursor-pointer">
                <CiSquarePlus />
                <p>Add to cart</p>
            </button>
        }
    </div> );
}
 
export default ChangeCartItems;