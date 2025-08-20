import React from 'react'
import type { Product } from '../types/types'
import type { AxiosResponse } from 'axios';
import { addCartItem, increaseQuantity } from '../store/cartSlice';
import type { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux';
import '../styles/productCards.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ProductCardsProps {
    products: AxiosResponse<Product[]>;
}


const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {
    const dispatch = useDispatch<AppDispatch>();

    console.log('ProductCards products:', products.data);

    return (
        <>
            {products.data.map((product: Product) => (
                <Card key={product.id} className='product-card'>
                    <Link to={`/productpage/${product.id}`}>
                        <Card.Header className='image-div'>
                            <img src={product.image} alt="product image" />
                        </Card.Header>
                        <h4 className='card-title'>{product.title}</h4>
                        <Card.Body>
                            <h4>Price: ${product.price}</h4>
                            <p>{product.category}</p>
                        </Card.Body>
                    </Link>
                    <div className='product-button'>
                        <button 
                        className='button-theme'
                        onClick={() => {
                            dispatch(addCartItem(product));
                            dispatch(increaseQuantity(product));
                        }}>
                            Add to cart
                        </button>
                    </div>
                </Card>
            ))}
        </>
    )
}


export default ProductCards