import "./Global.css";
import WebDeveloper from "./assets/web-developer.png";
import Game from "./assets/game-developer.png";

function ServicePage() {
  return (
    <section className="pt-60" id="service">
      <div className="flex justify-center">
        <div className="container service-container">
          <div className="service-content text-white">
            <div className="service-title">
              <a href="" className="btn-service py-1 px-3 rounded-lg text-sm">
                SERVICE
              </a>
              <h1 className="mt-5 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold">
                Custom design solutions for your <br /> requirements.
              </h1>
              <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold mt-5">
                I specialize in crafting user-centered solutions for businesses
                and <br /> individuals. Let's create something extraordinary
                together.
              </h5>
            </div>
            <div className="service-img-compt flex gap-4 mt-18">
              <div className="web-developer py-5 px-5 rounded-2xl">
                <div className="web-title flex gap-5">
                  <div className="icon-web mt-3">
                    <i className="ai-vscode-fill text-xl px-3 py-2 web-i rounded-lg"></i>
                  </div>
                  <div className="web-desc">
                    <h1 className=" font-bold">Web Development</h1>
                    <h5 className="font-semibold mt-2">
                      Develop and design responsive, interactive, and optimized
                      interfaces for the best user experience across devices.
                    </h5>
                  </div>
                </div>
                <div className="web-img-compt mt-7">
                  <img src={WebDeveloper} alt="" className="rounded-2xl web-img"/>
                </div>
              </div>

              <div className="game-developer py-5 px-5 rounded-2xl">
                <div className="web-title flex gap-5">
                  <div className="icon-web mt-3">
                    <i className="ai-game-controller text-xl px-3 py-2 game-i rounded-lg"></i>
                  </div>
                  <div className="web-desc">
                    <h1 className=" font-bold">Game Development</h1>
                    <h5 className="font-semibold mt-2">
                    Design and develop fun, challenging and creative gaming experiences with engaging mechanics and storylines.
                    </h5>
                  </div>
                </div>
                <div className="web-img-compt mt-7">
                  <img src={Game} alt="" className="rounded-2xl game-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
