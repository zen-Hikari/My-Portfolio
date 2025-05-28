import "./Global.css";
import WebDeveloper from "./assets/web-developer.png";
import Game from "./assets/game-developer.png";

function ServicePage() {
  return (
    <section className="pt-60" id="service">
      <div className="flex justify-center">
        <div className="container service-container">
          <div className="service-content text-white">
            <div
              className="service-title"
              data-aos="fade-zoom-in"
              data-aos-easing="linear"
              data-aos-delay="400"
            >
              <a href="" className="btn-service py-1 px-3 rounded-lg text-sm">
                SERVICE
              </a>
              <h1 className="mt-5 xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-semibold">
                Custom design solutions <br /> for your requirements.
              </h1>
              <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold mt-5">
                I specialize in crafting user-centered solutions for businesses
                and <br /> individuals. Let's create something extraordinary
                together.
              </h5>
            </div>
            <div
              className="service-img-compt flex items-center gap-8 mt-18"
              data-aos="fade-zoom-in"
              data-aos-easing="linear"
              data-aos-delay="400"
            >
              <div className="web-developer py-8 px-8 rounded-2xl relative">
                <div className="web-title ">
                  <div className="icon-web mt-">
                    <i className="ai-vscode-fill text-xl px-3 py-2 web-i rounded-lg"></i>
                  </div>
                  <div className="web-desc pt-6">
                    <h1 className=" font-semibold py-2">Web Development</h1>
                    <h5 className="font-semibold">
                      Develop and design responsive, interactive, and optimized
                      interfaces for the best user experience across devices.
                    </h5>
                  </div>
                </div>
                <div className="light-overlay"></div>
              </div>

              <div className="game-developer py-8 px-8 rounded-2xl relative">
                <div className="web-title">
                  <div className="icon-web">
                    <i className="ai-game-controller text-xl px-3 py-2 game-i rounded-lg"></i>
                  </div>
                  <div className="game-desc pt-6">
                    <h1 className=" font-semibold py-2">Game Development</h1>
                    <h5 className="font-semibold">
                      Design and develop fun, challenging and creative gaming
                      experiences with engaging mechanics and storylines.
                    </h5>
                  </div>
                </div>
                <div className="light-overlay"></div>

              </div>

              <div className="game-developer py-8 px-8 rounded-2xl relative">
                <div className="web-title">
                  <div className="icon-web">
                    <i className="ai-bug text-xl px-3 py-2 game-i rounded-lg"></i>
                  </div>
                  <div className="game-desc pt-6">
                    <h1 className=" font-semibold py-2">Bug Hunter</h1>
                    <h5 className="font-semibold">
                      Find and analyze Web vulnerabilities with precision to
                      help build safer and more secure digital systems
                    </h5>
                  </div>
                </div>
                <div className="light-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
