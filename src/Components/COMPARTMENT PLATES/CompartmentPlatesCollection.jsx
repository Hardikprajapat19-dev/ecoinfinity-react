import React from "react";
import { Link } from "react-router-dom";
// Images yaha import karna
import Plate1 from "../../assets/Asset-8-1.png";
import Plate2 from "../../assets/Asset-9-1.png";
import Plate3 from "../../assets/Asset-10-1.png";
import Plate4 from "../../assets/Asset-11-2.png";
import Plate5 from "../../assets/Asset-12-2.png";
import Plate6 from "../../assets/Asset-13-1.png";
import Plate7 from "../../assets/Asset-14-1.png";
import Plate8 from "../../assets/Asset-15-1.png";
import Plate9 from "../../assets/Asset-16-1.png";
import Plate10 from "../../assets/Asset-17-1.png";
import Plate11 from "../../assets/Asset-18-1.png";
import Plate12 from "../../assets/Asset-19-1.png";
import Plate13 from "../../assets/Asset-20-1.png";
import Plate14 from "../../assets/Asset-21-1.png";
import Plate15 from "../../assets/Asset-22-300x300.png";
import Plate16 from "../../assets/Asset-23.png";
import Plate17 from "../../assets/Asset-24.png";
import Plate18 from "../../assets/Asset-25.png";

const products = [
  {
    id: 1,
    name: "3 Compartment Plate",
    image: Plate1,
    detail: 1,

  },
  {
    id: 2,
    name: "4 Compartment Plate",
    image: Plate2,
    detail: 1,

  },
  {
    id: 3,
    name: "3 Compartment Plate",
    image: Plate3,
    detail: 1,

  },
  {
    id: 4,
    name: "4 Compartment Plate",
    image: Plate4,
    detail: 2,

  },
  {
    id: 5,
    name: "3 Compartment Plate",
    image: Plate5,
    detail: 2,

  },
  {
    id: 6,
    name: "4 Compartment Plate",
    image: Plate6,
    detail: 2,

  },
  {
    id: 7,
    name: "3 Compartment Plate",
    image: Plate7,
    detail: 3,

  },
  {
    id: 8,
    name: "4 Compartment Plate",
    image: Plate8,
    detail: 3,

  },
  {
    id: 9,
    name: "3 Compartment Plate",
    image: Plate9,
    detail: 3,

  },
  {
    id: 10,
    name: "4 Compartment Plate",
    image: Plate10,
    detail: 4,

  },
  {
    id: 11,
    name: "3 Compartment Plate",
    image: Plate11,
    detail: 4,

  },
  {
    id: 12,
    name: "4 Compartment Plate",
    image: Plate12,
    detail: 4,

  },
  {
    id: 13,
    name: "3 Compartment Plate",
    image: Plate13,
    detail: 5,

  },
  {
    id: 14,
    name: "4 Compartment Plate",
    image: Plate14,
    detail: 5,

  },
  {
    id: 15,
    name: "3 Compartment Plate",
    image: Plate15,
    detail: 5,

  },
  {
    id: 16,
    name: "4 Compartment Plate",
    image: Plate16,
    detail: 6,

  },
  {
    id: 17,
    name: "3 Compartment Plate",
    image: Plate17,
    detail: 6,

  },
  {
    id: 18,
    name: "4 Compartment Plate",
    image: Plate18,
    detail: 6,

  },
];

function CompartmentPlatesCollection() {
  return (
    <section className="container py-5">
      <div className="row">

        <div className="col-lg-3 mb-4">

          <div className="CompartmentCollection-filter-box p-4">

            <h3>Collections</h3>

            <ul className="list-unstyled">
              <li>9" 3CP Round Plate</li>
              <li>9" 3CP Rectangle Plate</li>
              <li>10" 3CP Round Plate</li>
              <li>11" 4CP Square Plate</li>
              <li>11" 4CP Rectangle Plate</li>
              <li>12" 4CP Round Plate</li>

            </ul>

            <hr />

            <h4>Filter by Type</h4>

          </div>

        </div>


        <div className="col-lg-9">
          <div className="row">

            {products.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>

                <div className="card CompartmentCollection-card border-0 shadow-sm h-100">

                  <div className="CompartmentCollection-img-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="CompartmentCollection-img p-4"/>

                    <div className="CompartmentCollection-overlay">

                      <div className="CompartmentCollection-overlay-content">

                        <Link
                          to={`/compartment-details/${item.detail}`}
                          className="btn btn-light btn-sm">
                          View Details
                        </Link>

                      </div>

                    </div>

                  </div>

                  <div className="card-body text-center">

                    <h5 className="mb-2">
                      {item.name}
                    </h5>

                    <p className="text-muted">
                      Eco-friendly compartment plate perfect
                      for serving multiple food items.
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

export default CompartmentPlatesCollection;