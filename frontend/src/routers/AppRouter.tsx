import { Routes, Route } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/NotFound'
import { Navbar } from '@@/Navbar/Navbar'
import { Home } from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { ActionsProducts } from '@/pages/Admin/pages/Products/ActionsProducts'
import { Products } from '@/pages/Admin/pages/Products/Products'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/admin/products/' element={<Products />} />
        <Route path='/admin/products/actions/:id' element={<ActionsProducts />} />
        {/* <Route path='/' element={
          <PublicRoutes>
          </PublicRoutes>
        }/>
        <Route  path='profile' element={<PrivateRoutes />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
