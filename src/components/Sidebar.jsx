import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/sidebarSlice";
import { addToCart } from "../store/cartSlice";

const Sidebar = ({ product }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const selectedProduct = useSelector((state) => state.sidebar.selectedProduct);

  const handleAddToCart = () => {
    const prod = selectedProduct || product;
    if (prod) dispatch(addToCart(prod)); // 👈 add product to cart
    dispatch(closeSidebar());     // optional: close sidebar after adding
  };

  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={() => dispatch(closeSidebar())}>Close</button>

      <div className="p-4">
  <h2 className="text-xl font-semibold">{selectedProduct?.name || 'Add to Cart'}</h2>
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-4 py-2 rounded mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
