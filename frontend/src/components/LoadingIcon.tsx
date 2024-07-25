import { IoReloadCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const LoadingIcon = () => {
  return (
    <IconContext.Provider value={{ color: "#111869", size: "3em" }}>
      <div className="absolute top-[50%] right-[50%] animate-spin">
        <IoReloadCircleOutline />
      </div>
    </IconContext.Provider>
  );
};

export default LoadingIcon;
