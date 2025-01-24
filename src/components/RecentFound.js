import React from "react";


const RecentFound = () => {
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
        RECENT FOUND
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={hrStyle} />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={cardGroupStyle}>
          <div style={cardStyle}>
            <img
              src="images/parikshit.jpg"
              alt="Wallet"
              style={cardImgStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>WALLET</h5>
              <p>
                Found By: <strong>Priya Sharma</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 2 mins ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/mouse.jpg" alt="Jacket" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>JACKET</h5>
              <p>
                Found By: <strong>Ravi Kumar</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 1 hour ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/lost-card.jpg" alt="Laptop" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>LAPTOP</h5>
              <p>
                Found By: <strong>Aman</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 3 hours ago</small>
            </div>
          </div>
        </div>

        <div style={{ ...cardGroupStyle, marginTop: "16px" }}>
          <div style={cardStyle}>
            <img
              src="images/watch.jpg"
              alt="Watch"
              style={cardImgStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>WATCH</h5>
              <p>
                Found By: <strong>John Doe</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 1 day ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="images/glasses.jpg"
              alt="Glasses"
              style={cardImgStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>GLASSES</h5>
              <p>
                Found By: <strong>Neha Verma</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 2 days ago</small>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="images/keys.jpg" alt="Keys" style={cardImgStyle} />
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>KEYS</h5>
              <p>
                Found By: <strong>Saurabh</strong>
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>Last updated 3 days ago</small>
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

export default RecentFound;