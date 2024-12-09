import React from "react";
import "./style.css";
import {
  FiCheck,
  FiSearch,
  FiShoppingCart,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { BsFillWalletFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSkype,
  FaPinterest,
} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <FiSearch className="text-gray-600 w-6 h-6 cursor-pointer" />
          </div>

          <div className="text-xl font-bold text-gray-800">AVION</div>

          <div className="flex items-center space-x-4">
            <FiShoppingCart className="text-gray-600 w-6 h-6 cursor-pointer" />
            <FiUser className="text-gray-600 w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="bg-white py-8">
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-center space-x-6 text-gray-800 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Plant Pots</li>
            <li className="hover:text-blue-600 cursor-pointer">Ceramics</li>
            <li className="hover:text-blue-600 cursor-pointer">Tables</li>
            <li className="hover:text-blue-600 cursor-pointer">Chairs</li>
            <li className="hover:text-blue-600 cursor-pointer">Crockery</li>
            <li className="hover:text-blue-600 cursor-pointer">Tableware</li>
            <li className="hover:text-blue-600 cursor-pointer">Cutlery</li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row h-screen bg-sec">
        <div className="bg-[#2D2C55] text-white flex-1 flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 mb-8">
            View collection
          </button>
          <p className="text-sm md:text-base text-gray-400 mt-10">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        <div className="flex-1 bg-[#83A9AC] flex items-center justify-center">
          <img
            src="/bg.PNG"
            alt="Chair"
            className="object-contain max-h-[100%]"
          />
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12 text-gray-800">
        <h1 className="flex text-3xl  justify-center py-6">
          What Makes Our Brand Different
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 */}
            <div className="bg-white p-6 flex flex-col items-start">
              <div className="mb-4">
                <FiTruck className="text-gray-600 w-6 h-6 cursor-pointer" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Next day as standard
              </h3>
              <p className="text-gray-600">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white p-6 flex flex-col items-start">
              <div className="mb-4">
                <FiCheck className="text-gray-600 w-6 h-6 cursor-pointer" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Made by true artisans
              </h3>
              <p className="text-gray-600">
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white p-6 flex flex-col items-start">
              <div className="mb-4">
                <BsFillWalletFill className="text-gray-600 w-6 h-6 cursor-pointer" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unbeatable prices</h3>
              <p className="text-gray-600">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white p-6 flex flex-col items-start">
              <div className="mb-4">
                <FaLeaf className="text-gray-600 w-6 h-6 cursor-pointer" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recycled packaging</h3>
              <p className="text-gray-600">
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-800 mb-8 text-start">
            New ceramics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/1.PNG"
                  alt="The Dandy Chair"
                  className="object-cover w-full h-64"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Dandy Chair
              </h3>
              <p className="text-gray-500">£250</p>
            </div>

            {/* 2 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/2.PNG"
                  alt="Rustic Vase Set"
                  className="object-cover w-full h-64"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                Rustic Vase Set
              </h3>
              <p className="text-gray-500">£155</p>
            </div>

            {/* 3 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/3.PNG"
                  alt="The Silky Vase"
                  className="object-cover w-full h-64"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Silky Vase
              </h3>
              <p className="text-gray-500">£125</p>
            </div>

            {/* 4 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/4.PNG"
                  alt="The Lucy Lamp"
                  className="object-cover w-full h-64"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Lucy Lamp
              </h3>
              <p className="text-gray-500">£399</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 text-gray-800 rounded-md hover:bg-gray-300">
              View collection
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION 2 */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-800 mb-8">Our popular products</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 1 */}
            <div className="md:col-span-2 text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/p1.png"
                  alt="The Poplar Suede Sofa"
                  className="object-cover w-full h-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Poplar suede sofa
              </h3>
              <p className="text-gray-500">£980</p>
            </div>

            {/* 2 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/p2.png"
                  alt="The Dandy Chair"
                  className="object-cover w-full h-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Dandy chair
              </h3>
              <p className="text-gray-500">£250</p>
            </div>

            {/* 3 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/p3.png"
                  alt="The Dandy Chair"
                  className="object-cover w-full h-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                The Dandy chair
              </h3>
              <p className="text-gray-500">£250</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 text-gray-800 rounded-md hover:bg-gray-300">
              View collection
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center bg-white">
        <div className="text-center px-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-2">
            Join the club and get the benefits
          </h2>
          <p className="text-gray-600 mb-4">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        {/* HERO SECTION 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-24">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-medium text-gray-800">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="text-gray-600">
              When we started Avion, the idea was simple: Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-gray-600">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe, and design so our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
            <button className="px-6 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded hover:bg-gray-200">
              Get in touch
            </button>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/bg2.png"
              alt="Decorative furniture"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#2e285f] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Join our mailing list</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-2 text-gray-700 rounded-l border-none focus:outline-none"
              />
              <button className="px-10 py-2 bg-white text-[#2e285f] rounded-r hover:bg-gray-200">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-8 border-t border-gray-600 pt-4 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Skype" className="hover:text-gray-400">
              <FaSkype size={20} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-gray-400">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
