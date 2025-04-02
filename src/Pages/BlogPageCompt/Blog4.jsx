import "./BlogCompt.css";
import Img4 from "../BlogPages/assets/api.png";

function Blog4() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          Pengenalan API dan Cara Menggunakannya dalam Aplikasi Web
        </h1>
        <img src={Img4} alt="Pengenalan API" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            <span className="font-semibold text-white">API (Application Programming Interface)</span> adalah sekumpulan aturan yang memungkinkan satu aplikasi berkomunikasi dengan aplikasi lainnya. API digunakan dalam berbagai aspek pengembangan perangkat lunak, terutama dalam integrasi data dan layanan.
          </p>
          <p className="mb-4">
            Dalam pengembangan web, API sering digunakan untuk mengambil data dari server, seperti menampilkan daftar produk, cuaca, atau data pengguna secara real-time.
          </p>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">Jenis-Jenis API:</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li><span className="text-white">REST API:</span> API berbasis HTTP yang mudah digunakan dan umum dalam web development.</li>
              <li><span className="text-white">GraphQL:</span> API yang memungkinkan permintaan data yang lebih spesifik dan fleksibel.</li>
              <li><span className="text-white">SOAP API:</span> API yang lebih kompleks dan banyak digunakan dalam sistem enterprise.</li>
              <li><span className="text-white">WebSocket:</span> API untuk komunikasi real-time dua arah, cocok untuk aplikasi seperti chat atau game online.</li>
            </ul>
          </div>
          <p className="mb-4">
            Untuk menggunakan API dalam aplikasi web, kita bisa menggunakan **fetch()** di JavaScript atau pustaka seperti **Axios** untuk mengambil dan mengelola data dari server.
          </p>
          <p className="text-center text-xl font-bold text-white mt-8">
            API adalah fondasi penting dalam pengembangan aplikasi modern. Dengan memahami cara kerjanya, kamu bisa membangun aplikasi yang lebih dinamis dan terintegrasi!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog4;
