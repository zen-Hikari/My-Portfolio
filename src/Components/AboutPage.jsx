import "./Global.css";
import Profile from "./assets/profile2.jpeg";

function AboutPage() {

  return (
    <section
      className="pt-60"
      id="about"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-delay="400"
    >
      <div className="flex justify-center">
        <div className="container">
          <div className="about-flex flex gap-10 justify-center items-center flex-wrap">
            <div className="about-title text-white flex-1 min-w-[300px]">
              <a href="" className="about-btn text-sm py-1 px-3 rounded-lg">
                ABOUT
              </a>
              <h1 className="py-5 xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-semibold">Noval Hasmi Wijaya</h1>
              <h5 className="font-semibold xl:text-lg lg:text-lg md:text-lg sm:text-md text-md">
              I'm Noval Hasmi Wijaya, a passionate Front-End & Game Developer. I focus on building smooth, visually appealing user interfaces that blend design and development for great web and gaming experiences.
              </h5>
              <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold py-8">
                I love turning ideas into interactive and functional web
                applications, as well as developing immersive games.
              </h5>
              <a href="https://www.linkedin.com/in/zen-hikari-703125316/"
              target="_blank"
                className="btn-title-about py-3 px-5 rounded-lg cursor-pointer"
              >
                Connect Me
              </a>
            </div>

            {/* Gambar profil yang diperbesar */}
            <div className="about-profile w-full xl:max-w-xl lg:max-w-none md:max-w-none max-w-none py-3 px-3 rounded-xl ">
              <img
                src={Profile}
                alt="Profile"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
