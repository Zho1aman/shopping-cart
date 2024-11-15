import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} шт. - {item.price * item.quantity} ₽
            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Увеличить</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Уменьшить</button>
          </li>
        ))}
      </ul>
      <p>Итого: {totalAmount} ₽</p>
    </div>
  );
};

export default Cart;