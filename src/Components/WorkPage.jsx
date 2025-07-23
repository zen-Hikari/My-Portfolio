import "./Global.css";

import Work1 from "./assets/work.png";
import Work2 from "./assets/work2.png";
import Work3 from "./assets/work7.png";
import Work4 from "./assets/work4.png";

function WorkPage() {
  return (
    <section className="pt-60" id="work">
      <div className="flex justify-center">
        <div className="container">
          <div className="work-cont text-white">
            <div
              className="work-title "
              data-aos="fade-zoom-in"
              data-aos-delay="400"
            >
              <a href="" className="work-btn rounded-lg text-sm py-1 px-3">
                WORK
              </a>
              <h1 className="mt-5 xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-semibold">
                Tailor-made creations <br /> crafted to fit your needs
              </h1>
              <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold mt-5">
                I focus on building intuitive experiences for companies and
                <br />
                individuals. Let's make something remarkable together
              </h5>
            </div>
            <div
              className="work-img-compt mt-18"
              data-aos="fade-zoom-in"
              data-aos-delay="400"
            >
              <div className="btn-work-index flex justify-center pb-10">
                <a
                  href="/Work-Page"
                  className="text-white py-1 px-3 rounded-lg text-center"
                >
                  See More
                </a>
              </div>
              <div className="flex-1 gap-5 flex mb-5">

                <div className="project p-3 rounded-2xl relative group">
                  <div className="overflow-hidden aspect-[4/3] rounded-2xl">
                  <img src={Work1} alt="" className="rounded-2xl group-hover:scale-100 scale-105 transition-all duration-500 w-full h-full object-cover" />

                  </div>
                  
                  <div className="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t bg-black/90 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4">
                    <div className=" flex items-center justify-between">
                      <div className="">
                      <h3 className="text-white text-lg lg:text-xl tracking-wide font-bold">NVL_Top-Up</h3>
                      <p className="font-medium uppercase text-lg tracking-wide text-gray-600">Web Landing Page </p>
                      </div>
                    <a
                      href="https://zen-hikari.github.io/NVL_Top-Up/"
                      target="_blank"
                      className="text-2xl"
                    >
                      <i className="ai-link-out"></i>
                    </a>
                    </div>
                    <div className="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"></div>
                    <p className="font-medium paragpraph tracking-wide text-gray-400 line-clamp-2 text-lg">NVL Top-Up offers modern HTML templates resources to help you build clean</p>
                  </div>
                </div>

                <div className="project py-2 px-2 rounded-2xl relative group">
                  <div className="overflow-hidden aspect-[4/3] rounded-2xl">
                  <img src={Work2} alt="" className="rounded-2xl group-hover:scale-100 scale-105 transition-all duration-500 w-full h-full object-cover" />
                  </div>
                  
                  <div className="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t bg-black/90 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4">
                    <div className=" flex items-center justify-between">
                      <div className="">
                      <h3 className="text-white text-lg lg:text-xl tracking-wide font-bold">NVL_CERPENSE</h3>
                      <p className="font-medium uppercase text-lg tracking-wide text-gray-600">Web Landing Page</p>
                      </div>
                    <a
                      href="https://nv-l-cerpen-verse.vercel.app/"
                      target="_blank"
                      className="text-2xl"
                    >
                      <i className="ai-link-out"></i>
                    </a>
                    </div>
                    <div className="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"></div>
                    <p className="font-medium paragpraph tracking-wide text-gray-400 line-clamp-2 text-lg">NVL Cerpen Verse is a platform featuring short stories with a unique touch of mystery</p>
                  </div>
                </div>
              </div>

              <div className="flex-2 gap-5 flex">
                <div className="project py-2 px-2 rounded-2xl relative group">
                  <div className="overflow-hidden aspect-[4/3] rounded-2xl">
                  <img src={Work3} alt="" className="rounded-2xl group-hover:scale-100 scale-105 transition-all duration-500 w-full h-full object-cover" />
                  </div>
                   <div className="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t bg-black/90 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4">
                    <div className=" flex items-center justify-between">
                      <div className="">
                      <h3 className="text-white text-lg lg:text-xl tracking-wide font-bold">NH MYANIMELIST</h3>
                      <p className="font-medium uppercase text-lg tracking-wide text-gray-600">Web Landing Page </p>
                      </div>
                    <a
                      href="https://nh-my-anime-list.vercel.app/"
                      target="_blank"
                      className="text-2xl"
                    >
                      <i className="ai-link-out"></i>
                    </a>
                    </div>
                    <div className="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"></div>
                    <p className="font-medium paragpraph tracking-wide text-gray-400 line-clamp-2 text-lg">NH My Anime List is a modern and minimal platform to track your favorite anime</p>
                  </div>
                </div>

                <div className="project py-2 px-2 rounded-2xl relative group">
                  <div className="overflow-hidden aspect-[4/3] rounded-2xl">
                  <img src={Work4} alt="" className="rounded-2xl group-hover:scale-100 scale-105 transition-all duration-500 w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t bg-black/90 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4">
                    <div className=" flex items-center justify-between">
                      <div className="">
                      <h3 className="text-white text-lg lg:text-xl tracking-wide font-bold">DIGITAL AGENCY</h3>
                      <p className="font-medium uppercase text-lg tracking-wide text-gray-600">Web Landing Page </p>
                      </div>
                    <a
                      href="https://landing-page-tamplate.vercel.app/"
                      target="_blank"
                      className="text-2xl"
                    >
                      <i className="ai-link-out"></i>
                    </a>
                    </div>
                    <div className="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"></div>
                    <p className="font-medium paragpraph tracking-wide text-gray-400 line-clamp-2 text-lg">DIGITAL AGENCY is a clean and modern landing page design, perfect for showcasing products</p>
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
