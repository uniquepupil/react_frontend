// Home.js
import React from 'react';
import '../styles/style.css';
import "../styles/card.css";
import Footer from '../components/footer';
import RecentReturns from '../components/RecentReturns';
import RecentFound from '../components/RecentFound';
import RecentLostItems from '../components/RecentLostItem';

//import LostItemForm from './LostItemForm';

const Home = () => {
  return (
    <div className='body'>
  <div style={rowfirst}>
      {/* Left Column with Card */}
      <div style={columnfirst}>
        <div style={leftCardStyle}>
          <h1 className="got-lost-heading">
            <span style={gotlost}>GOT LOST</span>
          </h1>
          <p>
            Something lost its way and came to you just to show the world how
            honest you are!
          </p>
          <p>
            Or if you've lost something, just chill! People here are damnnn
            cool!
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div style={columnfirst}>
        <img
          src="images/lost-and-found.png"
          alt="Lost and Found"
          style={imageStyle}
        />
      </div>
    </div>

    {/* 2nd row */}
    <div style={rowfirst}>
      {/* Left Column with Card */}
      <div style={columnfirst}>
        <img
          src="images/community.png"
          alt="Lost and Found"
          style={imageStyle}
        />
      </div>
      {/* Right Column */}
  

      <div style={columnfirst}>
        <div style={leftCardStyle}>
          <h1 className="got-lost-heading">
            <span style={gotlost}>WHat we do</span>
          </h1>
          <p>
          We try to reduce students stress somewhat by heping them if they
              lost something precious on the college/hostle grounds. <br />
              There are two sections where you can go to one is the 
              <b><a href="forms/lost.html"> LOST</a></b> section and the
              other is the
              <b><a href="forms/founddemo.html"> FOUND</a></b> section. You can
              inform other people about what precious belonging you’ve lost and
              ask your fellow students for help and if you’ve found something
              then you can be of help to somebody else. Both the sections have
              their respective instructions. <br />
              And the faculty involvement in this procedure is about nill, so it
              also helps in creating a strong bond between the kids and also to
              maintain transparency.
          </p>
        </div>
      </div>
    </div>
    {/* 3rd row */}
    <div style={centerStyle}>
      <div>
        <text>Our services</text>
      </div>
    </div>
    <div style={rowfirst}>
      {/* Left Column with Card */}
      <div style={columnfirst}>
      <div className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card " style={card}>
      <h5 className="card-title" style={cardtitle}>
        Lost
      </h5>
      <ul className="my-3">
        <li style={textLeft}>
          Only the property lost on College or Hostel can be reported.
        </li>
        <li style={textLeft}>
          Maximum time for filing any lost report should be 2 days.
        </li>
        <li style={textLeft}>
          Try to be as much detailed as you can be.
        </li>
        <li style={textLeft}>
          Head towards the form below if you have lost your property.
        </li>
      </ul>
      <div className="shrink">
      <div className="button-container">
        <a className="learn-more px-5" href="forms/lost.html">
          Next
        </a>
        </div>
      </div>
    </div>
      </div>

      {/* Right Column */}
      <div style={columnfirst}>
        <img
          src="images/lost-card.png"
          alt="Lost and Found"
          style={imageStyle1}
        />
      </div>
    </div>

{/* 4th row */}
<div style={rowfirst}>
      {/* Left Column with Card */}
      <div style={columnfirst}>
        <img
          src="images/found-card.png"
          alt="Lost and Found"
          style={imageStyle1}
        />
      </div>

      {/* Right Column */}
 

      <div style={columnfirst}>
      <div className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card " style={card}>
      <h5 className="card-title" style={cardtitle}>
      Found
      </h5>
      <ul className="my-3">
        <li style={textLeft}>
        Below is the form, if you've found a lost property on
                  college/hostel.
        </li>
        <li style={textLeft}>
        Please try to report as soon as possible so that you can help someone in need.
        </li>
        <li style={textLeft}>
        The involvement of faculty will be kept as minimum as possible
                  by our side, so that this might also help in student's ability
                  to build connections.
        </li>
        <li style={textLeft}>
        If nobody comes forward for the property you found, only then
                  the faculty will get involved.
        </li>
      </ul>
      <div className="shrink">
      <div className="button-container">
        <a className="learn-more px-5" href="forms/lost.html">
          Next
        </a>
        </div>
      </div>
    </div>
      </div>
    </div>
{/* 5th row */}
<RecentLostItems/>
<RecentReturns/>
<RecentFound/>
  {/* 6th row */}
  <div style={rowfirst}>
      {/* Left Column with Card */}
      <div style={columnfirst}>
        <img
          src="images/mission.png"
          alt="mission image"
          style={imageStyle}
        />
      </div>
      {/* Right Column */}
  

      <div style={columnfirst}>
        <div style={leftCardStyle}>
          <h1 className="got-lost-heading">
            <span style={gotlost}>OUR MISSION</span>
          </h1>
          <p style={mission}>
          Our mission is to make the students community more trustworthy and
              faithful and this place a safe space for all of your precious
              belongings. <br />
              We all know the students have to bring many sorts of precious
              belongings to college for many reasons and there are many chances
              of loosing it which might give the students some permanent scars
              because who knows what insane amount of value a little thing might
              hold in a person’s life but don’t worry that’s where our page and
              your fellow collegemates come forward to help you ! We don’t want
              you to be stressed if you’ve lost something on the college and
              hostel grounds we just want you to fill the form under the
              <b><a href="forms/lostForm.html"> LOST</a></b> section so that we
              can get you out of this stress ASAP. <br />
              Even this page is created and managed by some of the students, so
              your fellow collegemates have already started helping you in a
              way.
          </p>
        </div>
      </div>
    </div>
  
{/* <LostItemForm/> */}
      </div>

  );
};
const rowfirst = {
  display: "flex", // Flexbox for horizontal layout
  width: "100%", // Full width
  padding: "20px",
};

