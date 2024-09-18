import React from 'react'

export default function Subscribe() {
  return (
    <>
    <div style={styles.container}>
      <div style={styles.content}>
        <h3 style={styles.headingTop}>Our Subscribe</h3>
        <h2 style={styles.heading}>Subscribe To Get The Latest <br></br>Promo from Healthy Buy</h2>
        <p style={styles.paragraph}>
          We recommended you to subscribe to our promo program,<br></br> drop your email below to get daily updates about us
        </p>
        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email address"
            style={styles.input}
          />
          <button style={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
    </>
  );
};


const styles = {
  container: {
    backgroundColor: '#E9FFE4',
    padding: '40px 0', // Added padding for top and bottom only
    textAlign: 'center',
    width: '100%', // Full width
  },
  content: {
    maxWidth: '800px', // Center the content and restrict the width
    margin: '0 auto',
    padding: '0 20px', // Padding for responsiveness
  },
  headingTop: {
    color: '#00A33A',
    marginBottom: '10px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '30px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '18px',
    border: '1px solid #ccc',
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#00A33A',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '18px',
    cursor: 'pointer',
  },
};



