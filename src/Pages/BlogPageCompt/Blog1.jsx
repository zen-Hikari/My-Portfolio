import "./BlogCompt.css";
import Img1 from "../BlogPages/assets/1.png";

function Blog1() {
  return (
    <section className="flex justify-center py-12 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="w-full max-w-4xl px-8 md:px-16 bg-[#111] border border-white/20 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
        <h1 className="text-center text-xs md:text-sm text-gray-400 mb-6 font-light uppercase tracking-wide">
          Noval Hasmi Wijaya • 29 Maret 2025
        </h1>
        <h1 className="text-4xl font-bold mb-6 text-gray-200 text-center">Royal Kludge RK65: Keyboard Minimalis yang Memukau</h1>
        <img src={Img1} alt="Royal Kludge RK65" className="w-full rounded-lg shadow-md mb-6 border border-white/20" />
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            <span className="font-semibold text-white">Royal Kludge RK65</span> adalah pilihan sempurna bagi kalian yang mencari keyboard mechanical dengan desain <span className="text-blue-400">compact 65%</span>. Dengan fitur <span className="text-green-400">wireless dan kabel</span>, keyboard ini sangat fleksibel untuk berbagai kebutuhan.
          </p>
          <p className="mb-4">
            Tombol-tombolnya menggunakan <span className="text-yellow-400">switch responsif</span> untuk pengalaman mengetik yang nyaman. Backlight <span className="text-purple-400">RGB</span> yang dapat diatur juga memberikan estetika modern yang keren.
          </p>
          <div className="bg-[#222] p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <p className="text-red-300 font-semibold">Kekurangan:</p>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Stabilizer sedikit berisik</li>
              <li>Material keycaps terasa standar</li>
            </ul>
          </div>
          <p className="mb-4">
            Meski begitu, dengan <span className="text-green-400">harga yang terjangkau</span>, keyboard ini tetap menjadi salah satu yang terbaik di kelasnya.
          </p>
          <p className="text-center text-lg font-semibold text-white mt-6">
            Apakah <span className="text-blue-400">keyboard ini layak dibeli?</span> <br />
            Jawabannya tergantung kebutuhan kalian, tapi dengan fitur dan performanya, RK65 sulit diabaikan.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Blog1;
