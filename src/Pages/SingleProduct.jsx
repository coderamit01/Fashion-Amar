import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import CartBtn from "../Components/Share/CartBtn";
import { useCart, useProductStore } from "../services/Store";
import StarRatings from "react-star-ratings";
import { FaMinus, FaPlus } from "react-icons/fa";
import SectionTitle from "../Components/Share/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ProductCard from "../Components/Products/ProductCard";

const SingleProduct = () => {
  const { productSlug } = useParams();
  const productList = useProductStore((state) => state.productList);
  const fetchProductList = useProductStore.getState().fetchProductList;
  const cart = useCart((state) => state.cart);
  const increaseCart = useCart((state) => state.increaseCart);
  const decreaseCart = useCart((state) => state.decreaseCart);

  useEffect(() => {
    const loadData = async() => {
      await fetchProductList();
    }
    loadData();
  }, []);
  // get single product 
  const singleProduct = useMemo(() => {
    return productList.find((product) => product?.slug === productSlug) || {};
  }, [productList, productSlug]);
  // destructure product info 
  const { id, title, image, category, price, discountPercentage, brand, description, reviewsCount, rating, shortDescription, sku, availabilityStatus } = singleProduct;

  // discount price 
  const discountPrice = useMemo(() => {
    if (!price || !discountPercentage) return price || 0;
    return price - (price * discountPercentage) / 100;
  }, [price, discountPercentage]);
  // Related Products 
  const relatedProducts = useMemo(() => {
    if (!category || !id) return [];
    return productList
      .filter(
        (item) =>
          item?.category.toLowerCase() === category.toLowerCase() &&
          item?.id !== id
      )
      .slice(0, 8);
  }, [productList, category, id]);
  // cart quantity 
  const cartQuantity = useMemo(() => {
    if (!id) return [];
    return cart.find((item) => item?.id === id)?.quantity;
  }, [cart,id]);
  return (
    <>
      <div className="py-5 md:py-15">
        <div className="fashion-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <img src={image} alt={title} />
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-brand leading-5 text-fblack">
                  {category && category}
                </p>
                <h2 className="text-3xl md:text-4xl font-brand font-bold">
                  {title}
                </h2>
                <div className="flex items-center space-x-2">
                  {rating && (
                    <StarRatings
                      rating={rating}
                      numberOfStars={5}
                      starRatedColor="#FFB321"
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  )}
                  {reviewsCount && (
                    <span className="text-base font-brand text-fblack mb-[-8px]">
                      {reviewsCount} Customer Review
                    </span>
                  )}
                </div>
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
                <p className="text-lg font-brand leading-5 text-fblack pb-4">
                  {shortDescription && shortDescription}
                </p>
                <div className="flex space-x-2 items-center py-2">
                  <div className="flex items-center bg-[#F5F5F5] p-1 space-x-[2px] rounded">
                    <FaMinus onClick={() => decreaseCart(id)} className="w-9 h-[30px] flex items-center justify-center text-lg p-2 cursor-pointer" />
                    <span className="w-12 h-[30px] flex items-center justify-center text-lg p-2 font-semibold text-fblack">
                     {cartQuantity ? cartQuantity : 1}
                    </span>
                    <FaPlus onClick={() => increaseCart(id)} className="w-9 h-[30px] flex items-center justify-center text-lg p-2 cursor-pointer" />
                  </div>
                  <CartBtn text="Add To Cart" product={singleProduct} />
                </div>
                <div className="flex flex-col space-y-1">
                  {brand && (
                    <p className="font-brand text-lg text-gray-800 font-[400]">
                      Brand :
                      <span className="font-semibold text-fblack">
                        {" "}
                        {brand}
                      </span>
                    </p>
                  )}
                  {sku && (
                    <p className="font-brand text-lg text-gray-800 font-[400]">
                      Sku :
                      <span className="font-semibold text-fblack"> {sku}</span>
                    </p>
                  )}
                  {availabilityStatus && (
                    <p className="font-brand text-lg text-gray-800 font-[400]">
                      Stock :
                      <span className="font-semibold text-fblack">
                        {" "}
                        {availabilityStatus}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 md:py-5">
        <div className="fashion-container">
          <SectionTitle text="Description" />
          <p className="text-lg font-brand leading-5 text-fblack pt-4">
            {description}
          </p>
        </div>
      </div>
      {relatedProducts && (
        <div className="py-5 md:py-8">
          <div className="fashion-container">
            <SectionTitle text="Related Products" />
            <div className="pt-8">
              <Swiper
                modules={[Navigation]}
                effect="fade"
                loop={false}
                autoplay={false}
                pagination={false}
                navigation={true}
                speed={800}
                slidesPerView={2}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
                spaceBetween={20}
              >
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.id} className="!h-auto">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
