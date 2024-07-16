import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";


const ChangeCartItems = () => {
    return ( 
    <div className="flex gap-3">
        <div className="cursor-pointer">
            <CiSquarePlus />
        </div>
        <div className="cursor-pointer">
            <CiSquareMinus />
        </div>
    </div> );
}
 
export default ChangeCartItems;