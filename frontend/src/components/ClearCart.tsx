import { useMutation, gql } from "@apollo/client";
import { useCartContext } from "../contexts/CartContext";
import LoadingIcon from "./LoadingIcon";

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
      items {
        product {
          id
          name
          price
          description
        }
        quantity
      }
      total
    }
  }
`;

const ClearCart = () => {
  // context to re-render
  const { triggerCartUpdate } = useCartContext();

  // clear all items from cart
  const [clearCart, { loading, error }] = useMutation(CLEAR_CART, {
    onCompleted: () => triggerCartUpdate(),
  });

  const clearCartBtn = async () => {
    try {
      await clearCart();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {loading && (
        <div className="relative">
          <LoadingIcon />
        </div>
      )}
      {error && <p className="font-poppins-reg">Cannot clear cart</p>}
      <button
        onClick={clearCartBtn}
        className="font-poppins-reg bg-red-600 py-1 px-2 rounded-lg text-white"
      >
        Clear Cart
      </button>
    </>
  );
};

export default ClearCart;
