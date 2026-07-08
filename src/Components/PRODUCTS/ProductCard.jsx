// import React from "react";
// import environmentFriendly from "../../assets/environment-friendly.JPEG";
// import freezerSafe from "../../assets/freezer-safe.JPEG";
// import durable from "../../assets/durable.jpeg";
// import safeNonToxic from "../../assets/safe-non-toxic-e1740695466749.JPEG";
// import plantFiber from "../../assets/plant-fiber.JPEG";
// import cancerFree from "../../assets/cancer-free-chemical-free.JPEG";
// import biodegradable from "../../assets/biodegradable.JPEG";

// function ProductCard() {
//   return (
//     <div className="ProductCard-section">
//       <div className="slider">

//         <div className="slide-track">

//           <div className="Product-card">
//             <img src={environmentFriendly} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={freezerSafe} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={durable} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={safeNonToxic} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={plantFiber} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={cancerFree} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={biodegradable} alt="" />
//           </div>

//           <div className="Product-card bg-card">
//             <h2>100%<br />Eco Friendly</h2>
//           </div>

//           {/* Duplicate for infinite loop */}

//           <div className="Product-card">
//             <img src={environmentFriendly} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={freezerSafe} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={durable} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={safeNonToxic} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={plantFiber} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={cancerFree} alt="" />
//           </div>

//           <div className="Product-card">
//             <img src={biodegradable} alt="" />
//           </div>

//           <div className="Product-card bg-card">
//             <h2>100%<br />Eco Friendly</h2>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";

import environmentFriendly from "../../assets/environment-friendly.JPEG";
import freezerSafe from "../../assets/freezer-safe.JPEG";
import durable from "../../assets/durable.jpeg";
import safeNonToxic from "../../assets/safe-non-toxic-e1740695466749.JPEG";
import plantFiber from "../../assets/plant-fiber.JPEG";
import cancerFree from "../../assets/cancer-free-chemical-free.JPEG";
import biodegradable from "../../assets/biodegradable.JPEG";

const products = [
  {
    image: environmentFriendly,
    title: "Environment Friendly",
    desc: "100% Eco Friendly Product",
  },
  {
    image: freezerSafe,
    title: "Freezer Safe",
    desc: "Safe for Cold Storage",
  },
  {
    image: durable,
    title: "Durable",
    desc: "Strong & Long Lasting",
  },
  {
    image: safeNonToxic,
    title: "Safe & Non Toxic",
    desc: "No Harmful Chemicals",
  },
  {
    image: plantFiber,
    title: "Plant Fiber",
    desc: "Made From Natural Fiber",
  },
  {
    image: cancerFree,
    title: "Chemical Free",
    desc: "Healthy & Safe Choice",
  },
  {
    image: biodegradable,
    title: "Biodegradable",
    desc: "Eco Friendly Disposal",
  },
  {
    bg: true,
    title: "100%\nEco Friendly",
  },
];

function ProductCard() {
  return (
    <div className="ProductCard-section">
      <div className="slider">
        <div className="slide-track">

          {[...products, ...products].map((item, index) => (
            item.bg ? (
              <div className="Product-card bg-card" key={index}>
                <h2>
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
              </div>
            ) : (
              <div className="Product-card" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="card-overlay">
                  <div className="overlay-content">

                    {/* Icon yaha add karna */}
                    {/* <img src={icon} className="overlay-icon" alt="" /> */}

                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                  </div>
                </div>
              </div>
            )
          ))}

        </div>
      </div>
    </div>
  );
}
  
export default ProductCard;