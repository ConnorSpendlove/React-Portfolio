import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate name field
    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      return;
    }

    // Validate email field
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address' }));
      return;
    }

    // Validate message field
    if (!message.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
      return;
    }

    // Send email or handle form submission here
    // For now, just display a success message
    setSuccessMessage('Form submitted successfully! (Note this feature is not fully implemented)');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Contact Form</h2>
        <p style={styles.wipMessage}><em>*Feature is a work in progress and will be implemented soon.</em></p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.name.trim()) {
                setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
              }
            }}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => {
              const { email } = formData;
              if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address' }));
              }
            }}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.message.trim()) {
                setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
              }
            }}
            style={styles.input}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
        {successMessage && <p style={styles.success}>{successMessage}</p>}
      </div>
      <div style={styles.card}>
        <h2>Contact Information</h2>
        <div style={styles.contactInfo}>
          <p>Email: connor.spendlove44@gmail.com</p>
          <p>Phone: (435) 979-1254</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#816e94',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    width: '100%', // Added to make it responsive
    maxWidth: '400px', // Added to limit width on larger screens
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%', // Added to make it responsive
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  success: {
    color: 'green',
    marginTop: '10px',
  },
  contactInfo: {
    textAlign: 'center',
  },
  wipMessage: {
    fontStyle: 'italic',
    color: '#555',
  },
};

export default Contact;
