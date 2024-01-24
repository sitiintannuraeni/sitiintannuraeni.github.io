import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import {router} from "./routes.jsx";
import {ThemeProvider} from "@material-tailwind/react";

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https'
})

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <AuthProvider store={store}>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </AuthProvider>
</React.StrictMode>,
)
