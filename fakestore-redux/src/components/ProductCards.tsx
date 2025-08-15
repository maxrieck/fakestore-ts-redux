import React from 'react'
import type { Product } from '../types/types'
import type { AxiosResponse } from 'axios';
import { addCartItem } from '../store/cartSlice';
import type { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux';

interface ProductCardsProps {
    products: AxiosResponse<Product[]>;
}

const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
                {products.data.map((product: Product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <button onClick={() => dispatch(addCartItem(product))}>Add to cart</button>
                                         
                    </div>
                ))}

        </div>
    )
}


export default ProductCards