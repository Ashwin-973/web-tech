import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    quantity: 10,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    quantity: 5,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 1299,
    quantity: 0,
  },
  {
    id: 4,
    name: "Oversized T-Shirt",
    category: "Clothing",
    price: 799,
    quantity: 15,
  },
  {
    id: 5,
    name: "Denim Jacket",
    category: "Clothing",
    price: 1999,
    quantity: 4,
  },
  {
    id: 6,
    name: "Running Shoes",
    category: "Clothing",
    price: 2499,
    quantity: 0,
  },
  {
    id: 7,
    name: "Organic Rice",
    category: "Grocery",
    price: 899,
    quantity: 20,
  },
  {
    id: 8,
    name: "Almonds",
    category: "Grocery",
    price: 599,
    quantity: 8,
  },
  {
    id: 9,
    name: "Coffee",
    category: "Grocery",
    price: 449,
    quantity: 0,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  // Apply all filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="app">
      <header>
        <h1>Online Shopping Catalog</h1>
        <p>Search and filter products</p>
      </header>

      <section className="filters">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Grocery">Grocery</option>
        </select>

        {/* Price */}
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="5000">All Prices</option>
          <option value="500">Under ₹500</option>
          <option value="1000">Under ₹1,000</option>
          <option value="2000">Under ₹2,000</option>
          <option value="3000">Under ₹3,000</option>
          <option value="5000">Under ₹5,000</option>
        </select>
      </section>

      {/* Product count */}
      <div className="product-count">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {/* Products */}
      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h2>{product.name}</h2>

              <p className="category">
                {product.category}
              </p>

              <p className="price">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              {/* Conditional rendering */}
              {product.quantity === 0 ? (
                <p className="out-of-stock">
                  Out of Stock
                </p>
              ) : (
                <p className="in-stock">
                  In Stock ({product.quantity})
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="no-products">
            No products found.
          </p>
        )}
      </section>
    </div>
  );
}

export default App;