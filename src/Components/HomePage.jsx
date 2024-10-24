// eslint-disable-next-line no-unused-vars
import React from "react";
import work_img from "../assets/HomePageImage-1.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <h3>Why work with us?</h3>
      <div className="work">
        <img src={work_img} alt="HomePageImg-1" />
        <div>
          <p className="work-para">
            we foster a collaborative and inclusive culture that values
            creativity, diversity, and growth. Our team members are encouraged
            to share ideas and take ownership of their projects, contributing to
            an environment where innovation thrives. We believe in work-life
            balance and offer flexible schedules, remote work options, and
            generous paid time off. Our comprehensive benefits package includes
            health and wellness programs, professional development
            opportunities, and employee recognition initiatives, ensuring that
            every team member feels valued and supported in their career
            journey.
          </p>
        </div>
      </div>
      <div className="build-career">
        <a href="#">BUILD YOUR CARRIER WITH KRIAD</a>
      </div>
    </div>
  );
};

export default HomePage;
