import React from 'react'
import type { Product } from '../types/types'
import type { AxiosResponse } from 'axios';
import { addCartItem } from '../store/cartSlice';
import type { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux';
import '../styles/productCards.css'

interface ProductCardsProps {
    products: AxiosResponse<Product[]>;
}

const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {products.data.map((product: Product) => (
                <div key={product.id} className='product-card'>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="product image" />
                    {/* <p>{product.description}</p> */}
                    <h4>{product.price}</h4>
                    <h4>{product.category}</h4>
                    <button onClick={() => dispatch(addCartItem(product))}>Add to cart</button>

                </div>
            ))}

        </>
    )
}


export default ProductCards