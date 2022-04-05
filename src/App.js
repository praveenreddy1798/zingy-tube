import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, VideoListing, VideoDetail } from "./containers";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-listing" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}
