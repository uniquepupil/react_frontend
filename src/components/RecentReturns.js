import React from "react";


const RecentReturns = () => {
  const sectionStyle = {
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#f8f9fa", // Light background color
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "24px",
    paddingTop: "40px",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const hrStyle = {
    borderTop: "2px solid #6c757d", // Gray horizontal line
    width: "80%",
    margin: "auto",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "auto",
  };

  const cardGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px", // Add spacing between cards
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1 1 calc(33.333% - 16px)", // Three cards per row
    maxWidth: "calc(33.333% - 16px)",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const cardImgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const cardBodyStyle = {
    padding: "16px",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
  };

  const cardFooterStyle = {
    padding: "8px 16px",
    backgroundColor: "#f1f1f1",
    fontSize: "0.9rem",
    color: "#6c757d",
  };

  const bottomStyle = {
    textAlign: "center",
    marginTop: "40px",
    paddingBottom: "40px",
  };

  const learnMoreStyle = {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  return (
    <section style={sectionStyle}>
      <div style={headingStyle}>
        RECENT RETURNS
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={hrStyle} />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={cardGroupStyle}>
          <div style={cardStyle}>
            <img
              src="images/iphone.webp"
              alt="Cellphone"
              style={cardImgStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>CELLPHONE</h5>
              <p>
                Return By: <strong>Shivank Singh</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 3 mins ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/shivank.jpg" alt="Shivank Singh" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>SHIVANK SINGH</h5>
              <p>
                Return By: <strong>Arvind</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 2 days ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/mouse.jpg" alt="Mouse" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>MOUSE</h5>
              <p>
                Return By: <strong>Abhay</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 3 days ago</small>
            </div>
          </div>
        </div>

        <div style={{ ...cardGroupStyle, marginTop: "16px" }}>
          <div style={cardStyle}>
            <img src="images/speaker.jpg" alt="Speaker" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>SPEAKER</h5>
              <p>
                Return By: <strong>Dr. Ashwini Sapkal (1000 RS. fine)</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 5 days ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="images/extender.jpg"
              alt="MacBook Port Extender"
              style={cardImgStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>MacBook Port Extender</h5>
              <p>
                Return By: <strong>Unknown</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 7 days ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/car.jpg" alt="Car" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>CAR</h5>
              <p>
                Return By: <strong>Garima</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 8 days ago</small>
            </div>
          </div>
        </div>
      </div>
      <div style={bottomStyle}>
        <a
          href="https://aitlostandfound.netlify.app/"
          style={learnMoreStyle}
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default RecentReturns;
