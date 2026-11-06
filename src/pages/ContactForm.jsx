import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <h1>Contact Us Form</h1>
      {submitted ? (
        <div className="success-box">
          <h3>Thank you, {formData.name}!</h3>
          <p>We have received your message and will get back to you at <strong>{formData.email}</strong>.</p>
          <button className="btn primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Type your message here..."
            />
          </div>
          <button type="submit" className="btn primary">Submit Form</button>
        </form>
      )}
    </div>
  );
}