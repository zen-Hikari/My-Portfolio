import { useEffect, useRef, useState } from "react";

const GalaxyStars = () => {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let staticStars = [];

    // Kurangi jumlah bintang jatuh untuk efek lebih smooth
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        stars.push(createStar());
      }, Math.random() * 3000);
    }

    // Bintang statis kecil di background
    for (let i = 0; i < 10; i++) {
      staticStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function createStar() {
      return {
        x: Math.random() * canvas.width, // Spawn di lokasi acak di atas
        y: Math.random() * canvas.height * 0.2, // Spawn hanya di bagian atas
        size: Math.random() * 2.5 + 0.3, // Ukuran lebih kecil
        speed: Math.random() * 2.5 + 2.2, // Kecepatan lebih lambat
        angle: Math.random() * 0.5 + 0.5, // Sudut jatuh acak
        opacity: 1,
        trail: [],
      };
    }

    function drawBackground() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawStars() {
      // Bintang kecil statis
      staticStars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Bintang jatuh
      stars.forEach((star) => {
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });
        if (star.trail.length > 7) star.trail.shift();

        for (let i = 0; i < star.trail.length - 1; i++) {
          const opacity = star.trail[i].opacity * ((i + 1) / star.trail.length);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = Math.max(
            star.size * (1 - i / star.trail.length),
            0.3
          );
          ctx.moveTo(star.trail[i].x, star.trail[i].y);
          ctx.lineTo(star.trail[i + 1].x, star.trail[i + 1].y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    }

    function updateStars() {
      stars.forEach((star, index) => {
        star.x -= star.speed * star.angle;
        star.y += star.speed;

        // Memudarkan bintang lebih lama (sampai setengah layar)
        if (star.y > canvas.height * 0.5) {
          star.opacity -= 0.005;
        }

        if (star.opacity <= 0) {
          stars[index] = createStar();
        }
      });
    }

    function animate() {
      drawBackground();
      drawStars();
      updateStars();
      if (visible) requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      setVisible(window.scrollY < 500);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        display: visible ? "block" : "none",
      }}
    />
  );
};

export default GalaxyStars;
