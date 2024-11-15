import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('price');
  const { addToCart } = useCart(); // Получаем функцию добавления в корзину

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      return a.title.localeCompare(b.title);
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="price">По цене</option>
        <option value="title">По названию</option>
      </select>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>{product.price} ₽</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;