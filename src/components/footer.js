import React from "react";
  
const Footer = () => {
  const footerStyle = {
    backgroundColor: "#343a40", // Dark background
    color: "#fff", // Light text
    padding: "10px 0", // Padding for spacing
    paddingbottom:100,
    textAlign: "center", // Center-align text
    //width: "100vw", // Full viewport width
    position: "relative", // Ensure proper positioning
    //left: "0", // Align to the left edge
    //margin: "0", // Remove any margin
  };

  const hrStyle = {
    borderColor: "#6c757d", // Light gray color for the horizontal line
    margin: "10px auto", // Auto margin for consistent spacing
    width: "80%", // Line width
  };

  const brandStyle = {
    fontSize: "1.2rem", // Slightly larger font
    fontWeight: "bold", // Bold font for emphasis
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit text color
  };

  return (
    <footer id="page-footer" style={footerStyle}>
      <div className="brand">
        <a style={brandStyle} href="#">
          AIT LOST AND FOUND
        </a>
      </div>
      <hr style={hrStyle} />
    </footer>
  );
};

export default Footer;
