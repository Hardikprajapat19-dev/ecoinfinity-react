
import React from "react";

function InquirySection() {
  return (
    <section className="inquiry-section">
      <div className="container">

        <h2 className="inquiry-title" data-animate="fade-up">get your inquiry now</h2>

        <div className="inquiry-box">

          <div className="row w-100">

            <div className="col-lg-4">
              <div className="inquiry-info">
                <h3 data-animate="fade-up">We’d Love to Hear From You</h3>

                <p data-animate="fade-up">
                  Have a question, suggestion, or need more information?
                  Fill out the form and our team will get back to you shortly.
                </p>

                <div className="info-icons">
                  <div>
                    <h4><i className="fa-solid fa-bolt"></i>
                    </h4>
                    <span>Quick Response</span>
                  </div>

                  <div>
                    <h4><i className="fa-solid fa-headphones"></i>
                    </h4>
                    <span>Expert Support</span>
                  </div>

                  <div>
                    <h4><i className="fa-solid fa-leaf"></i></h4>
                    <span>Eco Focused</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="inquiry-form">
                <form>

                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Name*" />
                    </div>

                    <div className="col-md-6">
                      <input type="email" placeholder="Email*" />
                    </div>
                  </div>

                  <input type="text" placeholder="Phone Number*" />

                  <input type="text" placeholder="Company Name*" />

                  <input type="text" placeholder="Subject*" />

                  <textarea rows="5" placeholder="Message*" />

                  <button type="submit">
                    Submit Inquiry
                  </button>

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default InquirySection;