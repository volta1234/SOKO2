import React, { useState } from "react";
import Cart from "./cart";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartItems, removeAll, removeItem }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <aside style={{ fontWeight: "bolder", color: "darkblue", fontSize: "large", fontFamily: "'Sigmar', cursive" }} className="nav-link" href="/products">
                                sOkO
                            </aside>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/marketplace">
                                MarketPlace
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w3-container">
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={openModal}
                        className="material-symbols-sharp"
                    >
                        shopping_cart
                    </span>
                    <span style={{ color: "red" }} className="cart-item-count">
                        {cartItems.length}
                    </span>

                    {modalOpen && (
                        <div
                            className="w3-modal"
                            onClick={closeModal}
                            style={{ display: "block" }}
                        >
                            <div
                                className="w3-modal-content"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "450px",
                                }}
                            >
                                <div className="w3-container">
                                    <span
                                        onClick={closeModal}
                                        className="w3-button w3-display-topright"
                                    >
                                        &times;
                                    </span>
                                    <Cart
                                        removeAll={removeAll}
                                        cartItems={cartItems}
                                        removeItem={removeItem}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <NavLink className="nav-link" to="/products">
                Login
            </NavLink>
            <NavLink style={{ marginLeft: "20px", marginRight: "20px" }} className="nav-link" to="/products">
                Signup
            </NavLink>
        </nav>
    );
}
