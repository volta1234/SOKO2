import React, { useState } from "react";
import "./App.css";

export default function Product({ products, cartItems, addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = products.filter((product) => {
    if (!searchTerm) {
      return true;
    }
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Load more products
  const loadMore = () => setCurrentPage(currentPage + 1);

  // Go back to previous page
  const goBack = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ border: "none", textAlign: 'center', marginTop: "2px" }}
          type="search"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {currentProducts.length === 0 ? (
        <div className="alert">
          <span className="closebtn" onClick={(event) => {
            event.target.parentElement.style.display = 'none';
          }}>
            &times;
          </span>
          <strong>Error!</strong> No products or categories found.
        </div>

      ) : (
        currentProducts.map((product) => {
          const itemInCart = cartItems.find((item) => item.id === product.id);
          const disabled = itemInCart ? true : false;
          return (
            <div class="card" style={{ width: "18rem" }}>
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img
                  style={{ width: "269px", height: "250px" }}
                  src={product.url_img}
                  alt={""}
                />
                <p>
                  {!product || !product.category || !product.category.name
                    ? 0
                    : product.category.name}
                </p>
                <p>{product.description}</p>
                <p>{product.quantity}</p>
                <p>${product.price}</p>

                <button
                  onClick={() => addToCart(product)}
                  disabled={disabled}
                  className={disabled ? "disabled-btn" : ""}
                >
                  {disabled ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })
      )}
      <div className="pagination">
        {indexOfLastProduct < filteredProducts.length && (
          <button
            style={{ backgroundColor: "white", color: "grey" }}
            className="next-btn"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
        {currentPage > 1 && (
          <button
            style={{ backgroundColor: "white", color: "darkgrey" }}
            className="prev-btn"
            onClick={goBack}
          >
            &lt; Prev
          </button>
        )}
      </div>
    </div>
  );
}
