import CartContent from "../components/CartContent";
import CartFooter from "../components/CartFooter";
import CartHeader from "../components/CartHeader";

const Cart = () => {
  return (
    <section className="flex flex-col gap-8 h-screen">
      <CartHeader />
      <CartContent />
      <CartFooter />
    </section>
  );
};

export default Cart;
