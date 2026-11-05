import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: 1, name: "Aloe Vera", price: 150, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 2, name: "Snake Plant", price: 250, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Money Plant", price: 120, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 4, name: "Peace Lily", price: 300, image: "https://images.unsplash.com/photo-1597055181300-e3633a917d8d?w=400" },
      { id: 5, name: "Rubber Plant", price: 280, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 6, name: "Areca Palm", price: 350, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 7, name: "Rose Plant", price: 200, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400" },
      { id: 8, name: "Hibiscus", price: 180, image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400" },
      { id: 9, name: "Jasmine", price: 160, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
      { id: 10, name: "Orchid", price: 400, image: "https://images.unsplash.com/photo-1566907225472-514a4e4b2c6a?w=400" },
      { id: 11, name: "Marigold", price: 100, image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400" },
      { id: 12, name: "Petunia", price: 140, image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400" }
    ]
  },
  {
    name: "Succulents",
    plants: [
      { id: 13, name: "Cactus", price: 100, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 14, name: "Echeveria", price: 130, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
      { id: 15, name: "Jade Plant", price: 170, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 16, name: "Haworthia", price: 190, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 17, name: "Aloe Succulent", price: 150, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 18, name: "Burro's Tail", price: 220, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [page, setPage] = useState("home");

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const allPlants = categories.flatMap((category) => category.plants);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <nav className="navbar" style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#14532d",
        color: "white",
        position: "sticky",
        top: 0
      }}>
        <h2>Paradise Nursery</h2>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("plants")}>Plants</button>
        <button onClick={() => setPage("cart")}>
          🛒 Cart ({cartCount})
        </button>
      </nav>

      {page === "home" && (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Bring nature and freshness into your home!</p>
          <button onClick={() => setPage("plants")}>
            Explore Plants
          </button>
        </div>
      )}

      {page === "plants" && (
        <div>
          <h1 style={{ textAlign: "center" }}>Our Plants Collection</h1>

          {categories.map((category) => (
            <section key={category.name}>
              <h2>{category.name}</h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px"
              }}>
                {category.plants.map((plant) => {
                  const addedToCart = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div key={plant.id} style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center"
                    }}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{
                          width: "100%",
                          height: "160px",
                          objectFit: "cover"
                        }}
                      />
                      <h3>{plant.name}</h3>
                      <p>Price: ₹{plant.price}</p>

                      <button
                        disabled={addedToCart}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {addedToCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {page === "cart" && <CartItem />}
    </div>
  );
}

export default ProductList;
