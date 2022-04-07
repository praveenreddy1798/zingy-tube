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
  History,
} from "./containers";
import { Message, PrivateRoute } from "./components";

export default function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-listing" element={<VideoListing />} />
        <Route path="/video" element={<VideoDetail />} />
        <Route
          path="/liked-videos"
          element={
            <PrivateRoute>
              <Likes />
            </PrivateRoute>
          }
        />
        <Route
          path="/watch-later"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/watch-history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
