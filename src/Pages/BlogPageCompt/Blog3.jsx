import "./BlogCompt.css";
import Img3 from "../BlogPages/assets/3.png";

function Blog3() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="w-full max-w-3xl px-8 md:px-12 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center drop-shadow-lg">
          Bug Remote Code Execution (RCE): Ancaman Berbahaya dalam Keamanan Sistem
        </h1>
        <img src={Img3} alt="Bug Remote Code Execution" className="w-full rounded-lg shadow-md mb-6 border border-white/10" />
        
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            <span className="font-semibold text-white">Remote Code Execution (RCE)</span> adalah salah satu kerentanan keamanan paling berbahaya dalam dunia cyber security. Bug ini memungkinkan penyerang menjalankan kode berbahaya dari jarak jauh pada sistem target tanpa izin.
          </p>
          <p className="mb-4">
            Kerentanan RCE sering ditemukan pada aplikasi web, perangkat lunak, dan sistem operasi yang memiliki celah keamanan. Eksploitasi RCE dapat menyebabkan akses penuh ke sistem, pencurian data, atau bahkan pengambilalihan total perangkat.
          </p>
          <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-white/20 shadow-md mb-6">
            <p className="font-semibold text-lg">Penyebab utama RCE:</p>
            <ul className="list-disc pl-6 text-gray-400 text-md space-y-2">
              <li>Validasi input yang buruk, memungkinkan eksekusi kode tak diinginkan.</li>
              <li>Kesalahan konfigurasi server atau aplikasi.</li>
              <li>Penggunaan pustaka (library) yang rentan terhadap eksploitasi.</li>
              <li>Kelemahan dalam autentikasi dan manajemen hak akses.</li>
            </ul>
          </div>
          <p className="mb-4">
            Untuk melindungi sistem dari serangan RCE, penting untuk selalu melakukan update keamanan, menerapkan validasi input yang ketat, dan menggunakan metode otentikasi yang kuat.
          </p>
          <p className="text-center text-xl font-bold text-white mt-8">
            RCE bukan hanya ancaman bagi perusahaan besar, tetapi juga dapat membahayakan individu. Waspadai dan lindungi sistemmu dari serangan ini!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog3;
