import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, VideoListing, VideoDetail, Login, Signup } from "./containers";
import { Message } from "./components";

export default function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-listing" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
