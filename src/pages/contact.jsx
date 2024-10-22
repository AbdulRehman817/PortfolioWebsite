"use client";

import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { collection, db, addDoc } from "../../Firebase/firebase.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const userName = useRef();
  console.log(userName);
  const userEmail = useRef();
  console.log(userEmail);

  const userMessage = useRef();
  console.log(userMessage);

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to console (you can replace this with an API call to Formspree or another service)
    console.log("Form submitted:", formData);

    // Simulate a successful submission (you can send this data to a service instead)
    setSubmitted(true);
  };
  const addData = async () => {
    const docRef = await addDoc(collection(db, "userData"), {
      Email: userEmail.current.value,
      Name: userName.current.value,
      Message: userMessage.current.value,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <>
      <div id="contact">
        <div
          className="form-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black",
          }}
        >
          {submitted ? (
            <div
              style={{
                color: "white",

                padding: "2rem",
                borderRadius: "10px",
                background: "#D43F52",
                fontSize: "25px",
              }}
            >
              <h3>Thank you for your message!</h3>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#000",
                width: "800px",
                padding: "2rem",
                borderRadius: "10px",
              }}
            >
              <h2 className="text-white mb-[1.5rem] text-center text-3xl font-bold">
                Contact Me
              </h2>
              {/* Added heading */}
              <div>
                <input
                  ref={userName}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div>
                <input
                  ref={userEmail}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div>
                <textarea
                  ref={userMessage}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                ></textarea>
              </div>
              <button
                onClick={addData}
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#e84c57",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                SEND ME
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
