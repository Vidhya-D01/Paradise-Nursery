import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 150, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
  { id: 2, name: "Snake Plant", price: 250, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 3, name: "Money Plant", price: 120, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 4, name: "Peace Lily", price: 300, image: "https://images.unsplash.com/photo-1597055181300-e3633a917d8d?w=400" },
  { id: 5, name: "Rose Plant", price: 200, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400" },
  { id: 6, name: "Cactus", price: 100, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(product.name + " added to cart!");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Paradise Nursery</h1>
      <h2>Our Plants Collection</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>

            <button
              onClick={() => handleAddToCart(product)}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
