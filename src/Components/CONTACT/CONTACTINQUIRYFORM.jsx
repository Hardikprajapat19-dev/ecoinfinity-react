import React from 'react'
import CONTACTINQUIRYFORMImg from "../../assets/001-1.jpeg"
function CONTACTINQUIRYFORM() {
    return (
        <>

            <div className="CONTACTINQUIRYFORM-section">

                <div className="CONTACTINQUIRYFORM-image">

                    <img
                        src={CONTACTINQUIRYFORMImg}
                        alt="CONTACTINQUIRYFORMImg"/>

                    <div className="CONTACTINQUIRYFORM-form">

                        <div className="container h-100">

                            <div className="row h-100 align-items-center">

                                <div className="col-lg-5"data-animate="fade-up">

                                    <div className="contact-left">

                                        <h2>Contact Us</h2>

                                        <p>
                                            We'd love to hear from you. Please get in touch with us.
                                        </p>

                                        <div className="mb-4">
                                            <h5>Address</h5>
                                            <p>Indore, Madhya Pradesh</p>
                                        </div>

                                        <div className="mb-4">
                                            <h5>Email</h5>
                                            <p>prajapathardik19@.com</p>
                                        </div>

                                        <div>
                                            <h5>Phone</h5>
                                            <p>+91 7389334205</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-7" data-animate="fade-up">

                                    <div className="contact-right">

                                        <form>

                                            <div className="row">

                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your Name"/>
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"/>
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone" />
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Company" />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <textarea
                                                        className="form-control"
                                                        rows="5"
                                                        placeholder="Message" >                                                        
                                                        </textarea>
                                                </div>

                                                <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success px-5">
                                                            
                                                        Submite
                                                    </button>
                                                </div>

                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div>
                
            </div>
        </>
    );
}

export default CONTACTINQUIRYFORM;