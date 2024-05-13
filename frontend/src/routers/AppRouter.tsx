import { Routes, Route } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/NotFound'
import { Navbar } from '@@/Navbar/Navbar'
import { Home } from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { ActionsProducts } from '@/pages/Admin/pages/Products/ActionsProducts'
import { Products } from '@/pages/Admin/pages/Products/Products'
import { SideBar } from '@@/SideBar/SideBar'
import { Categories } from '@/pages/Admin/pages/Categories/Categories'
import { ActionsCategories } from '@/pages/Admin/pages/Categories/ActionsCategories'
import { Prints } from '@/pages/Admin/pages/Prints/Prints'
import { ActionsPrints } from '@/pages/Admin/pages/Prints/ActionsPrints'

export const AppRouter = () => {
  return (
    <div className='bg-light'>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/admin/products/' element={<Products />} />
        <Route path='/admin/products/actions/:id' element={<ActionsProducts />} />
        <Route path='/admin/categories/' element={<Categories />} />
        <Route path='/admin/categories/actions/:id' element={<ActionsCategories />} />
        <Route path='/admin/prints/' element={<Prints />} />
        <Route path='/admin/prints/actions/:id' element={<ActionsPrints />} />
        {/* <Route path='/' element={
          <PublicRoutes>
          </PublicRoutes>
        }/>
        <Route  path='profile' element={<PrivateRoutes />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
