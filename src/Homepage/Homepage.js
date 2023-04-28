import React from "react";
import './Homepage.css'

export default function Homepage() {
    return (
        <div className="container-fluid home">
            <div className="cover">
                <div id="h1">
                    <h1>welcome to soko e-commerce where all your need sare sorted. Expore our website here</h1>
                </div>
                <form className="flex-form">
                    <label for="from">
                        <i className="ion-location"></i>
                    </label>
                    <input type="search" placeholder="where do you want to go to first?" />
                    <input type="submit" value="search" />
                </form>
                <div id="madeby">
                    <span>
                        Powered by:  <a href="https://unsplash.com/@benblenner" target="_blank"> Soko e-commerce</a>
                    </span>
                </div>
            </div>

        </div>
    )
}