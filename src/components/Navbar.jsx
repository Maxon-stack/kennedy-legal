import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import eng from "../assets/us-flag.svg";
import de from "../assets/germany-flag.svg";
import it from "../assets/italia-flag.svg";
import cn from "../assets/china-flag.svg";
import CustomDivider from "./CustomDivider/CustomDivider";
const initialState = { "practice areas": false, resources: false };
const navLink = [
  { name: "home", path: "/", hasDropdown: false },
  { name: "about", path: "/about", hasDropdown: false },
  { name: "practice areas", path: "/practice-areas", hasDropdown: true },
  { name: "case results", path: "/case-results", hasDropdown: false },
  { name: "team", path: "/team", hasDropdown: false },
  { name: "blog", path: "/blog", hasDropdown: false },
  { name: "resources", path: "/resources", hasDropdown: true },
  { name: "contact", path: "/contact", hasDropdown: false },
];

const languagesList = [
  {
    name: "English",
    logo: eng,
  },
  {
    name: "Deutsh",
    logo: de,
  },
  {
    name: "Italiano",
    logo: it,
  },
  {
    name: "中文 (繁體)",
    logo: cn,
  },
];
const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState({
    "practice areas": false,
    resources: false,
  });
  const handleMegaMenu = (e) => {
    setShowMegaMenu({
      ...initialState,
      [e.target.name]: !showMegaMenu[e.target.name],
    });
  };

  const [mobileMenu, setMobileMenu] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languagesList[0]);

  return (
    <header className="shadow-md">
      <nav className="bg-white border-gray-200 dark:border-primary-500 dark:bg-black">
        <div className="flex flex-wrap justify-between gap-2 items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-16 sm:h-20" alt="Flowbite Logo" />
          </a>
          <div className="relative hidden md:flex items-center gap-0">
            <button
              type="button"
              onClick={() => setLanguageDropdown((prev) => !prev)}
              data-dropdown-toggle="language-dropdown"
              className="flex gap-2 items-center text-black dark:text-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-black focus:outline-none dark:focus:ring-gray-800">
              <img src={selectedLanguage.logo} alt="" className="w-6" />{" "}
              <span className="hidden mr-2 md:inline">
                {selectedLanguage.name}
              </span>
              <svg
                className="hidden w-4 h-4 md:inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {languageDropdown && (
              <div
                className="top-12 absolute z-50 my-4 w-36 text-base list-none bg-white 
                rounded shadow dark:bg-black animate-fade-in"
                id="language-dropdown">
                <ul className="py-1 flex flex-col w-full items-start">
                  {languagesList.map((item, index) => {
                    return (
                      <li key={index} className="w-full">
                        <button
                          onClick={() => {
                            setSelectedLanguage(item);
                            setLanguageDropdown(false);
                          }}
                          to="/"
                          className="w-full flex items-center gap-2 py-2 px-4 text-sm text-black
                           hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          <img src={item.logo} alt="" className="w-6" />{" "}
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <a
              className="text-black dark:text-primary-500 font-semibold flex items-center gap-2 text-sm"
              href="tel:9542173100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              {'(954) 217-3100'}
            </a>
            {/* language Dropdown */}
          </div>
          <button
            className="dark:text-white scale-150 md:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}>
            {mobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </button>
          {mobileMenu && (
            <div className="fixed h-screen top-14 sm:top-16 left-0 w-full bg-white  dark:bg-black animate-slide-right z-40">
              {" "}
              <nav className=" bg-white border-gray-200 dark:bg-black dark:border-gray-600 border-y">
                <div className="flex flex-col lg:flex-row justify-between gap-4 py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
                  <form className="w-full lg:w-[300px] flex mb-4 lg:order-2 lg:mb-0">
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-black bg-gray-50 rounded-lg md:rounded-l-none border-l-1 dark:border-gray-800  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800       dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
                        placeholder="Search anything..."
                        required=""
                      />

                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>

                  <div className="flex flex-col gap-4  lg:order-1">
                    <div className="flex items-center justify-center">
                      {" "}
                      <button
                        type="button"
                        data-dropdown-toggle="language-dropdown"
                        className="inline-flex items-center text-black dark:text-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-black focus:outline-none dark:focus:ring-gray-800">
                        <svg
                          className="w-5 h-5 rounded-full md:mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 3900 3900">
                          <path fill="#b22234" d="M0 0h7410v3900H0z" />
                          <path
                            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                            stroke="#fff"
                            strokeWidth={300}
                          />
                          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                          <g fill="#fff">
                            <g id="d">
                              <g id="c">
                                <g id="e">
                                  <g id="b">
                                    <path
                                      id="a"
                                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                    />
                                    <use xlinkHref="#a" y={420} />
                                    <use xlinkHref="#a" y={840} />
                                    <use xlinkHref="#a" y={1260} />
                                  </g>
                                  <use xlinkHref="#a" y={1680} />
                                </g>
                                <use xlinkHref="#b" x={247} y={210} />
                              </g>
                              <use xlinkHref="#c" x={494} />
                            </g>
                            <use xlinkHref="#d" x={988} />
                            <use xlinkHref="#c" x={1976} />
                            <use xlinkHref="#e" x={2470} />
                          </g>
                        </svg>

                        <span className="hidden mr-2 md:inline">English</span>

                        <svg
                          className="hidden w-4 h-4 md:inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <a
                        className="text-black dark:text-gray-300 font-semibold flex items-center gap-2 text-sm"
                        href="tel:0123456789">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-telephone-fill"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                        0123 456 789
                      </a>
                      {/* Dropdown */}
                      <div
                        className="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-black"
                        id="language-dropdown">
                        <ul className="py-1" role="none">
                          <li>
                            <Link
                              to="/"
                              className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">
                              <div className="inline-flex items-center">
                                <svg
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-us"
                                  viewBox="0 0 512 512">
                                  <g fillRule="evenodd">
                                    <g strokeWidth="1pt">
                                      <path
                                        fill="#bd3d44"
                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />

                                      <path
                                        fill="#fff"
                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />
                                    </g>

                                    <path
                                      fill="#192f5d"
                                      d="M0 0h98.8v70H0z"
                                      transform="scale(3.9385)"
                                    />

                                    <path
                                      fill="#fff"
                                      d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                      transform="scale(3.9385)"
                                    />
                                  </g>
                                </svg>{" "}
                                English (US)
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/"
                              className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">
                              <div className="inline-flex items-center">
                                <svg
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-de"
                                  viewBox="0 0 512 512">
                                  <path
                                    fill="#ffce00"
                                    d="M0 341.3h512V512H0z"
                                  />

                                  <path d="M0 0h512v170.7H0z" />

                                  <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                </svg>
                                Deutsch
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/"
                              className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">
                              <div className="inline-flex items-center">
                                <svg
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-it"
                                  viewBox="0 0 512 512">
                                  <g fillRule="evenodd" strokeWidth="1pt">
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path
                                      fill="#009246"
                                      d="M0 0h170.7v512H0z"
                                    />
                                    <path
                                      fill="#ce2b37"
                                      d="M341.3 0H512v512H341.3z"
                                    />
                                  </g>
                                </svg>{" "}
                                Italiano
                              </div>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/"
                              className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">
                              <div className="inline-flex items-center">
                                <svg
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="flag-icon-css-cn"
                                  viewBox="0 0 512 512">
                                  <defs>
                                    <path
                                      id="a"
                                      fill="#ffde00"
                                      d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                                    />
                                  </defs>

                                  <path fill="#de2910" d="M0 0h512v512H0z" />

                                  <use
                                    width={30}
                                    height={20}
                                    transform="matrix(76.8 0 0 76.8 128 128)"
                                    xlinkHref="#a"
                                  />

                                  <use
                                    width={30}
                                    height={20}
                                    transform="rotate(-121 142.6 -47) scale(25.5827)"
                                    xlinkHref="#a"
                                  />

                                  <use
                                    width={30}
                                    height={20}
                                    transform="rotate(-98.1 198 -82) scale(25.6)"
                                    xlinkHref="#a"
                                  />

                                  <use
                                    width={30}
                                    height={20}
                                    transform="rotate(-74 272.4 -114) scale(25.6137)"
                                    xlinkHref="#a"
                                  />

                                  <use
                                    width={30}
                                    height={20}
                                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                    xlinkHref="#a"
                                  />
                                </svg>
                                中文 (繁體)
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="flex  flex-col mt-0 gap-x-8 gap-y-4 text-sm font-medium">
                      {navLink.map((item, index) => {
                        return item.hasDropdown ? (
                          <li key={index}>
                            <button
                              to={item.path}
                              name={item.name}
                              onClick={(e) => handleMegaMenu(e)}
                              className="capitalize whitespace-nowrap flex  items-center w-full font-medium dark:hover:text-primary-500 md:p-0 md:w-auto dark:text-white hover:text-primary-500 dark:focus:text-primary-500">
                              {item.name}

                              <svg
                                className="ml-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </li>
                        ) : (
                          <li key={index}>
                            <Link
                              to={item.path}
                              className="capitalize whitespace-nowrap text-black dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
                              aria-current="page">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </nav>
      <CustomDivider />
{/* Lower nav */}
      <nav className="hidden md:block bg-white  dark:bg-black dark:border-primary-500">
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
          <form className="w-full lg:w-[300px] flex mb-4 lg:order-2 lg:mb-0">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-black bg-gray-50  rounded-lg   border-l-1  border border-gray-300 dark:border-gray-800 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800  dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
                placeholder="Search anything..."
                required=""
              />

              <button
                type="submit"
                className="absolute  top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="flex items-center lg:order-1">
            <ul className="flex  flex-wrap mt-0 gap-x-8 gap-y-4 text-sm font-medium">
              {navLink.map((item, index) => {
                return item.hasDropdown ? (
                  <li key={index}>
                    <button
                      to={item.path}
                      name={item.name}
                      onClick={(e) => handleMegaMenu(e)}
                      className="capitalize whitespace-nowrap flex justify-between items-center w-full font-medium dark:hover:text-primary-500 md:p-0 md:w-auto dark:text-white hover:text-primary-500 dark:focus:text-primary-500">
                      {item.name}

                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="capitalize whitespace-nowrap text-black dark:text-white hover:text-primary-500-600 dark:hover:text-primary-500"
                      aria-current="page">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* mega menu 1 */}
      {showMegaMenu["practice areas"] && (
        <MegaMenu1 handleMegaMenu={handleMegaMenu} />
      )}

      {/* mega menu 2 */}
      {showMegaMenu["resources"] && (
        <MegaMenu2 handleMegaMenu={handleMegaMenu} />
      )}
    </header>
  );
};

export default Navbar;

const MegaMenu1 = ({ handleMegaMenu }) => {
  return (
    <nav className="z-50 fixed w-full top-0 h-screen md:absolute md:h-auto md:top-auto bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600 animate-slide-down">
      <div className="grid py-4 px-4 mx-auto max-w-screen-xl text-black dark:text-white md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <button
          className="md:hidden p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black flex items-center gap-1 text-sm font-semibold"
          name="practice areas"
          onClick={(e) => handleMegaMenu(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Back
        </button>
        <ul className="col-span-2 md:col-span-1">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Personal Injury</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Catastrophic Injuries</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Medical Negligence</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="col-span-2 md:col-span-1">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Family Law</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Product Liability</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Premises Liability</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:block">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Employee Rights</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Property Loss/ Damage Claims</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>


        </ul>
        <div className="col-span-2 p-4 lg:col-span-1">
          <h2 className="mb-2 font-semibold text-black dark:text-white">
            Why Kennedy?
          </h2>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
            At Kennedy Legal Team, we pride ourselves on our ability to deliver results
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-primary-500-600 hover:text-primary-500-600 dark:text-primary-500 dark:hover:text-primary-500-400">
            Learn more{" "}
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MegaMenu2 = ({ handleMegaMenu }) => {
  return (
    <nav className="z-50 fixed w-full top-0 h-screen md:absolute md:h-auto md:top-auto bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600 animate-slide-down">
      <div className="grid py-4 px-4 mx-auto max-w-screen-xl text-black dark:text-white md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <button
          className="md:hidden p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black flex items-center gap-1 text-sm font-semibold"
          name="resources"
          onClick={(e) => handleMegaMenu(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Back
        </button>
        <ul className="col-span-2 md:col-span-1">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Segmentation</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Marketing CRM</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="col-span-2 md:col-span-1">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Audience Management</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Creative Tools</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Marketing Automation</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:block">
          <li>
            <Link
              to="/"
              className="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black">
              <svg
                className="mr-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <div className="font-semibold">Careers</div>

                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="col-span-2 p-4 lg:col-span-1">
          <h2 className="mb-2 font-semibold text-black dark:text-white">
            Our brands
          </h2>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
            At JBS Foods, we pride ourselves on a portfolio of brands that cater
            to a variety of preferences.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-primary-500-600 hover:text-primary-500-600 dark:text-primary-500 dark:hover:text-primary-500-400">
            Explore our brands{" "}
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};
