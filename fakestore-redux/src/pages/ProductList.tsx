import { useQuery } from "@tanstack/react-query"
import { fetchCategories, fetchProducts } from "../query/api"
import ProductCards from "../components/ProductCards"


const ProductList:React.FC = () => {

    const { data: products } = useQuery({
        queryKey: ['products'], 
        queryFn: fetchProducts
    })


  return (
    <div>

        <ul>
            {products && products.data && 
                <ProductCards products = {products}/>
            }
        </ul>

    </div>
  )
}

export default ProductList