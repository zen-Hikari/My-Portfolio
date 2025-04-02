import "./Global.css";

import Work1 from "./assets/work.png";
import Work2 from "./assets/work2.png";
import Work3 from "./assets/work3.png";
import Work4 from "./assets/work4.png";

function WorkPage() {
  return (
    <section className="py-50" id="work">
      <div className="flex justify-center">
        <div className="container">
          <div className="work-cont text-white">
            <div className="work-title ">
              <a href="" className="work-btn rounded-lg text-sm py-1 px-3">
                WORK
              </a>
              <h1 className="mt-5 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold">
                Tailor-made creations crafted to fit <br /> your needs
              </h1>
              <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold mt-5">
                I focus on building intuitive experiences for companies and
                <br />
                individuals. Let's make something remarkable together
              </h5>
            </div>
            <div className="work-img-compt mt-18">
              <div className="btn-work-index flex justify-center pb-10">
                <a href="/Work-Page" className="text-white py-1 px-3 rounded-lg text-center">See More</a>
              </div>
              <div className="flex-1 gap-5 flex mb-5">
                <div className="project py-5 px-5 rounded-2xl relative">
                  <img src={Work1} alt="" className="rounded-2xl " />
                  <div className="img-desc absolute  inset-0 ">
                    <div className="img-cont px-5 py-5">
                      <h1 className="text-2xl font-bold">Web Top-up</h1>
                      <h5 className="font-semibold text-gray-600">
                        Landing Page
                      </h5>
                    </div>
                  </div>
                  <div className="btn-overlay absolute inset-0 flex justify-center items-center">
                    <a
                      href="/Work-Page/Top-Up-Landing-Page"
                      className="work-btn py-3 px-5  rounded-lg text-md font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </div>

                <div className="project py-5 px-5 rounded-2xl relative">
                  <img src={Work2} alt="" className="rounded-2xl "/>
                  <div className="img-desc absolute  inset-0 ">
                    <div className="img-cont px-5 py-5">
                      <h1 className="text-2xl font-bold">NVl CERPENVERSE</h1>
                      <h5 className="font-semibold text-gray-600">
                        Landing Page
                      </h5>
                    </div>
                  </div>
                  <div className="btn-overlay absolute inset-0 flex justify-center items-center">
                    <a
                      href=""
                      className="work-btn py-3 px-5  rounded-lg text-md font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-2 gap-5 flex">
                <div className="project py-5 px-5 rounded-2xl relative">
                  <img src={Work3} alt="" className="rounded-2xl " />
                  <div className="img-desc absolute  inset-0 ">
                    <div className="img-cont px-5 py-5">
                      <h1 className="text-2xl font-bold">Tetris Game</h1>
                      <h5 className="font-semibold text-gray-600">
                        Game Web
                      </h5>
                    </div>
                  </div>
                  <div className="btn-overlay absolute inset-0 flex justify-center items-center">
                    <a
                      href=""
                      className="work-btn py-3 px-5  rounded-lg text-md font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </div>

                <div className="project py-5 px-5 rounded-2xl relative">
                  <img src={Work4} alt="" className="rounded-2xl " />
                  <div className="img-desc absolute  inset-0 ">
                    <div className="img-cont px-5 py-5">
                      <h1 className="text-2xl font-bold">
                        Landing Page Web Tamplate
                      </h1>
                      <h5 className="textlg font-semibold text-gray-600">
                        Landing Page
                      </h5>
                    </div>
                  </div>
                  <div className="btn-overlay absolute inset-0 flex justify-center items-center">
                    <a
                      href=""
                      className="work-btn py-3 px-5  rounded-lg text-md font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
