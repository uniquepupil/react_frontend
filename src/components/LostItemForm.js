// import React, { useState } from "react";

// const LostItemForm = () => {
//   const [formData, setFormData] = useState({
//     personName: "",
//     gmailId: "",
//     contactNo: "",
//     location: "",
//     lostItemName: "",
//     description: "",
//     dateLost: "",
//   });

//   const [confirmation, setConfirmation] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setConfirmation("Your report has been submitted successfully.");
//     // Add logic here to handle form submission (e.g., sending data to a server)
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "40px",
//     backgroundColor: "#f9f9f9",
//   };

//   const formContainerStyle = {
//     width: "50%",
//     backgroundColor: "#fff",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//   };

//   const formGroupStyle = {
//     marginBottom: "15px",
//   };

//   const labelStyle = {
//     display: "block",
//     fontSize: "1rem",
//     marginBottom: "8px",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     fontSize: "1rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   };

//   const textareaStyle = {
//     width: "100%",
//     padding: "10px",
//     fontSize: "1rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     height: "120px",
//     resize: "none",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   };

//   const confirmationStyle = {
//     marginTop: "20px",
//     fontSize: "1.2rem",
//     color: "green",
//     fontWeight: "bold",
//   };

//   const imageContainerStyle = {
//     width: "40%",
//     textAlign: "center",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={formContainerStyle}>
//         <h1>Report a Lost Item</h1>
//         <form onSubmit={handleSubmit}>
//           <div style={formGroupStyle}>
//             <label htmlFor="personName" style={labelStyle}>
//               Your Name:
//             </label>
//             <input
//               type="text"
//               id="personName"
//               name="personName"
//               value={formData.personName}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="gmailId" style={labelStyle}>
//               Gmail ID:
//             </label>
//             <input
//               type="email"
//               id="gmailId"
//               name="gmailId"
//               value={formData.gmailId}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="contactNo" style={labelStyle}>
//               Contact Number:
//             </label>
//             <input
//               type="tel"
//               id="contactNo"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="location" style={labelStyle}>
//               Where It Was Lost:
//             </label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="lostItemName" style={labelStyle}>
//               Lost Item:
//             </label>
//             <input
//               type="text"
//               id="lostItemName"
//               name="lostItemName"
//               value={formData.lostItemName}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="description" style={labelStyle}>
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               style={textareaStyle}
//             ></textarea>
//           </div>

//           <div style={formGroupStyle}>
//             <label htmlFor="dateLost" style={labelStyle}>
//               Date When Lost:
//             </label>
//             <input
//               type="date"
//               id="dateLost"
//               name="dateLost"
//               value={formData.dateLost}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>

//           <button type="submit" style={buttonStyle}>
//             Submit
//           </button>
//         </form>
//         {confirmation && <div style={confirmationStyle}>{confirmation}</div>}
//       </div>

//       <div style={imageContainerStyle}>
//       <img
//   src="/images/lost-card.png"  // Relative path from the public folder
//   alt="Lost and Found"
//   style={imageStyle1}
// />
//       </div>
//     </div>
//   );
// };

// export default LostItemForm;
