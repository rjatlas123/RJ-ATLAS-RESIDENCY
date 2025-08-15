import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://rj-residency-server.vercel.app/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


   return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2 className="contact-title">
          <span className="gold-text">Contact</span> <span className="white-text">Us</span>
        </h2>
        <p className="contact-description">
          We’re here to help and answer any question you might have.  
          We look forward to hearing from you.
        </p>
      </div>

      <div className="contact-container">
        
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>123 Main Street, Your City</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 9876543210</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <p>info@example.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">
            Send <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useState } from "react";
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/contact/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (data.success) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Failed to send message: " + (data.error || "Unknown error"));
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       className="contact-page bg-gray-900 text-white py-16 px-6 md:px-20"
//       id="contact"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Contact Form */}
//         <div className="contact-form">
//           <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="block mb-2 font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 font-medium">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-semibold transition-all ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div className="contact-details">
//           <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//           <p className="mb-4">
//             Have questions about our AI services or want to discuss your project?
//             We’d love to hear from you.
//           </p>

//           <ul className="space-y-4">
//             <li className="flex items-center p-1">
//               <FaMapMarkerAlt className="text-sky-400 mr-3" />
//               Thalassery, Kerala, India
//             </li>
//             <li className="flex items-center p-1">
//               <FaEnvelope className="text-sky-400 mr-3" />
//               info@rjatlas.com
//             </li>
//             <li className="flex items-center p-1">
//               <FaPhoneAlt className="text-sky-400 mr-3" />
//               +91 98765 43210
//             </li>
//           </ul>

//           <div className="mt-6">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.294015099269!2d75.5702514!3d11.746302799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba1d6e6d3a9efab%3A0x6e5f6c9b8964f8e4!2sThalassery%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1691669737765!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               className="rounded border-0"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
