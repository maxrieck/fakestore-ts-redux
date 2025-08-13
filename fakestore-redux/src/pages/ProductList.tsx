import { useQuery } from "@tanstack/react-query"
import { fetchCategories, fetchProducts } from "../query/api"
import type { Product } from "../types/types"


const ProductList = () => {

    const { data: products } = useQuery({
        queryKey: ['products'], 
        queryFn: fetchProducts
    })


  return (
    <div>

        <ul>
            {products && products.data && products.data.map((product: Product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>

    </div>
  )
}

export default ProductList