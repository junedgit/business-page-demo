// src/pages/Support.js
import React from "react";

function Support() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="mb-4">
        If you need assistance, our support team is here to help. Please reach
        out to us via email or phone.
      </p>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          Email:{" "}
          <a href="mailto:support@businessname.com" className="text-blue-500">
            support@businessname.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-500">
            +1-234-567-890
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Support;
