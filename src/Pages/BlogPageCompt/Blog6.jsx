import "./BlogCompt.css";
import Img6 from "../BlogPages/assets/linux.png";

function Blog6() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          5 Distribusi Linux Terbaik untuk Pengguna Baru di 2024
        </h1>
        <img src={Img6} alt="Linux Distro" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            Jika kamu baru mengenal **Linux**, memilih distribusi yang tepat bisa menjadi tantangan. Berikut adalah **5 distro Linux terbaik untuk pemula** di tahun 2024.
          </p>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">1. **Ubuntu**</p>
            <p className="text-gray-400">
              Ubuntu adalah distro paling populer untuk pemula. Memiliki **UI yang ramah**, dukungan komunitas besar, dan update rutin.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">2. **Linux Mint**</p>
            <p className="text-gray-400">
              Berdasarkan Ubuntu, Linux Mint menawarkan pengalaman yang lebih klasik dengan **desktop Cinnamon** yang mudah digunakan.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">3. **Zorin OS**</p>
            <p className="text-gray-400">
              Dibuat untuk pengguna Windows yang ingin beralih ke Linux. **Tampilan modern dan fitur unik** membuatnya cocok untuk pemula.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">4. **Fedora Workstation**</p>
            <p className="text-gray-400">
              Distro cutting-edge dengan teknologi terbaru, sangat cocok bagi yang ingin belajar Linux dengan lebih dalam.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">5. **Pop!_OS**</p>
            <p className="text-gray-400">
              Dikembangkan oleh System76, Pop!_OS dioptimalkan untuk pengguna yang ingin **Linux yang stabil dan bertenaga**.
            </p>
          </div>
          <p className="text-center text-xl font-bold text-white mt-8">
            Distro mana yang paling cocok untukmu? Pilih sesuai kebutuhan dan mulai perjalananmu di dunia Linux!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog6;
