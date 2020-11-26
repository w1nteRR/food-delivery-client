import React, { FC } from 'react'

import { Cart } from './components/cart/Cart'

import { useRoutes } from './hooks/useRoutes'

export const App: FC = () => {

	const routes = useRoutes()
	
	return (
		<>
		{routes}
		<Cart />
		</>
	)
}