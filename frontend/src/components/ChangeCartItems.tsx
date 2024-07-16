import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

// check if item is already in cart (cart fetchen und nach Id suchen, Id via Props empfangen, je nachdem auf welcher Seite)
// if yes: remove-Button
// if no: add-Button

const ChangeCartItems = () => {
    return ( 
    <div className="flex gap-3">
        <button className="cursor-pointer">
            <CiSquarePlus />
            <p>Add to cart</p>
        </button>

        <button className="cursor-pointer">
            <CiSquareMinus />
            <p>Remove from cart</p>
        </button>
    </div> );
}
 
export default ChangeCartItems;