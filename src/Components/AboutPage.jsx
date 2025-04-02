import "./Global.css";
import Profile from "./assets/profile3.png";
import { useState } from "react";
function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section className="" id="about">
      <div className="flex justify-center">
        <div className="container">
          <div className="about-flex flex gap-5 justify-center items-center">
            <div className="about-title text-white flex-1">
              <a href="" className="about-btn text-sm py-1 px-3 rounded-lg">
                LET ME INTRODUCE MY SELF
              </a>
              <h1 className="py-5 text-4xl font-bold">Noval Hasmi Wijaya</h1>
              <h5 className="font-semibold text-lg">
                My name is Noval Hasmi Wijaya, and I am a passionate Front-End
                Developer & Game Developer. I specialize in creating seamless
                and visually appealing user interfaces, combining design and
                development to enhance both web and gaming experiences.
              </h5>
              <h5 className="text-lg font-semibold py-8">
                I love turning ideas into interactive and functional web
                applications, as well as developing immersive games.
              </h5>
              <button
                onClick={openModal}
                className="btn-title-about py-3 px-5 rounded-lg cursor-pointer"
              >
                Connect Me
              </button>
            </div>
            <div className="about-profile w-full flex-[0.7]  py-5 px-5 rounded-2xl">
              <img src={Profile} alt="" className="rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content text-white py-20 px-10 rounded-lg">
            <h1 className="text-2xl font-bold">Connect Me</h1>
            <div className="icons-container">
              {/* GitHub */}
              <a
                href="https://github.com/zen-Hikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai-github-fill fa-3x text-4xl text-white"></i>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zen-hikari-703125316/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai-linkedin-box-fill fa-3x text-4xl text-white"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutPage;
