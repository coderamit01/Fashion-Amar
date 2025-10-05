import { Helmet } from "react-helmet";
import PageTitle from "../Components/Share/PageTitle";
import { useCart } from "../services/Store";
import CartProductCard from "../Components/CartProduct/CartProductCard";
import { Link } from "react-router";
import { useMemo } from "react";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const cart = useCart((state) => state.cart);
  const mainTitle = document.title;

  const cartSubTotal = useMemo(() => {
    return cart.reduce((acc, item) => {
      const subPrice = item?.price * item?.quantity;
      const total = acc + subPrice;
      return total;
    }, 0);
  }, [cart]);
  const discount = 5;
  const cartTotal = useMemo(() => {
    if (!discount || discount === 0) {
      return cartSubTotal || 0;
    }
    return Math.floor(cartSubTotal - (discount * cartSubTotal) / 100);
  }, [cartSubTotal, discount]);
  return (
    <div>
      <Helmet>
        <title>Cart - {mainTitle}</title>
      </Helmet>
      <PageTitle />
      <div className="fashion-container">
        <div className="grid grid-cols-12 gap-8 py-5 lg:py-10">
          {cart.length > 0 ? (
            <>
              <div className="col-span-12 lg:col-span-8 lg:pe-10">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className="text-lg font-semibold text-fblack">
                          Product
                        </th>
                        <th className="text-lg font-semibold text-fblack">
                          Price
                        </th>
                        <th className="text-lg font-semibold text-fblack">
                          Quantity
                        </th>
                        <th className="text-lg font-semibold text-fblack">
                          Subtotal
                        </th>
                        <th className="text-lg font-semibold text-fblack">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.length > 0 && (
                        <>
                          {cart.map((item) => (
                            <CartProductCard key={item.id} product={item} />
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                <div>
                  sdf
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="px-5 py-3 bg-[#F5F5F5]">
                  <h4 className="text-lg font-bold text-fblack capitalize">
                    Cart Total
                  </h4>
                  <div className="space-y-2 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-slate-900">Subtotal</span>
                      <span className="text-base text-slate-900">
                        ${cartSubTotal && cartSubTotal}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base text-slate-900">
                        Coupon Discount
                      </span>
                      <span className="text-base text-slate-900">-5%</span>
                    </div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="text-xl font-semibold text-slate-900">
                        Total
                      </span>
                      <span className="text-xl font-semibold text-slate-900">
                        ${cartTotal}
                      </span>
                    </div>
                    <Link
                      to="/checkout"
                      className="px-5 py-2 bg-brand text-white rounded cursor-pointer flex items-center justify-center"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
              <div className="col-span-12 flex flex-col items-center justify-center">
                <BsCartX className="text-8xl text-gray-200" />
                <h2 className="text-2xl font-semibold">Your cart is currently empty.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
