import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CartBtn from "../Components/Share/CartBtn";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useProductStore } from "../services/Store";

const SingleProduct = () => {
  const { productSlug } = useParams();
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductList();
    };
    fetchData();
  }, [productSlug]);

  const product = productList.filter(
    (product) => product?.slug === productSlug
  );
  const {
    id,
    title,
    image,
    category,
    price,
    discountPercentage,
    brand,
    description,
    sku,
    availabilityStatus,
    stock,
  } = product[0] || [];
  const discountPrice = price - (price * discountPercentage) / 100;
  return (
    <div className="py-5 md:py-15">
      <div className="fashion-container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <img src={image} alt={title} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl md:text-4xl font-brand font-bold">
                {title}
              </h2>
              <div className="flex items-center space-x-2">
                {discountPercentage ? (
                  <>
                    <span className="text-2xl md:text-3xl font-brand font-bold text-[#5CAF90]">
                      ${Math.round(discountPrice)}
                    </span>
                    <span className="text-lg font-brand line-through text-gray-600">
                      ${price}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl md:text-3xl font-brand font-bold text-[#5CAF90]">
                    ${price}
                  </span>
                )}
              </div>
              <p className="text-lg font-brand leading-5 text-fblack">
                {description}
              </p>
              <div className="flex space-x-2 items-center py-2">
                <div className="flex items-center bg-[#3bb77d17] p-1 space-x-[2px] rounded">
                  <FiMinus className="w-9 h-[30px] bg-slate-50 flex items-center justify-center text-sm p-2 cursor-pointer" />
                  <span className="w-12 h-[30px] flex items-center justify-center text-lg p-2 font-semibold text-fblack">
                    1
                  </span>
                  <FiPlus className="w-9 h-[30px] bg-slate-50 flex items-center justify-center text-sm p-2 cursor-pointer" />
                </div>
                <CartBtn text="Add To Cart" product={product} />
              </div>
              <div className="flex flex-col space-y-1">
                <h5 className="text-xl font-semibold font-brand ">
                  Information
                </h5>
                <p className="font-brand text-lg text-gray-800 font-[400]">
                  Brand :
                  <span className="font-semibold text-fblack"> {brand}</span>
                </p>
                <p className="font-brand text-lg text-gray-800 font-[400]">
                  Sku :<span className="font-semibold text-fblack"> {sku}</span>
                </p>
                <p className="font-brand text-lg text-gray-800 font-[400]">
                  Stock :
                  <span className="font-semibold text-fblack">
                    {" "}
                    {stock} {availabilityStatus}
                  </span>
                </p>
                <p className="font-brand text-lg text-gray-800 font-[400]">
                  Category :
                  <span className="font-semibold text-fblack"> {category}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
