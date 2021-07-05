import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './contexts/CartContext';
import ProductContext from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([
			...cart, {...item, id: Date.now()}
		])
	};

	const deleteItem = (id) => {
		const filterItems = cart.filter(item => item.id !== id);
		setCart(filterItems)
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, deleteItem }} >
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
