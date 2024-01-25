import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ProductPage } from './pages/ProductPage'
function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/auth/products', element: <ProductPage /> }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
