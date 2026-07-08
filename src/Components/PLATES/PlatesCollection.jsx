import React from "react";
import { Link } from "react-router-dom";
import Plate1 from "../../assets/6-inch-round-plate-stack.png";
import Plate2 from "../../assets/6-inch-deep-round-plate-1.png";
import Plate3 from "../../assets/6-inch-round-plate-with-food.png";
import Plate4 from "../../assets/6-inch-square-plate-stack.png";
import Plate5 from "../../assets/6-inch-square-plate-1-300x300.png";
import Plate6 from "../../assets/6-inch-square-plate-with-food-300x300.png";
import Plate7 from "../../assets/6-inch-deep-round-plate-stack-300x300.png";
import Plate8 from "../../assets/6-inch-deep-round-plate-1.png";
import Plate9 from "../../assets/6-inch-deep-round-plate-with-food-300x300.png";
import Plate10 from "../../assets/7-inch-deep-round-plate-stack-300x300.png";
import Plate11 from "../../assets/7-inch-deep-round-plate-1-300x300.png";
import Plate12 from "../../assets/7-inch-deep-round-plate-with-food.png";

import Plate13 from "../../assets/9-inch-round-plate-stack.png";
import Plate14 from "../../assets/9-inch-round-plate-1-300x300.png";
import Plate15 from "../../assets/9-inch-round-plate-with-food.png";
import Plate16 from "../../assets/10-inch-round-plate-stack.png";
import Plate17 from "../../assets/10-inch-round-plate.png";
import Plate18 from "../../assets/10-inch-round-plate-with-food.png";
import Plate19 from "../../assets/11-inch-round-plate-stack.png";
import Plate20 from "../../assets/11-inch-round-plate-1.png";
import Plate21 from "../../assets/11-inch-round-plate-with-food-300x300.png";
import Plate22 from "../../assets/12-inch-round-plate-stack.png";
import Plate23 from "../../assets/12-inch-round-plate-1.png";
import Plate24 from "../../assets/12-inch-round-plate-with-food-300x300.png";


const products = [
  {
    id: 1,
    name: "6 Inch Round Plate",
    image: Plate1,
    detail: 1,

  },

  {
    id: 2,
    name: "6 Inch Deep Round Plate",
    image: Plate2,
    detail: 1,

  },

  {
    id: 3,
    name: "6 Inch Round Plate With Food",
    image: Plate3,
    detail: 1,

  },
  {
    id: 4,
    name: "6 Inch Square Plate",
    image: Plate4,
    detail: 2,

  },

  {
    id: 5,
    name: "6 Inch Square Plate",
    image: Plate5,
    detail: 2,

  },

  {
    id: 6,
    name: "6 Inch Square Plate With Food",
    image: Plate6,
    detail: 2,

  },

  {
    id: 7,
    name: "6 Inch Deep Round Plate Stack",
    image: Plate7,
    detail: 3,

  },

  {
    id: 8,
    name: "6 Inch Deep Round Plate",
    image: Plate8,
    detail: 3,

  },

  {
    id: 9,
    name: "6 Inch Deep Round Plate With Food",
    image: Plate9,
    detail: 3,

  },

  {
    id: 10,
    name: "7 Inch Deep Round Plate Stack",
    image: Plate10,
    detail: 4,

  },

  {
    id: 11,
    name: "7 Inch Deep Round Plate",
    image: Plate11,
    detail: 4,

  },

  {
    id: 12,
    name: "7 Inch Deep Round Plate With Food",
    image: Plate12,
    detail: 4,

  },

  {
    id: 13,
    name: "9 Inch Round Plate Stack",
    image: Plate13,
    detail: 5,

  },
  {
    id: 14,
    name: "9 Inch Round Plate",
    image: Plate14,
    detail: 5,

  },
  {
    id: 15,
    name: "9 Inch Round Plate With Food",
    image: Plate15,
    detail: 5,

  },
  {
    id: 16,
    name: "10 Inch Round Plate Stack",
    image: Plate16,
    detail: 6,

  },
  {
    id: 17,
    name: "10 Inch Round Plate",
    image: Plate17,
    detail: 6,

  },
  {
    id: 18,
    name: "10 Inch Round Plate With Food",
    image: Plate18,
    detail: 6,

  },
  {
    id: 19,
    name: "11 Inch Round Plate Stack",
    image: Plate19,
    detail: 7,

  },
  {
    id: 20,
    name: "11 Inch Round Plate",
    image: Plate20,
    detail: 7,

  },
  {
    id: 21,
    name: "11 Inch Round Plate With Food",
    image: Plate21,
    detail: 7,

  },
  {
    id: 22,
    name: "12 Inch Round Plate Stack",
    image: Plate22,
    detail: 8,

  },
  {
    id: 23,
    name: "12 Inch Round Plate",
    image: Plate23,
    detail: 8,

  },
  {
    id: 24,
    name: "12 Inch Round Plate With Food",
    image: Plate24,
    detail: 8,

  },
];

function PlatesCollection() {
  return (
    <section className="container py-5">
      <div className="row">

        {/* Left Sidebar */}
        <div className="col-lg-3 mb-4">
          <div className="filter-box p-4">

            <h3>Collections</h3>

            <ul className="list-unstyled">
              <li>6" Round Plate</li>
              <li>6" Square plate</li>
              <li>6" Deep Round Plate</li>
              <li>7" Deep Round Plate</li>
              <li>9" Round Plate</li>
              <li>10" Round Plate</li>
              <li>11" Round Plate</li>
              <li>12" Round Plate</li>


            </ul>

            <hr />

            <h4>Filter by Size</h4>

          </div>
        </div>


        <div className="col-lg-9">
          <div className="row">

            {products.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>

                <div className="card bowl-card border-0 shadow-sm h-100">

                  <div className="card-img-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top p-4"
                    />

                    <div className="card-overlay">

                      <div className="overlay-content">

                        <Link
                          to={`/plates-details/${item.detail}`}
                          className="btn btn-light btn-sm"
                        >
                          View Details
                        </Link>

                      </div>

                    </div>

                  </div>

                  <div className="card-body text-center">

                    <h5 className="mb-2">
                      {item.name}
                    </h5>

                    <h4 className="text-success mb-3">
                      {item.price}
                    </h4>

                    <p className="text-muted">
                      Strong & eco-friendly bagasse bowl
                      perfect for hot & cold food.
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default PlatesCollection;
