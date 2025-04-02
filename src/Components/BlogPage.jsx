import "./Global.css";
import Blog1 from "./assets/blog/1.png";
import Blog2 from "./assets/blog/2.png";
import Blog3 from "./assets/blog/3.png";
import Blog4 from "./assets/blog/api.png";

function BlogPage() {
  return (
    <section className="pt-50 pb-10" id="blog">
      <div className="flex justify-center">
        <div className="container">
          <div className="blog-flex text-white">
            <div className="blog-title">
              <a href="" className="blog-btn py-1 px-3 rounded-lg">
                BLOG
              </a>
              <h1 className="text-4xl font-bold mt-5">My Blog</h1>
              <h5 className="mt-5 xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-semibold">
                On this page you can see blogs that provide knowledge or
                anything that is useful <br /> through my personal blog. Let's
                explore my blog content
              </h5>
              <div className="blog-page-btn flex justify-center pt-20">
                <a
                  href="/Blog-Page"
                  className="blog-page text-white py-1 px-3 rounded-lg text-center"
                >
                  See More
                </a>
              </div>
            </div>
            <div className="blog-compt mt-10">
              <div className="blog-direction flex justify-center gap-5 mb-5">
                <div className="blog py-6 px-5 rounded-2xl">
                  <img src={Blog1} alt="" className="rounded-2xl" />
                  <h5 className="created mt-5 font-semibold">
                    Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                  </h5>
                  <div className="blog-desc mt-8">
                    <h1 className="text-xl font-semibold mb-5">
                      Royal Kludge RK65: Keyboard Mechanical <br /> Minimalis
                      yang Memukau
                    </h1>
                    <a
                      href="/Blog-Page/Review-Keyboard-Royal-Kludge-RK65"
                      className="full-blog font-semibold text-sm"
                    >
                      Read Full Blog {">"}
                    </a>
                  </div>
                </div>

                <div className="blog py-6 px-5 rounded-2xl">
                  <img src={Blog2} alt="" className="rounded-2xl blog-unreal" />
                  <h5 className="created mt-5 font-semibold">
                    Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                  </h5>
                  <div className="blog-desc mt-8">
                    <h1 className="text-xl font-semibold mb-5">
                      Unreal Engine: Mengapa Menjadi Engine <br /> Terkuat di
                      Industri Game
                    </h1>
                    <a
                      href="/Blog-Page/Unreal-powerfull-engine"
                      className="full-blog font-semibold text-sm"
                    >
                      Read Full Blog {">"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-direction flex justify-center gap-5">
                <div className="blog py-6 px-5 rounded-2xl">
                  <img src={Blog3} alt="" className="rounded-2xl" />
                  <h5 className="created mt-5 font-semibold">
                    Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                  </h5>
                  <div className="blog-desc mt-8">
                    <h1 className="text-xl font-semibold mb-5">
                      Bug Remote Code Execution (RCE): <br /> Mengapa Ini Bisa
                      Terjadi
                    </h1>
                    <a
                      href="/Blog-Page/Bug-Remote-Code-Execution-(RCE)"
                      className="full-blog font-semibold text-sm"
                    >
                      Read Full Blog {">"}
                    </a>
                  </div>
                </div>

                <div className="blog py-6 px-5 rounded-2xl">
                  <img src={Blog4} alt="" className="rounded-2xl" />
                  <h5 className="created mt-5 font-semibold">
                    Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                  </h5>
                  <div className="blog-desc mt-8">
                    <h1 className="text-xl font-semibold mb-5">
                      Pengenalan API dan Cara Menggunakannya <br /> dalam
                      Aplikasi Web
                    </h1>
                    <a
                      href="/Blog-Page/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web"
                      className="full-blog font-semibold text-sm"
                    >
                      Read Full Blog {">"}
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

export default BlogPage;
