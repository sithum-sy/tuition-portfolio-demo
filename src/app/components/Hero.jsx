"use client";
import Image from "next/image";

// This is a client component 👈🏽

function Hero() {
  return (
    <section id="hero" className="text-black h-screen bg-white   flex">
      {/* <h1 className="m-auto font-inter text-7xl text-black font-bold  ">
        About
      </h1> */}
      <div class="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div class="mb-14 pl-5 lg:mb-0 lg:w-1/2">
          <h1 class="max-w-xl text-[2.2rem] leading-none text-gray-900 font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
            Lakshan Palihawadana
          </h1>
          <p class="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis
          </p>
          <div class="flex justify-center mt-6 lg:justify-start">
            <button
              type="button"
              class="text-white bg-green-400 font-medium rounded-lg text-md px-6 py-4 text-center inline-flex items-center gap-x-2 hover:bg-green-600 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              <Image src="/whatsapp.svg" width={20} height={20} alt="logo" />
              <span> 077 5544 298</span>
            </button>
          </div>
        </div>
        <div class="lg:w-1/2">
          <Image
            class="ml-auto"
            src="/hero.jpg"
            alt="hero"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
