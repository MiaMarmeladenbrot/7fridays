import { IoReloadCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const LoadingIcon = () => {
    return ( 
        <IconContext.Provider value={{ color: "#111869", size: "3em" }}>
            <div className="w-full h-lhv flex items-center justify-center mt-[200px] animate-spin">
                <IoReloadCircleOutline />
            </div>
        </IconContext.Provider>
     );
}
 
export default LoadingIcon;