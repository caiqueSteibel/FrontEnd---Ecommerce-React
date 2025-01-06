import { useCartContext } from "../../contexts/CartContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartProducts from "./CartProducts";
import TotalPriceCell from "./TotalPriceCell";
import { Link } from "react-router-dom";

const CartOverlay = () => {
  const { toggleIsCartOpen, isCartOpen } = useCartContext();

  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-50 ease-in-out duration-200 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section
        id="outside-of-cart"
        onClick={toggleIsCartOpen}
        className="outside-of-cart w-3/4 bg-slate-950 opacity-50"
      ></section>
      <section
        id="cart"
        className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white"
      >
        <div className="flex justify-between border-b border-slate-50 px-4 py-2">
          <p>Minha sacola</p>
          <button onClick={toggleIsCartOpen}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <CartProducts />
        <TotalPriceCell />
        <Link
          to="/checkout"
          className="bg-slate-100 text-slate-950 rounded-sm p-1 hover:bg-slate-300 text-center"
        >
          Finalizar Compra
        </Link>
      </section>
    </div>
  );
};

export default CartOverlay;
