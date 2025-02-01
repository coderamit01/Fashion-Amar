import { useState } from "react";
import ShopProducts from "../Components/ShopProducts";
import ShopSidebar from "../Components/ShopSidebar";
import { useEffect } from "react";

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [searchTitle,setSearchTitle] = useState('');
  const [selectedCategory,setSeletedCategory] = useState([]);
  const [selectBrands, setSelectBrands] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  },[])
  // Get unique Categories 
  const productCategories = products.reduce((acc,category) =>{
    if(category.category){
      !acc.includes(category.category) ? acc.push(category.category) : true;
    }
    return acc;
  },[])
  // Get unique Brand 
  const productBrands = products.reduce((acc,brand) =>{
    if(brand.brand){
      !acc.includes(brand.brand) ? acc.push(brand.brand) : true;
    }
    return acc;
  },[])
  const handleCategorySelect  = (category) => {
    setSeletedCategory((prev) => 
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev,category]
    )
  }
  const handleBrandSelect = (brand) => {
    setSelectBrands((prev) => 
      prev.includes(brand) ? prev.filter(item => item !== brand) : [...prev,brand]
    )
  }
  // Filter Products
  const filterProducts = products.filter((product) => {
    const matchesCategory = selectedCategory.length ? selectedCategory.includes(product.category) : true;
    const matchesBrand = selectBrands.length ? selectBrands.includes(product.brand) : true;
    return matchesBrand && matchesCategory;
  })

  return (
    <div>
      <div className="container lg:max-w-[1530px] mx-auto px-3">
        <div className="flex gap-5">
          <ShopSidebar 
          categories={productCategories}
          selectedCategory={selectedCategory}
          onSelectedCategory={handleCategorySelect }
          brands={productBrands}
          selectBrands={selectBrands}
          onSelectBrand={handleBrandSelect}
           />
          <ShopProducts products={filterProducts} searchTitle={searchTitle} onSearch={setSearchTitle} />
          {console.log(products)}
        </div>
      </div>
    </div>
  );
};

export default Shop;