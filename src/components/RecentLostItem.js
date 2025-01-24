import React, { useEffect, useState } from "react";

const RecentLostItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionStyle = {
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#f8f9fa",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "24px",
    paddingTop: "40px",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const hrStyle = {
    borderTop: "2px solid #6c757d",
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
    gap: "16px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1 1 calc(33.333% - 16px)",
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

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await fetch("/api/recent-lost-items"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLostItems();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", padding: "40px", color: "red" }}>{error}</div>;
  }

  return (
    <section style={sectionStyle}>
      <div style={headingStyle}>
        RECENT LOST ITEMS
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={hrStyle} />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={cardGroupStyle}>
          {items.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img
                src={item.image || "/images/default-placeholder.png"} // Default placeholder
                alt={item.lost_item_name}
                style={cardImgStyle}
              />
              <div style={cardBodyStyle}>
                <h5 style={cardTitleStyle}>{item.lost_item_name}</h5>
                <p>Reported By: <strong>{item.name}</strong></p>
                <p>Location: {item.location}</p>
              </div>
              <div style={cardFooterStyle}>
                <small>Date Lost: {new Date(item.date_lost).toLocaleDateString()}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={bottomStyle}>
        <a href="/view-all-lost-items" style={learnMoreStyle}>View More</a>
      </div>
    </section>
  );
};

export default RecentLostItems;
