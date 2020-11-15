import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import { Auth0Provider } from '@auth0/auth0-react'
import { AuthProvider } from './context/auth.context'

ReactDOM.render(
	<BrowserRouter>
		<Auth0Provider
			domain={process.env.REACT_APP_AUTH0_DOMAIN!}
			clientId={process.env.REACT_APP_AUTH0_CLIENTID!}
			redirectUri={window.location.origin}
			audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN!}/api/v2/`}
			scope="read:current_user update:current_user_metadata"
		>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Auth0Provider>
	</BrowserRouter>
  ,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()

