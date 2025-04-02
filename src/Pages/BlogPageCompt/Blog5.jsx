import "./BlogCompt.css";
import Img5 from "../BlogPages/assets/framework.png";

function Blog5() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          Memilih Framework Front-End untuk Proyek Web
        </h1>
        <img src={Img5} alt="Framework Front-End" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            Dalam pengembangan web modern, **framework front-end** menjadi alat yang sangat penting. Framework membantu mempercepat pengembangan dengan menyediakan struktur dan komponen siap pakai.
          </p>
          <p className="mb-4">
            Memilih framework yang tepat bisa menjadi tantangan karena ada banyak pilihan. Beberapa framework yang populer saat ini antara lain **React.js, Vue.js, dan Angular**.
          </p>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">Perbandingan Framework Populer:</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li><span className="text-white">React.js:</span> Dikembangkan oleh Facebook, bersifat fleksibel dan memiliki komunitas besar.</li>
              <li><span className="text-white">Vue.js:</span> Mudah dipelajari, ringan, dan sangat cocok untuk proyek kecil hingga menengah.</li>
              <li><span className="text-white">Angular:</span> Framework lengkap yang dikembangkan oleh Google, cocok untuk proyek skala besar.</li>
            </ul>
          </div>
          <p className="mb-4">
            Saat memilih framework, pertimbangkan **kemudahan penggunaan, performa, dan ekosistem**. Jika ingin cepat mengembangkan aplikasi, **React atau Vue** bisa menjadi pilihan. Untuk aplikasi enterprise yang kompleks, **Angular** lebih cocok.
          </p>
          <p className="text-center text-xl font-bold text-white mt-8">
            Pilihlah framework sesuai dengan kebutuhan proyekmu dan keterampilan timmu!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog5;
