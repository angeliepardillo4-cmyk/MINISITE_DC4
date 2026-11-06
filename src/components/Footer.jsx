import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} React Mini Site Activity. All rights reserved.</p>
    </footer>
  );
}