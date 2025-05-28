import "./BlogCompt.css";
import Img1 from "../BlogPages/assets/2.png";

function Blog2() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          Unreal Engine: Mesin Game Paling Powerfull
        </h1>
        <img src={Img1} alt="Unreal Engine" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            <span className="font-semibold text-white">Unreal Engine</span> adalah salah satu mesin game paling canggih dan populer saat ini. Dikembangkan oleh Epic Games, mesin ini menghadirkan berbagai fitur luar biasa yang memungkinkan pengembang menciptakan dunia digital yang menakjubkan.
          </p>
          <p className="mb-4">
            Keunggulan utama Unreal Engine terletak pada kemampuan rendering real-time yang revolusioner. Teknologi seperti Lumen dan Nanite memungkinkan pengembang menciptakan lingkungan game dengan detail memukau tanpa kehilangan performa.
          </p>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">Kelebihan Unreal Engine:</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li>Grafis ultra-realistis dengan dukungan pencahayaan canggih.</li>
              <li>Rendering real-time untuk pengalaman visual yang lebih hidup.</li>
              <li>Gratis untuk digunakan dengan sistem royalti fleksibel.</li>
              <li>Komunitas luas dan banyak tutorial yang mendukung.</li>
            </ul>
          </div>
          <p className="mb-4">
            Dengan teknologi yang terus berkembang, Unreal Engine kini digunakan tidak hanya untuk game tetapi juga dalam industri perfilman, arsitektur, dan bahkan simulasi militer.
          </p>
          <p className="text-center text-xl font-bold text-white mt-8">
            Apakah Unreal Engine cocok untuk proyekmu? Jika kamu ingin menciptakan dunia digital yang luar biasa, ini adalah pilihan terbaik!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog2;
