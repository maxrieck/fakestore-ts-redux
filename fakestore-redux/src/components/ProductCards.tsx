import type { Product } from '../types/types'
import type { AxiosResponse } from 'axios';
import '../styles/productCards.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddCartButton from './AddCartButton';

interface ProductCardsProps {
    products: AxiosResponse<Product[]>;
    onAddToCart?: () => void;
}


const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {


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
                            <h4>Price: ${product.price.toFixed(2)}</h4>
                            <p>{product.category}</p>
                        </Card.Body>
                    </Link>
                    <div className='product-button'>
                        <AddCartButton product={product}/>
                    </div>
                </Card>
            ))}
        </>
    )
}


export default ProductCards