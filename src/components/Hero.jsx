import React, { useState } from "react";
import { Link } from "react-router-dom";
import Awards from "./Awards/Awards";
import CustomDivider from "./CustomDivider/CustomDivider";
const team = require("../assets/HeroSlider/team.jpg");
const single = require("../assets/HeroSlider/single.jpg");
const team2 = require("../assets/HeroSlider/team2.jpg");
const workingteam = require("../assets/HeroSlider/workingteam.jpg");

const carouselItems = [
  team,
  single,
  team2,
  workingteam,
];
const stats = [
  { id: 1, name: '', value: 'Over $100 Million paid out to clients' },
  { id: 2, name: '', value: '95% win rate' },
  { id: 3, name: '', value: '99.9% guarantee' },
  { id: 4, name: 'Paid out to clients', value: '$70M' },
]
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (currentSlide === carouselItems.length - 1) {
      setCurrentSlide(0);
    }
    setCurrentSlide((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    }
    setCurrentSlide((prev) => prev - 1);
  };




  // src='https://le-cdn.website-editor.net/s/e1e42010e0a64d409bfa4dcd6d918d0c/dms3rep/multi/opt/Kennedy+Legal+Team+Office-1920w.png?Expires=1694817585&Signature=R5NOvfaNtoK83aC3qcpja3-~2YDR29KcGlHOvNImkY2HWY1Ww~AewsL7fshvPGM0c51uok~WS~a-gvimX5jswWh4NZv1sOylSLYIgOP0kRLEloIjaoaBUFGNxnM0yqwjpgUUE7JEVHhyUAj1NONRmOKv-0mTS7NSxZN7Q39EigU4Ux0Kb~0bcA6Ho6DZ0Yq3YYG3qpMprl~miaihLmDz~zz2LJ1CZZxKfl6IXIMCHvq8GaNtCY0Mg2nHEIK-f6WQbksW48rDOm59Rd8LdbgdO1aM3UQNWgWJwPn4JN8ThNXyFZO1sQa0ru1HNblfQbFWr13lLAE5TD8FYa9WbUn5wQ__&Key-Pair-Id=K2NXBXLF010TJW'
  return (
    <section className="bg-white dark:bg-black antialiased">





      <div className="relative bg-black shadow-lg ">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 ">
          <img
            src={carouselItems[0]}
            alt=""
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900   opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          {/* <h1 className="text-4xl font-bold tracking-tight text-primary-600 lg:text-6xl">Kennedy's Legal Team</h1>
          <p className="mt-4 text-xl text-white">
            Text will go here
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Buttons Here
          </a> */}
        </div>







      </div>

      {/* https://tailwindui.com/components/marketing/sections/stats-sections#component-d6e7447b0fced461b1de5660124a2311*/}

      {/* https://tailwindui.com/components/marketing/sections/cta-sections#component-8dd4c113a443605acd83580f4573135c  - CTA section*/}



      <div className="bg-black py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">South Florida's best Car Accident Attorneys</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary-500">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>






      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-black dark:text-primary-500 sm:text-5xl">
                Kennedy's Legal Team
              </h2>
              <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl" >
                RECENTLY NAMED TO FORT LAUDERDALE ILLUSTRATED'S TOP LAWYERS LIST.
              </p>
              <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
                Our mission at the Kennedy Legal Team is to help our clients achieve their goals by providing high quality, ethically sound legal counsel and strategic advice, while continuing to exceed their expectations. We will continue to build our firms reputation by satisfying our client’s needs, while working hand in hand with them to further achieve their desired results through open communication, responsiveness, and attention to detail. The Kennedy Legal Team values Compassion, Professionalism, Integrity, Privacy, Communication, and the Pursuit of Excellence.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link
                to="/"
                title=""
                className="sm:w-[182px] px-5 py-3 w-full text-base font-medium text-center text-white bg-primary-700 rounded-lg shrink-0 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                Contact us
              </Link>
              <Link
                to="/"
                title=""
                className="sm:w-[182px] inline-flex w-full justify-center items-center px-5 py-3 text-base font-medium text-center text-black bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Learn more
              </Link>
            </div>
            {/* <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8 dark:border-gray-700">
              <p className="hidden text-base font-medium text-gray-500 sm:block">
                Partners and backers:
              </p>
              <div className="flex items-center mt-3 max-w-md">
                <img
                  className="w-auto h-8 md:h-12 mr-4"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/greenpeace.svg"
                  alt=""
                />
                <img
                  className="w-auto h-8 md:h-12 mr-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/united-nations.svg"
                  alt=""
                />
                <img
                  className="w-auto h-8 md:h-12 mr-8 dark:invert"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/wwf.svg"
                  alt=""
                />
                <img
                  className="w-auto h-8 md:h-12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oxfam.svg"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
              {/* Item 1 */}
              <div
                className=" duration-700 ease-in-out rounded-lg"
                data-carousel-item="">
                <img
                  src={carouselItems[currentSlide]}
                  className="absolute rounded-lg block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to={3}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to={4}
              />
            </div>
            {/* Slider controls */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev="">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-primary-600 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next="">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-primary-600 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
