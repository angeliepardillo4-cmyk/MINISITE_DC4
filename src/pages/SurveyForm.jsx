import React, { useState } from 'react';

export default function SurveyForm() {
  const [survey, setSurvey] = useState({
    username: '',
    favoriteFramework: 'React',
    experienceLevel: 'Beginner',
    newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSurvey((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <h1>Developer Feedback Survey</h1>
      {submitted ? (
        <div className="success-box">
          <h3>Survey Submitted Successfully!</h3>
          <p><strong>Name:</strong> {survey.username}</p>
          <p><strong>Favorite Framework:</strong> {survey.favoriteFramework}</p>
          <p><strong>Experience:</strong> {survey.experienceLevel}</p>
          <p><strong>Subscribed to Newsletter:</strong> {survey.newsletter ? 'Yes' : 'No'}</p>
          <button className="btn secondary" onClick={() => setSubmitted(false)}>Retake Survey</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Your Name:</label>
            <input 
              type="text" 
              name="username" 
              value={survey.username} 
              onChange={handleChange} 
              required 
              placeholder="Full Name"
            />
          </div>
          
          <div className="form-group">
            <label>Favorite Frontend Library/Framework:</label>
            <select name="favoriteFramework" value={survey.favoriteFramework} onChange={handleChange}>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
              <option value="Svelte">Svelte</option>
            </select>
          </div>

          <div className="form-group">
            <label>Experience Level:</label>
            <div className="radio-group">
              <label><input type="radio" name="experienceLevel" value="Beginner" checked={survey.experienceLevel === 'Beginner'} onChange={handleChange} /> Beginner</label>
              <label><input type="radio" name="experienceLevel" value="Intermediate" checked={survey.experienceLevel === 'Intermediate'} onChange={handleChange} /> Intermediate</label>
              <label><input type="radio" name="experienceLevel" value="Advanced" checked={survey.experienceLevel === 'Advanced'} onChange={handleChange} /> Advanced</label>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                name="newsletter" 
                checked={survey.newsletter} 
                onChange={handleChange} 
              /> Subscribe to Weekly Dev Newsletter
            </label>
          </div>

          <button type="submit" className="btn secondary">Submit Survey</button>
        </form>
      )}
    </div>
  );
}