import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Cloud<span>Connect</span></h1>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <style>{`
        .navbar {
          background: linear-gradient(90deg, #4f46e5, #9333ea, #ec4899);
          padding: 1rem;
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          letter-spacing: 1px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .logo span {
          color: #facc15;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links li a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background-color: #facc15;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-links li a:hover {
          color: #facc15;
        }

        .nav-links li a:hover::after {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;