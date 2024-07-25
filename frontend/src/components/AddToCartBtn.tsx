import { gql, useMutation } from "@apollo/client";
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

const AddToCartBtn = ({ productId }: { productId: string }) => {
  // context to re-render
  const { triggerCartUpdate } = useCartContext();

  // add to cart
  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART, {
    onCompleted: () => triggerCartUpdate(),
  });

  const handleAddItem = async () => {
    try {
      await addToCart({ variables: { productId } });
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
      {error && <p className="font-poppins-reg">Cannot add item</p>}
      {!loading && !error && (
        <button onClick={handleAddItem} className="text-white bg-green-600 rounded-lg px-2 py-1">
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