const columnfirst = {
  flex: "1", // Equal space for both columns
  padding: "20px", // Adds spacing within each column
  boxSizing: "border-box", // Ensures padding doesn't affect width
};
const leftCardStyle = {

  borderRadius: "10px", // Rounded corners
 // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for card
  padding: "20px", // Space inside the card
  display: "flex", // Flexbox to center content
  flexDirection: "column", // Stack content vertically
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
  height: "100%", // Full height of the column
};
const gotlost = {
  color: "#030027",
  fontFamily: "'Yeseva One', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  fontSize: "5rem",
  marginBottom: "20px",
  textAlign: "center",
};
// const topp = {
//   fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
//   marginBottom: "20px", // Adds space below heading
// };

const imageStyle = {
  width: "100%", // Ensures the image takes full width of the column
  height: "auto", // Maintains aspect ratio
};
const imageStyle1 = {
  width: "80%", // Ensures the image takes full width of the column
  height: "auto", // Maintains aspect ratio
};

// const gotlost={
//   color: '#030027',
//   size:100,
//   //font-family: 'Yeseva One', cursive;
//   //font-size: 5rem;
// }
const centerStyle = {
  display: "flex", // Flexbox for alignment
  justifyContent: "center", // Centers horizontally
  alignItems: "center", // Centers vertically
  height: "40vh", // Full viewport height for vertical centering
  textAlign: "center", // Ensures text is centered
  fontSize: "4rem", // Adjust font size as needed
  fontFamily: "Arial, sans-serif", // Optional font
};
const cardtitle = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 600,
  fontSize: "3rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "white",
  textAlign: "center", 
  marginTop: "30px",
  marginBottom: "30px",

};
  const textLeft = {
  textAlign: "left",
  marginBottom: "1rem",
};
const card={

}
const mission={
  textAlign: "justify",
  marginBottom: "1rem",
}

export default Home;
