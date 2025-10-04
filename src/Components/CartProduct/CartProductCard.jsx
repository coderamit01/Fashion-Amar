import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart } from "../../services/Store";
import PropTypes from "prop-types";

const CartProductCard = ({ product }) => {
  const { id, title,image,price,quantity } = product;
  const increaseCart = useCart((state) => state.increaseCart);
  const decreaseCart = useCart((state) => state.decreaseCart);
  const removeProduct = useCart((state) => state.removeCart);

  const productSubTotal = price * quantity;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-sm h-15 w-15">
              <img src={image} alt={title} />
            </div>
          </div>
          <div>
            <div className="text-lg font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td className="text-base">${price}</td>
      <td>
        <div className="inline-flex items-center bg-[#F5F5F5] p-1 space-x-[2px] rounded">
          <FaMinus className="w-9 h-[30px] flex items-center justify-center text-lg p-2 cursor-pointer" />
          <input
            type="text"
            className="w-12 h-[30px] flex items-center justify-center text-lg p-2 font-semibold text-fblack border-none focus:outline-none"
            value={quantity}
          />
          <FaPlus className="w-9 h-[30px] flex items-center justify-center text-lg p-2 cursor-pointer" />
        </div>
      </td>
      <td className="text-base">${productSubTotal}</td>
      <td className="text-base">
        <FaRegTrashAlt className="cursor-pointer" />
      </td>
    </tr>
  );
};

CartProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartProductCard;
