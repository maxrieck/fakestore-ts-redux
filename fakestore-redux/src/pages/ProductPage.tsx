import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../query/api'
import { useParams } from 'react-router-dom'
import type { Product } from '../types/types'

const ProductPage: React.FC = () => {

  const { id } = useParams()

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  const product = products?.data.find((p: Product) => p.id === Number(id));


  return (

    <div>

      {product ? (
        <>
          <h4>{product.price}</h4>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </>
      ) : (
        <h4>Item not found.</h4>
      )}

    </div>
  )
}

export default ProductPage