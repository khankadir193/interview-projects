import React from 'react';

const ContactComp = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Get in Touch</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Contact Information */}
          <h4>Contact Information</h4>
          <p><i className="fas fa-user"></i> Abdul Kadir Khan</p>
          <p><i className="fas fa-envelope"></i> abdulkadir@example.com</p>
          <p><i className="fas fa-phone"></i> +1234567890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</p>
        </div>
        <div className="col-md-6">
          {/* Contact Form */}
          <h4>Send a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
