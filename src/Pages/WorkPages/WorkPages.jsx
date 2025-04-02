import "../BlogPageCompt/BlogCompt.css";
import Work1 from "../../Components/assets/work.png";
import Work2 from "../../Components/assets/work2.png";
import Work3 from "../../Components/assets/work3.png";
import Work4 from "../../Components/assets/work4.png";
import Work5 from "../../Components/assets/work5.png";
import Work6 from "../../Components/assets/work6.png";
import Work7 from "../../Components/assets/work7.png";
import Work8 from "../../Components/assets/work8.png";
import Work9 from "../../Components/assets/work9.png";

function WorkPages() {
  return (
    <section className="flex justify-center py-3">
      <div className="flex justify-center">
        <div className="container">
          <div className="work-pages-index text-white">
            <div className="work-pages-title">
              <div className="btn-work-pages text-center">
                <a href="" className="py-1 px-3 rounded-lg">
                  WORK
                </a>
              </div>
              <h1 className="text-center py-4 text-2xl font-bold">My Work</h1>
              <h5 className="text-center font-semibold">
                My projects demonstrate creativity, functionality, and
                innovation, <br /> showcasing my journey in building impactful
                and user-focused web solutions.
              </h5>
            </div>
            <div className="work-pages-compt mt-10">
              <div className="work-flex flex justify-center gap-5 mb-5">
                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work1} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Top Up Landing Page
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://zen-hikari.github.io/NVL_Top-Up/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work2} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Komik Landing Page
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://nvl-cerpenverse.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work3} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">Tetris Game</h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://zen-hikari.github.io/Tetris/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work-flex flex justify-center gap-5 mb-5">
                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work4} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Landing Page Template
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://landing-page-tamplate.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work5} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Creative Agency Landing Page
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://creative-agency-landing-page-three.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work6} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Watch Landing Page
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://watch-landing-page-lemon.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work-flex flex justify-center gap-5 mb-5">
                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work7} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      NH MyAnimeList
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://nh-my-anime-list.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work8} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">NH Travel</h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://nh-travel.vercel.app/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="work py-5 px-5 rounded-2xl">
                  <img src={Work9} alt="" className="rounded-2xl mb-7" />
                  <div className="work-detail py-2">
                    <h1 className="text-2xl font-semibold mb-7">
                      Vegetables Shop
                    </h1>
                    <div className="btn-work-detail">
                      <a
                        href="https://zen-hikari.github.io/vegetablesShop/"
                        target="_blank"
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        View Live
                        <i className="ai-arrow-right text-lg"></i>
                      </a>
                    </div>
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

export default WorkPages;
