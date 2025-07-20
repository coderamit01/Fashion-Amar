import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ArchiveProducts from "./ArchiveProducts";
import ShopArchiveSidebar from "./ShopArchiveSidebar";

const ShopArchive = () => {
  const {category} = useParams();
  const [products,setProducts] = useState([]);
  const [cat,setCat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes,categoryRes] = await Promise.all([
          fetch(`https://dummyjson.com/products/category/${category}`),
          fetch('https://dummyjson.com/products/categories')
        ])
        
        const productData = await productRes.json();
        const categoryData = await categoryRes.json();
          
        setCat(categoryData);
        setProducts(productData.products);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])
  return (
    <div>
      <div>
        <div className="fashion-container">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <ShopArchiveSidebar categories={cat} />
            <ArchiveProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArchive;