import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/Global.css'
import luxy from "luxy.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import GalaxyStars from "./Canvas/SnowBg";
import HeroPage from "./Components/HeroPage";
import ServicePage from "./Components/ServicePage";
import WorkPage from "./Components/WorkPage";
import AboutPage from "./Components/AboutPage";
import BlogPage from "./Components/BlogPage";
import Routers from "./Routers/RoutersBlog.jsx";
import RoutersWork from "./Routers/RoutersWork.jsx";
import Blog1 from "./Pages/BlogPageCompt/Blog1.jsx";
import Blog2 from "./Pages/BlogPageCompt/Blog2.jsx";
import Blog3 from "./Pages/BlogPageCompt/Blog3.jsx";
import Blog4 from "./Pages/BlogPageCompt/Blog4.jsx";
import Blog5 from "./Pages/BlogPageCompt/Blog5.jsx";
import Blog6 from "./Pages/BlogPageCompt/Blog6.jsx";
import Blog7 from "./Pages/BlogPageCompt/Blog7.jsx";

function App() {
  useEffect(() => {
    const luxyWrapper = document.querySelector("#luxy");
  
    if (luxyWrapper) {
      luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: 0.04,
      });
  
      AOS.init({
        duration: 700,
        offset: 100,
      });
  
      const handleScroll = () => {
        AOS.refresh();
      };
  
      luxyWrapper.addEventListener("scroll", handleScroll);
  
      return () => {
        luxyWrapper.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.warn("Elemen dengan ID #luxy tidak ditemukan.");
    }
  }, []);
  

  return (
    <Router>
      <div className="bg-gradient-to-t from-black/30 to-transparent fixed bottom-0 inset-x-0 h-18 z-50 pointer-events-none"></div>
      <GalaxyStars />
      <Routes>
        <Route
          path="/"
          element={
            <main id="luxy">
              <Navbar />
              <HeroPage />
              <AboutPage />
              <div className="overlay-app rounded-full"></div>
              <ServicePage />
              <div className="overlay-app-2 rounded-full"></div>
              <WorkPage />
              <div className="overlay-app-3 rounded-full"></div>
              <BlogPage />
              <div className="overlay-app-4 rounded-full"></div>
            </main>
          }
        />

        <Route path="/Blog-Page" element={<Routers />} />
        <Route path="/Work-Page" element={<RoutersWork />} />
        <Route
          path="/Blog-Page/Review-Keyboard-Royal-Kludge-RK65"
          element={<Blog1 />}
        />
        <Route path="/Blog-Page/Unreal-powerfull-engine" element={<Blog2 />} />
        <Route
          path="/Blog-Page/Bug-Remote-Code-Execution-(RCE)"
          element={<Blog3 />}
        />
        <Route
          path="/Blog-Page/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web"
          element={<Blog4 />}
        />
        <Route
          path="/Blog-Page/Memilih-Framework-Front-End-untuk-Proyek-Web"
          element={<Blog5 />}
        />
        <Route
          path="/Blog-Page/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2025"
          element={<Blog6 />}
        />
        <Route
          path="/Blog-Page/Linux-vs-macOS:-Mana-yang-Lebih-Baik-untuk-Pengguna-Kreatif?"
          element={<Blog7 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
