import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoGallery from "./components/VideoGallery";
import "./App.css";

function App(){
  return(
  <>
  <Navbar/>
  <main>
  <Hero />
  <VideoGallery/>
  </main>

  </>
  );
}

export default App;