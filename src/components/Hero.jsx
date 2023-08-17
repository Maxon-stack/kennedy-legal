import React, { useState } from "react";
import { Link } from "react-router-dom";
import Awards from "./Awards/Awards";
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
  return (
    <section className="bg-white dark:bg-black antialiased">
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
