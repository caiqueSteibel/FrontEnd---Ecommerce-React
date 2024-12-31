import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg hover:shadow-2xl transition duration-300">
      <img
        className="rounded-lg mx-4 my-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={image}
        alt={`Imagem do produto ${id}`}
      />
      <p className="mx-4 text-sm text-slate-400">{brand}</p>
      <p className="mx-4 text-sm">{name}</p>
      <p className="mx-4 text-sm text-green">{price}</p>
      <button
        className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800"
        onClick={() => addToCart(id)}
      >
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  );
};

export default ProductCard;
