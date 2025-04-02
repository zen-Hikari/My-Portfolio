import "./Blog-Pages.css";
import Blog1 from "./assets/1.png";
import Blog2 from "./assets/2.png";
import Blog3 from "./assets/3.png";
import Blog4 from "./assets/api.png";
import Blog5 from "./assets/framework.png";
import Blog6 from "./assets/linux.png";
import Blog7 from "./assets/linuxVSmacOs.png";

function IndexBlogPages() {
  return (
    <section className="flex justify-center py-3">
      <div className="overlay absolute z-[-1] rounded-full"></div>
      <div className="flex justify-center">
        <div className="container">
          <div className="blog-pages-compt text-white">
            <div className="blog-pages-title">
              <div className="btn-pages-compt text-center">
                <a href="" className="btn-pages py-1 px-3 rounded-lg">
                  BLOG
                </a>
              </div>
              <h1 className="text-center py-4  text-2xl font-bold">
                Welcome To My Blog
              </h1>
              <h5 className="index-blog text-center font-semibold">
                On this page you can see blogs that provide knowledge or
                anything that is useful <br />
                through my personal blog. Let's explore my blog content
              </h5>
            </div>
            <div className="index-blog-flex flex justify-center mt-10 gap-5">
              <div className="blog py-6 px-5 rounded-2xl">
                <img src={Blog1} alt="" className="rounded-2xl" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    Royal Kludge RK65: Keyboard <br /> Mechanical Minimalis yang
                    Memukau
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
                <img src={Blog2} alt="" className="rounded-2xl" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    Unreal Engine: Mengapa Menjadi <br /> Engine Terkuat di
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
            </div>
            <div className="index-blog-flex flex justify-center mt-10 gap-5">
              <div className="blog py-6 px-5 rounded-2xl">
                <img src={Blog4} alt="" className="rounded-2xl" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    Pengenalan API dan Cara Menggunakannya dalam Aplikasi Web
                  </h1>
                  <a
                    href="/Blog-Page/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web"
                    className="full-blog font-semibold text-sm"
                  >
                    Read Full Blog {">"}
                  </a>
                </div>
              </div>

              <div className="blog py-6 px-5 rounded-2xl">
                <img src={Blog5} alt="" className="rounded-2xl" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    Panduan Memilih Framework <br /> Front-End untuk Proyek Web
                  </h1>
                  <a
                    href="/Blog-Page/Memilih-Framework-Front-End-untuk-Proyek-Web"
                    className="full-blog font-semibold text-sm"
                  >
                    Read Full Blog {">"}
                  </a>
                </div>
              </div>
              <div className="blog py-6 px-5 rounded-2xl">
                <img src={Blog6} alt="" className="rounded-2xl" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    5 Best Linux Distros for Beginners
                  </h1>
                  <a
                    href="/Blog-Page/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2025"
                    className="full-blog font-semibold text-sm"
                  >
                    Read Full Blog {">"}
                  </a>
                </div>
              </div>
            </div>
            <div className="index-blog-flex flex justify-center mt-10 gap-5">
              <div className="blog py-6 px-5 rounded-2xl">
                <img src={Blog7} alt="" className="rounded-2xl" width="400px" />
                <h5 className="created mt-5 font-semibold">
                  Noval Hasmi Wijaya 󠁯•󠁏 29 March 2025
                </h5>
                <div className="blog-desc mt-8">
                  <h1 className="text-xl font-semibold mb-5">
                    Linux vs macOS: Mana yang Lebih Baik <br /> untuk Pengguna
                    Kreatif?
                  </h1>
                  <a
                    href="/Blog-Page/Linux-vs-macOS:-Mana-yang-Lebih-Baik-untuk-Pengguna-Kreatif?"
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
    </section>
  );
}

export default IndexBlogPages;
