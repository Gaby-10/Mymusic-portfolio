
import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

function VideoCard({ video }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <article className="video-card">

        {/* VIDEO THUMBNAIL */}

        <button
          className="video-thumbnail"
          onClick={() => setIsOpen(true)}
          aria-label={`Play ${video.title}`}
        >
          <video
            src={video.videoUrl}
            className="thumbnail-video"
            muted
            playsInline
            preload="metadata"
          />

          <span className="thumbnail-play">
            <Play size={25} fill="currentColor" />
          </span>
        </button>

        {/* VIDEO INFORMATION */}

        <div className="video-info">
          <div>
            <h3>{video.title}</h3>
            <p>{video.artist}</p>
          </div>
        </div>

      </article>

      {/* VIDEO MODAL */}

      {isOpen && (
        <div
          className="video-modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={video.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <video
              className="modal-video"
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
            >
              Your browser does not support video playback.
            </video>

            <div className="modal-video-info">
              <h3>{video.title}</h3>
              <p>{video.artist}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoCard;
