import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AuthProvider, LoginPage, RequireAuth } from './routes/App'
import { action as chatBotAction, Chatbot } from './routes/chatbot'

import 'bootstrap/dist/css/bootstrap.min.css'
import { PublicPage } from './routes/public'
import { ProtectedPage } from './routes/protected'
import { Layout } from './routes/mainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PublicPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/chatbot',
        action: chatBotAction,
        element: (
          <RequireAuth>
            <Chatbot />
          </RequireAuth>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
