
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    title: "My First Acoustic Cover",
    artist: "Gabriel",
    videoUrl: "/videos/first-cover.mp4",
  },
];

function VideoGallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleVideos = videos.slice(0, visibleCount);

  return (
    <section className="video-section" id="videos">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">
            A COLLECTION OF SOUNDS
          </p>

          <h2>
            My <span>Acoustic</span> Covers.
          </h2>

          <p className="section-description">
            Songs I love, performed in my own little way.
          </p>
        </div>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="view-all"
        >
          More on Instagram
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="video-grid">
        {visibleVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>

      {visibleCount < videos.length && (
        <button
          className="load-more"
          onClick={() =>
            setVisibleCount((prev) => prev + 6)
          }
        >
          Load More Videos
        </button>
      )}
    </section>
  );
}

export default VideoGallery;
