import { useState } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("background-audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <audio id="background-audio" loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleMusic}
        style={{
          background: "none",
          border: "2px solid #00ff00",
          color: "#00ff00",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default BackgroundMusic;