
import { Helmet } from "react-helmet";
import PageTitle from "../Components/Share/PageTitle";


const Cart = () => {
  const mainTitle = document.title;
  return (
    <div>
      <Helmet>
        <title>Cart - {mainTitle}</title>
      </Helmet>
      <PageTitle />
    </div>
  );
};

export default Cart;