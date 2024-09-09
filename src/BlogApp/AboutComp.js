import React from 'react';
import abdulkadirpathan from './Abdul-Kadir-Khan.png';

const AboutComp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          {/* Owner's Profile Image */}
          <img 
            src={abdulkadirpathan} 
            alt="Owner's Profile" 
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          {/* Blog Owner's Details */}
          <h2 className="mb-3">About the Blog Owner</h2>
          <p>
            Hi! I’m Abdul Kadir Khan, the creator and writer behind this blog. 
            I'm passionate about sharing valuable content related to tech, programming, 
            and personal development. With 2.5 years of experience in software development, 
            I aim to help readers enhance their skills and stay up-to-date with the latest trends.
          </p>
          <p>
            Feel free to reach out if you have any questions or just want to say hello!
          </p>
          {/* Contact Info */}
          <div className="mt-4">
            <h5>Contact Information</h5>
            <p><i className="fas fa-envelope"></i> abdulkadirk059@gmail.com</p>
            <p><i className="fas fa-phone"></i> +917985132148</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
