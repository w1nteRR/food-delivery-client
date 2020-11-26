import React, { createContext, FC, useCallback, useState, useContext } from 'react'

interface CartItem {
    name: string
    count: number
    price: string
    _id: string
}

interface Cart {
    isOpen: boolean
    items: Array<CartItem>
}

interface CartContextData {
    cart: Cart
    toggleCart(): void
    addToCart(item: CartItem): void
    removeFromCart(_id: string): void
    updateItemCount(_id: string, newCount: number): void
    totalPrice(): number
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: FC = ({
    children
}) => { 
    const [cart, setCart] = useState<Cart>({
        isOpen: false,
        items: []
    })

    const toggleCart = useCallback(() => {
        setCart({
            ...cart,
            isOpen: !cart.isOpen
        })
    }, [cart])

    const addToCart = useCallback((item: CartItem) => {

        const itemInCart = cart.items.some(i => i._id === item._id)

        if(itemInCart) return console.log('item exists')

        setCart({
            ...cart,
            items: cart.items.concat(item)
        })
    
    }, [cart])


    const removeFromCart = useCallback((_id: string) => {
        setCart({
            ...cart,
            items: cart.items.filter(i => i._id !== _id)
        })
    }, [cart])

    const updateItemCount = useCallback((_id: string, newCount: number) => {
        setCart({
            ...cart,
            items: cart.items.map(i => {
                if(i._id === _id) {
                    return {
                        ...i,
                        count: newCount
                    }
                }

                return i
            })
        })

    }, [cart])

    const totalPrice = useCallback(() => {
        
        const priceInt = cart.items.map(i => i.count * parseInt(i.price.slice(0, -3)))

        return priceInt.reduce((acc, curr) => acc + curr, 0)
        
    }, [cart.items])

    return (
        <CartContext.Provider
            value={{
                cart,
                toggleCart,
                addToCart,
                removeFromCart,
                totalPrice,
                updateItemCount
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}