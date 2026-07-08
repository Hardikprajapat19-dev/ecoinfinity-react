import { Link } from "react-router-dom";
import React from "react";
import Bowl11 from "../../assets/Asset-20.png";
import Bowl12 from "../../assets/Asset-21.png";
import Bowl6 from "../../assets/Asset-15.png";
import Bowl13 from "../../assets/Asset-7.png";
import Bowl14 from "../../assets/Asset-8.png";
import Bowl15 from "../../assets/Asset-9.png";
import Bowl1 from "../../assets/Asset-10.png";
import Bowl2 from "../../assets/Asset-11-1.png";
import Bowl3 from "../../assets/Asset-12-1.png";
import Bowl4 from "../../assets/Asset-13.png";
import Bowl5 from "../../assets/Asset-14.png";
import Bowl7 from "../../assets/Asset-16.png";
import Bowl8 from "../../assets/Asset-17.png";
import Bowl9 from "../../assets/Asset-18.png";
import Bowl10 from "../../assets/Asset-19.png";


const products = [
  {
    id: 13,
    name: "120 ml Dessert Bowl",
    image: Bowl13,
    detail: 1,

  },
  {
    id: 14,
    name: "120 ml Ice Cream Bowl",
    image: Bowl14,
    detail: 1,

  },
  {
    id: 15,
    name: "120 ml Noodle Bowl",
    image: Bowl15,
    detail: 1,

  },
  {
    id: 1,
    name: "180 ml Round Bowl",
    image: Bowl1,
    detail: 2,

  },
  {
    id: 2,
    name: "180 ml Round Bowl",
    image: Bowl2,
    detail: 2,

  },
  {
    id: 3,
    name: "180 ml Bagasse Bowl",
    image: Bowl3,
    detail: 2,

  },
  {
    id: 4,
    name: "240 ml Eco Bowl",
    image: Bowl4,
    detail: 3,

  },
  {
    id: 5,
    name: "240 ml Meal Bowl",
    image: Bowl5,
    detail: 3,

  },
  {
    id: 6,
    name: "240 ml Family Bowl",
    image: Bowl6,
    detail: 3,

  },
  {
    id: 7,
    name: "350 ml Snack Bowl",
    image: Bowl7,
    detail: 4,

  },
  {
    id: 8,
    name: "350 ml Soup Bowl",
    image: Bowl8,
    detail: 4,

  },
  {
    id: 9,
    name: "350 ml Curry Bowl",
    image: Bowl9,
    detail: 4,

  },
  {
    id: 10,
    name: "500 ml Rice Bowl",
    image: Bowl10,
    detail: 5,

  },
  {
    id: 11,
    name: "500 ml Premium Bowl",
    image: Bowl11,
    detail: 5,

  },
  {
    id: 12,
    name: "500 ml Serving Bowl",
    image: Bowl12,
    detail: 5,

  },


];

function BowlCollection() {
  return (
    <section className="container py-5">
      <div className="row">

        <div className="col-lg-3 mb-4">
          <div className="filter-box p-4">

            <h3 className="filter-box-mb-3">Collections</h3>

            <ul className="list-unstyled">
              <li>120 ml Kiwi Bowl</li>
              <li>180 ml Round Bowl</li>
              <li>240 ml Round Bowl</li>
              <li>350 ml Round Bowl</li>
              <li>500 ml Oval Container</li>
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
                          to={`/bowl-details/${item.detail}`}
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

export default BowlCollection;