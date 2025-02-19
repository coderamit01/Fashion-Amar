import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  useEffect(()=> {
    const fetchData = async() => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data =  await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, id);
  const {title, thumbnail, rating, category, price, discountPercentage,brand} = product;
  return (
    <div className="py-5 md:py-15">
      <div className="fashion-container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3">
            <img src={thumbnail} alt="" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-2xl md:text-4xl font-brand font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;