import React, { useState } from "react";
import "./App.css";

export default function Product({ products, cartItems, addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Load more products
  const loadMore = () => setCurrentPage(currentPage + 1);

  // Go back to previous page
  const goBack = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      {currentProducts.map((product) => {
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
                {!product || !product.category || !product.category.name ? 0 : product.category.name}
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
      })}
      <div className="pagination">
        {indexOfLastProduct < products.length && (
          <button style={{backgroundColor: "white", color: "grey"}} className="next-btn" onClick={loadMore}>
            Load More
          </button>
        )}
        {currentPage > 1 && (
          <button style={{backgroundColor: "white", color: "darkgrey"}} className="prev-btn" onClick={goBack}>
            &lt; Prev
          </button>
        )}
      </div>
    </div>
  );
}
