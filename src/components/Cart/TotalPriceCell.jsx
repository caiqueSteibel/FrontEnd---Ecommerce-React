import { useContext } from 'react';
import { catalogIndexedById } from '../../utils/catalog';
import { CartContext } from '../../contexts/CartContext';

function calculateTotalPrice(cartObject) {
  let price = 0;

  for (const cartItemId in cartObject) {
    price += catalogIndexedById[cartItemId].price * cartObject[cartItemId];
  }
  return price;
}

const TotalPriceCell = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly">
      <p>Total: </p>
      <p>{`$${totalPrice}`}</p>
    </section>
  );
};

export default TotalPriceCell;
