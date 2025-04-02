import "./BlogCompt.css";
import Img7 from "../BlogPages/assets/linuxVSmacOs.png";

function Blog7() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          Linux vs macOS: Mana yang Lebih Baik untuk Pengguna Kreatif?
        </h1>
        <img src={Img7} alt="Linux vs macOS" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            Jika kamu seorang **desainer, editor video, atau musisi digital**, memilih sistem operasi yang tepat sangat penting. Dua pilihan utama adalah **Linux dan macOS**. Tapi, mana yang lebih baik untuk kebutuhan kreatif?
          </p>
          
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">🔹 **Keunggulan macOS**</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li>**Stabilitas tinggi** dan optimal untuk perangkat Apple.</li>
              <li>Dukungan luas untuk **software profesional** seperti Adobe, Final Cut Pro, dan Logic Pro.</li>
              <li>Antarmuka yang **intuitif dan mudah digunakan**.</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">🔹 **Keunggulan Linux**</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li>Gratis dan **open-source**, memungkinkan kustomisasi tanpa batas.</li>
              <li>Lebih ringan dan bisa dijalankan di berbagai perangkat.</li>
              <li>Banyak software open-source untuk desain dan editing seperti **Krita, Blender, dan DaVinci Resolve**.</li>
            </ul>
          </div>

          <p className="mb-4">
            **Kesimpulan:** Jika kamu membutuhkan ekosistem yang solid dengan software profesional, **macOS adalah pilihan terbaik**. Namun, jika kamu ingin **fleksibilitas dan biaya nol**, **Linux bisa menjadi alternatif yang menarik**.
          </p>

          <p className="text-center text-xl font-bold text-white mt-8">
            Pilih sesuai kebutuhanmu! **Linux atau macOS?**
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog7;
