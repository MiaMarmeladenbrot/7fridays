import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { IconContext } from "react-icons";
import { useQuery, gql, useMutation } from '@apollo/client';
import LoadingIcon from "./LoadingIcon";

// get all cart-items to check if this product is already in the cart
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

// add new item to cart
const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!) {
    addToCart(productId: $productId) {
        items {
            product {
                id
            }
            quantity
            }
        }
    }
`;

// remove item from cart
const REMOVE_FROM_CART = gql`
  mutation RemoveFromCard($productId: ID!) {
    removeFromCart(productId: $productId) {
        items {
            product {
                id
                }
            quantity
            }
        total
        }
    }
`;

const ChangeCartItems = ({productId}:{productId: string}) => {
    // check cart
    const {loading: queryLoading, error: queryError, data} = useQuery(GET_CART)
    const isItemInCart = data?.cart?.items.some((singleItem: any) => singleItem.product.id === productId)    

    // add to cart
    const [addToCart, { loading: addLoading, error: addError }] = useMutation(ADD_TO_CART);
    const handleAddItem = async () => {
        try {
          await addToCart({ variables: {productId} });
        } catch (e) {
          console.error(e);
        }
      };
    
    // remove from cart
    const [removeFromCart, { loading: removeLoading, error: removeError }] = useMutation(REMOVE_FROM_CART);
    const handleRemoveItem = async () => {
        try {
          await removeFromCart({ variables: {productId} });
        } catch (e) {
          console.error(e);
        }
      };


    if( queryLoading || addLoading || removeLoading ) return <LoadingIcon/>
    if( queryError || addError || removeError ) return <p>Something went wrong</p>

    return ( 
    <IconContext.Provider value={{ size: "1.2rem" }}>
        <div className="flex gap-3 relative">
            {isItemInCart ? 
                <button className="cursor-pointer absolute right-0" onClick={handleRemoveItem}>
                    <CiSquareMinus />
                </button>
                :
                <button className="cursor-pointer absolute right-0" onClick={handleAddItem}>
                    <CiSquarePlus />
                    <p>Add to cart</p>
                </button>
            }
        </div>
    </IconContext.Provider>
    );
}
 
export default ChangeCartItems;