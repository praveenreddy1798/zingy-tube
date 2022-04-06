import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  VideoListing,
  VideoDetail,
  Login,
  Signup,
  Likes,
  WatchLater,
  NotFound,
} from "./containers";
import { Message } from "./components";

export default function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-listing" element={<VideoListing />} />
        <Route path="/video" element={<VideoDetail />} />
        <Route path="/liked-videos" element={<Likes />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
