import "./Global.css";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project3 from "./assets/project-3.png";
import Project4 from "./assets/project-4.png";
import Project5 from "./assets/project-5.png";

function HeroPage() {
  return (
    <section className="relative text-white">
      <div className="overlay absolute z-[-1] rounded-full"></div>
      <div className="flex justify-center pt-53">
        <div className="container content-hero">
          <div className="title-hero">
            <h1 className=" font-bold text-center xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              Hey, I'm Noval Hasmi. I'm a <br /> Front-End Developer & Game
              <br /> Developer
            </h1>
          </div>
          <div className="desc-hero mt-5">
            <h5 className="text-lg font-bold text-center">
              I am a developer and designer who has a passion for building
              <br />
              responsive, cool looking, and easy to visit website applications.
            </h5>
          </div>
          <div className="btn-hero-cont mt-10 text-md font-semibold justify-center items-center flex gap-5 mb-10">
            <a href="/Work-Page" className="btn-hero py-2 px-4">
              View Work
            </a>
            <a href="" className="btn-hero2 py-2 px-4">
              Contact Me
            </a>
          </div>
          <div className="project-carousel-infinity">
            <div className="fade-overlay left"></div>
            <div className="carousel-track">
              <img src={Project1} alt="Project 1" />
              <img src={Project2} alt="Project 2" />
              <img src={Project3} alt="Project 3" />
              <img src={Project4} alt="Project 4" />
              <img src={Project5} alt="Project 4" />
              {/* Duplikat gambar untuk efek looping */}
              <img src={Project1} alt="Project 1" />
              <img src={Project2} alt="Project 2" />
              <img src={Project3} alt="Project 2" />
              <img src={Project4} alt="Project 2" />
              <img src={Project5} alt="Project 2" />
            </div>
            <div className="fade-overlay right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
