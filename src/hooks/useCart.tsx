import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextData {
  cart: Product[];
  setCart: (value: Product[]) => void;
  removeProd: (id: number) => void;
  changeAmount: (id: number, amout: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  //normalmente eu iria tentar usar um map aqui, [key: number]: Product, mas sinceramente
  //ainda não sei fazer isso direito e o tempo é escasso...
  function removeProd(id: number) {
    setCart(cart.filter((prod) => prod.id !== id));
  }

  function changeAmount(id: number, amount: number) {
    if (amount == 0) {
      removeProd(id);
      return;
    }

    setCart(
      cart.map((prod) => {
        if (prod.id !== id) return prod;
        return { ...prod, amount: amount };
      })
    );
  }

  return (
    <CartContext.Provider value={{ cart, setCart, removeProd, changeAmount }}>
      {children}
    </CartContext.Provider>
  );
}
