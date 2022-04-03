import { Link } from "react-router-dom";
import { Navbar } from "../components";
import "../themes/home.css";

const Home = () => {
  return (
    <div className="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <div className="flex-vertical gap-2 justify-between">
          <Link to="/video-listing">
            <img
              className="aspect-ratio-initial banner"
              src="https://res.cloudinary.com/praveen-kumar/image/upload/v1648914480/video-library-image_ddyseu.png"
              alt="banner"
              loading="lazy"
            />
          </Link>
          <div className="category-section h-100 flex-grow-1">
            <div className="grid grid-3 category-container gap-2">
              <Link
                className="flex text-overlay-card w-100"
                to="/video-listing?categoryName=music"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://i.ytimg.com/vi/lhn85MJ8EvE/hqdefault.jpg"
                    alt="music"
                    loading="lazy"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Music</h3>
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-overlay-card w-100"
                to="/video-listing?categoryName=sports"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://i.ytimg.com/vi/DVEH4YrtGog/hqdefault.jpg"
                    alt="sports"
                    loading="lazy"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Sports</h3>
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-overlay-card w-100"
                to="/video-listing?categoryName=technology"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://i.ytimg.com/vi/5CpmX-lqvn0/hqdefault.jpg"
                    alt="technology"
                    loading="lazy"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Technology</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <script src="https://zingy-ui.netlify.app/index.js"></script>
      </main>
    </div>
  );
};

export { Home };
