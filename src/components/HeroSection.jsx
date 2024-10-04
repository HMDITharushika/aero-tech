import heroimage from "../assets/plane.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img
          src={heroimage}
          className="h-full w-full object-cover"
          alt="Hero background"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center mt-6 lg:mt-20 text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Revolutionizing Aerospace with{" "}
          <span className="bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text">
            Green Technology
          </span>
        </h1>

        <p className="mt-10 text-lg text-center text-neutral-50 max-w-4xl">
          AeroTech is at the forefront of innovation in aerospace technology,
          developing cutting-edge solutions for sustainable aviation and space
          exploration. From zero-emission electric aircraft to reusable rockets,
          we are reshaping how the world flies and explores the cosmos.
        </p>

        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-green-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white"
          >
            Learn More
          </a>

          <a href="#" className="py-3 px-4 mx-3 rounded-md border text-white">
            Our Innovations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
