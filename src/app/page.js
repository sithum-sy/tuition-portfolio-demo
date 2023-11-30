import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />

      <section id="blog" className=" text-black h-screen bg-slate-50 flex">
        <h1 className="m-auto font-inter text-7xl text-black font-bold">
          Blog
        </h1>
      </section>
      <section
        id="contact"
        className="text-black h-screen bg-white  text-center flex"
      >
        <h1 className="m-auto font-inter text-7xl text-blac font-bold">
          Contact{" "}
        </h1>
      </section>
      <section id="projects" className=" text-black h-screen bg-slate-50 flex">
        <h1 className="m-auto font-inter text-7xl text-black font-bold">
          Projects
        </h1>
      </section>
    </div>
  );
}
