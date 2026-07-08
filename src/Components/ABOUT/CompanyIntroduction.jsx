
import React from "react";

const companyData = [
  {
    text: "As an industry leader, we take pride in our state-of-the-art infrastructure facility, which is strategically divided into dedicated sections for manufacturing, quality testing, research and development, warehouse management, and more. This enables us to optimize our operational efficiency and ensures a seamless workflow.",
    cardClass: "left-card",
    animation: "fade-left",
  },
  {
    text: "Our R&D unit, backed by a team of highly skilled professionals, plays a vital role in keeping us updated with the latest technological breakthroughs. They meticulously analyze industry trends, identify areas of improvement, and develop innovative solutions to enhance our product range.",
    cardClass: "right-card",
    animation: "fade-right",
  },
  {
    text: "Our forward-thinking approach has enabled us to make significant strides in the eco-friendly, biodegradable tableware industry, dedicating ourselves to producing environmentally responsible products that cater to the evolving needs of both consumers and businesses.",
    cardClass: "left-card",
    animation: "fade-left",
  },
  {
    text: "Our state-of-the-art manufacturing facility boasts cutting-edge Fully Automatic machinery, allowing for the efficient, large-scale production of sustainable tableware. By incorporating innovative compostable material processing and eco-friendly production systems, our infrastructure enables seamless manufacturing of diverse biodegradable pulp-molded tableware items, such as compostable plates and bowls.",
    cardClass: "right-card",
    animation: "fade-right",
  },
];

function CompanyIntroduction() {
  return (
    <section className="CompanyIntroduction-section">
      {companyData.map((item, index) => (
        <div
          key={index}
          className={`CompanyIntroduction-card ${item.cardClass}`}
          data-animate={item.animation}>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default CompanyIntroduction;