import { useEffect, useRef } from "react";
import "./HomePage.css";

const HomePage = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }).fill(1);

    const drawMatrixRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(drawMatrixRain, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
  }, []);

  const handleNavigate = (userType) => {
    alert(`Redirecting to ${userType} login page...`);
    // Add redirection logic here (e.g., window.location.href = `/login/${userType}`);
  };

  return (
    <>
      <canvas ref={canvasRef} id="matrix"></canvas>
      <audio ref={audioRef} src="/bg-music.mp3" loop />
      <div className="content">
        <h1>
          XTaXAdvisor <br />
          <span>Your Business Solutions</span>
        </h1>
        <div className="buttons">
          <button onClick={() => handleNavigate("client")}>Client Login</button>
          <button onClick={() => handleNavigate("guest")}>Guest Login</button>
          <button onClick={() => handleNavigate("professional")}>
            Professional Login
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;