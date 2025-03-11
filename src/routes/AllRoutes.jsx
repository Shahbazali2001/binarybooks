
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import  ProductsList  from '../pages/Products/ProductsList'
import ProductDetail from '../pages/ProductDetail'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            
        </Routes>
    </>
  )
}

export default AllRoutes