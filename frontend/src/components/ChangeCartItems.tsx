import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { IconContext } from "react-icons";
import { gql, useMutation } from '@apollo/client';
import LoadingIcon from "./LoadingIcon";
import { useCartContext } from "../contexts/CartContext";

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
  const { triggerCartUpdate } = useCartContext();

    // add to cart
    const [addToCart, { loading: addLoading, error: addError }] = useMutation(ADD_TO_CART, {
        onCompleted: () => triggerCartUpdate(),
    });

    const handleAddItem = async () => {
        try {
          await addToCart({ variables: {productId} });
        } catch (e) {
          console.error(e);
        }
      };
    
    // remove from cart
    const [removeFromCart, { loading: removeLoading, error: removeError }] = useMutation(REMOVE_FROM_CART, {
        onCompleted: () => triggerCartUpdate(),
    });

    const handleRemoveItem = async () => {
        try {
          await removeFromCart({ variables: {productId} });
        } catch (e) {
          console.error(e);
        }
      };

    return ( 
    <IconContext.Provider value={{ size: "1.2rem" }}>
        {(addLoading || removeLoading) && <div className="relative"><LoadingIcon/></div>}
        {(addError || removeError) && <p className="font-poppins-reg">Cannot change cart</p>}
        <div className="flex flex-col gap-3">
                <button className="cursor-pointer" onClick={handleRemoveItem}>
                    <CiSquareMinus />
                </button>
                
                <button className="cursor-pointer " onClick={handleAddItem}>
                    <CiSquarePlus />
                </button>
        </div>
    </IconContext.Provider>
    );
}

export default ChangeCartItems;