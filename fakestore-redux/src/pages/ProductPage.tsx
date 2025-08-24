import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../query/api'
import { useParams } from 'react-router-dom'
import type { Product } from '../types/types'
import PageLayout from '../components/PageLayout'
import '../styles/productPage.css'
import { Link } from 'react-router-dom'

const ProductPage: React.FC = () => {

  const { id } = useParams()

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  const product = products?.data.find((p: Product) => p.id === Number(id));


  return (

    <PageLayout>

      <Link className='button-theme' to='/productlist'>Back to Products</Link>

      {product ? (
        <div className='product-page mt-3'>
          <h3>{product.title}</h3>
          <img src={product.image} alt="" />
          <h4>{product.price}</h4>
          <p>{product.description}</p>
        </div>
      ) : (
        <h4>Item not found.</h4>
      )}

    </PageLayout>
  )
}

export default ProductPage