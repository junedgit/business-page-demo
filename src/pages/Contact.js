// src/pages/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We would love to hear from you. Please fill out the form below to get in
        touch with us.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
