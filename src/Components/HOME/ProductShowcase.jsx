
import React from "react";
import ProductShowcaseImg from "../../assets/disposables-e1740687863707.jpeg";

function ProductShowcase() {
    return (
        <section className="Product-Show-case-section">
            <div className="Product-Show-case-image">
                <img
                    src={ProductShowcaseImg}
                    alt="Product Show case"
                />

                <div className="Product-Show-case-text">
                    <h2
                        data-animate="fade-up"
                    >
                        Serving the earth with eco-friendly<br></br>
                        disposable tableware
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default ProductShowcase;