// src/pages/Home.js
import React from "react";

const blogPosts = [
  {
    title: "How to Grow Your Business in 2024",
    excerpt:
      "Discover key strategies and tips to expand your business and stay ahead of the competition in 2024.",
    date: "August 10, 2024",
    image: "/b1.jpg",
  },
  {
    title: "The Importance of Customer Service",
    excerpt:
      "Learn why exceptional customer service is crucial for your business's success and how to improve it.",
    date: "August 8, 2024",
    image: "/b2.jpg",
  },
  {
    title: "Top Marketing Trends for This Year",
    excerpt:
      "Stay updated with the latest marketing trends that can drive growth and increase brand awareness.",
    date: "August 5, 2024",
    image: "/b3.jpg",
  },
  {
    title: "How to Use Social Media Effectively",
    excerpt:
      "Explore effective strategies for leveraging social media to engage with your audience and boost your brand.",
    date: "August 1, 2024",
    image: "/b4.jpg",
  },
];

function Home() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to BusinessName</h1>
      <p className="text-lg mb-8">
        We offer a range of services to help your business succeed. Explore our
        offerings and get in touch with us for more information.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
        Learn More
      </button>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.excerpt}</p>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
