import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    driverType: "",
    location: "Alabama",
    experience: "No",
    about: "",
    resume: null,
    cdl: null,
    card: null,
    agreeTerms: false,
    agreeSMS: false,
  });

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApplicationData((applicationData) => ({
      ...applicationData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setApplicationData((applicationData) => ({
      ...applicationData,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in applicationData) {
      formDataToSend.append(key, applicationData[key]);
    }
    axios
      .post("https://emailsender-9z5c.onrender.com/", formDataToSend)
      .then((response) => {
        console.log("Response:", response);
        alert("Your application has been submitted");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your application");
      });
  };

  return (
    <div className="application-form">
      <h1 style={{fontSize: "2vw"}}>Begin Your New Trucking Journey with Seven Stars Today</h1>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Your Full Name"
          value={applicationData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={applicationData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          placeholder="Your Phone"
          value={applicationData.phoneNumber}
          onChange={handleChange}
        />
        <div>
          <label className="label">Type of driver:</label>
          <label className="label">
            <input
              type="radio"
              name="driverType"
              value="CD"
              onChange={handleChange}
            />
            Owner Operator
          </label>
          <label className="label">
            <input
              type="radio"
              name="driverType"
              value="LO"
              onChange={handleChange}
            />
            Lease Operator
          </label>
          <label className="label">
            <input
              type="radio"
              name="driverType"
              value="OO"
              onChange={handleChange}
            />
            Company Driver
          </label>
        </div>

        <select
          id="state"
          name="location"
          value={applicationData.location}
          onChange={handleChange}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <div>
          <label className="label">Do you have 1 year experience?</label>
          <label className="label">
            <input
              type="radio"
              name="experience"
              value="Yes"
              checked={applicationData.experience === "Yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label className="label">
            <input
              type="radio"
              name="experience"
              value="No"
              checked={applicationData.experience === "No"}
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>

        <label className="label">Upload your CDL:</label>
        <input
        className="file_input"
          type="file"
          id="my_file"
          name="cdl"
          onChange={handleFileChange}
        />

        <textarea
          id="about"
          name="about"
          placeholder="Tell us a little bit about yourself"
          value={applicationData.about}
          onChange={handleChange}
        />
        <label className="label">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={applicationData.agreeTerms}
            onChange={handleChange}
          />
          Terms of use
        </label>
        <label className="label">
          <input
            type="checkbox"
            name="agreeSMS"
            checked={applicationData.agreeSMS}
            onChange={handleChange}
          />
          I agree to receive SMS/TEXT based on my data
        </label>
        <button
          type="submit"
          disabled={!applicationData.agreeTerms || !applicationData.agreeSMS}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
