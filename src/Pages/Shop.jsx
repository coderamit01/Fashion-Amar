import { useState } from "react";
import ShopProducts from "../Components/ShopProducts";
import ShopSidebar from "../Components/ShopSidebar";
import { useEffect } from "react";

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [searchTitle,setSearchTitle] = useState('');
  const [categories,setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState([]);
  const [selectBrands, setSelectBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes,categoryRes] = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://dummyjson.com/products/categories')
        ])
        
        const productData = await productRes.json();
        const categoryData = await categoryRes.json();
          
        setCategories(categoryData);
        setProducts(productData.products);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])

  const handleCategorySelect = (category) => {
    setSelectedCategory((prev) => (
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev,category]
    ))
  }
  // Filter Products
  const filterProducts = products.filter((product) => {
    const matchesCategory = selectedCategory.length ? selectedCategory.includes(product.category.toLowerCase()) : true;
    return matchesCategory;
  })

  return (
    <div>
      <div className="fashion-container">
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <ShopSidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
           />
          <ShopProducts products={filterProducts} searchTitle={searchTitle} onSearch={setSearchTitle} />
        </div>
      </div>
    </div>
  );
};

export default Shop;