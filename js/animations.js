
/* ========================================
   INSEPTION - ANIMATIONS
======================================== */

const initAnimations = () => {
  const video = document.querySelector(".hero__video");

  const showPage = () => {
    document.body.classList.add("page-loaded");
  };

  if (document.readyState === "complete") {
    requestAnimationFrame(showPage);
  } else {
    window.addEventListener("load", showPage, { once: true });
  }

  if (video) {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      const playback = video.play();

      if (playback !== undefined) {
        playback.catch((error) => {
          console.warn("El video no pudo iniciarse automáticamente:", error);
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }

    video.addEventListener("error", () => {
      console.error("No se pudo cargar el video de INSEPTION.");
    });
  }
};
