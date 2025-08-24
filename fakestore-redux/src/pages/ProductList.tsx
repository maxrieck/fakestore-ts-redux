import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchCategories, fetchProducts, fetchCategoriesProducts } from "../query/api"
import ProductCards from "../components/ProductCards"
import '../styles/productList.css'
import PageLayout from "../components/PageLayout"


const ProductList:React.FC = () => {

    const { data: products } = useQuery({
        queryKey: ['products'], 
        queryFn: fetchProducts
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'], 
        queryFn: fetchCategories
    })

    const [category, setCategory] = useState<string>("")

    const { data: fetchedCategory } = useQuery({
        queryKey: ['category', category],
        queryFn: () => fetchCategoriesProducts(category),
        enabled: !!category
    })
 

    return (
        <PageLayout>
            <div className="product-container">
                
                {!products && <div>Loading...</div>}
                <div className="category-selector">
                    <button onClick={() => setCategory("")} value="">All</button>
                    {categories && categories.data.map((selectedCategory: string, index: number) => (
                        <button key={index} value={selectedCategory}
                            onClick={() => setCategory(selectedCategory)}
                        >{selectedCategory}</button>
                    ))}
                </div>

                <div className="product-list">
                    {category === "" && products && products.data && (
                        <ProductCards products={products} />
                    )}
                    {category !== "" && fetchedCategory && fetchedCategory.data && (
                        <ProductCards products={fetchedCategory} />
                    )}
                </div>
                
            </div>
        </PageLayout>
    )
}

export default ProductList