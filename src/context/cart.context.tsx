import React, { createContext, FC, useCallback, useState, useContext, useEffect } from 'react'


type Alert = 'error' | undefined

interface CartItem {
    name: string
    count: number
    price: string
    _id: string
}

interface CartDialog {
    isOpen: boolean
}

interface CartAlert {
    isOpen: boolean
    type: Alert
    text: string
}

interface Cart {
    isOpen: boolean
    items: Array<CartItem>
    restaurantId: string | null
}

interface CartContextData {
    cart: Cart
    cartDialog: CartDialog
    alert: CartAlert
    toggleCart(): void
    addToCart(item: CartItem, restaurantId: string): void
    removeFromCart(_id: string): void
    updateItemCount(_id: string, newCount: number): void
    totalPrice(): number
    openCartDialog(): void
    closeCartDialog(): void
    cleanCart(): void
    showAlert(type: Alert, text: string): void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: FC = ({
    children
}) => { 
    const [cart, setCart] = useState<Cart>({
        isOpen: false,
        items: [],
        restaurantId: null
    })

    const [cartDialog, setCartDialog] = useState({
        isOpen: false
    })

    const [alert, setAlert] = useState<CartAlert>({
        isOpen: false,
        text: '',
        type: undefined    
    })

    const toggleCart = useCallback(() => {
        setCart({
            ...cart,
            isOpen: !cart.isOpen
        })
    }, [cart])

    const showAlert = useCallback((type: Alert, text: string) => {
        setAlert({
            isOpen: true,
            type,
            text
        })

        setTimeout(() => setAlert({ isOpen: false, type: undefined, text: '' }), 3000)
    }, [])

    const addToCart = useCallback((item: CartItem, restaurantId: string) => {

        if(cart.restaurantId && cart.restaurantId !== restaurantId) {
            return setCartDialog({
                isOpen: true
            })
        }  

        const itemInCart = cart.items.some(i => i._id === item._id)

        if(itemInCart) return showAlert('error', 'Already in basket')

        setCart({
            ...cart,
            items: cart.items.concat(item),
            restaurantId
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

    const cleanCart = useCallback(() => {
        setCart({
            ...cart,
            items: [],
            restaurantId: null
        })
    }, [cart])

    const openCartDialog = useCallback(() => setCartDialog({ ...cartDialog, isOpen: true }), [cartDialog])
    const closeCartDialog = useCallback(() => setCartDialog({ ...cartDialog, isOpen: false }), [cartDialog])


    // useEffect(() => {

    //     if(cart.items.length) return
        
    //     return setCart({...cart, isOpen: false , restaurantId: null})

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [cart.items])

    return (
        <CartContext.Provider
            value={{
                cart,
                cartDialog,
                alert,
                toggleCart,
                addToCart,
                removeFromCart,
                totalPrice,
                updateItemCount,
                openCartDialog,
                closeCartDialog,
                cleanCart,
                showAlert
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