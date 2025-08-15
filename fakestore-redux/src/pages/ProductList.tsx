import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchCategories, fetchProducts, fetchCategoriesProducts } from "../query/api"
import ProductCards from "../components/ProductCards"
import '../styles/productList.css'


const ProductList:React.FC = () => {

    const { data: products } = useQuery({
        queryKey: ['products'], 
        queryFn: fetchProducts
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'], 
        queryFn: fetchCategories
    })

    // const { data: category } = useQuery({
    //     queryKey: ['category'],
    //     queryFn: fetchCategoriesProducts
    // })

    // const [category, setCategory] = useState<string>("")


  return (
    <div >

        <select onChange={(e) => setCategory(e.target.value)}>
            {categories && categories.data.map((selectedCategory:string) => 
                <option value={selectedCategory}>{selectedCategory}</option>
            )}
        </select>



        <div className="product-list">
            {products && products.data && 
                <ProductCards products = {products}/>
            }
        </div>

    </div>
  )
}

export default ProductList