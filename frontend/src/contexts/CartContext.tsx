import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    updatedCart: boolean;
    triggerCartUpdate: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    // boolean-state to trigger updating of cart
    const [updatedCart, setUpdatedCart] = useState(false);
    
    // function to change state
    const triggerCartUpdate = () => {
        setUpdatedCart(!updatedCart)
    };

    return(
        <CartContext.Provider value={{updatedCart, triggerCartUpdate}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCartContext must be used within a CartProvider.")
    return context
}