import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useVideos } from "../context";
export const Navbar = ({ displaySearch = false }) => {
  const { videosDispatch } = useVideos();
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleSearch = (e, onSearchClicked = false) => {
    if (e.key === "Enter" || onSearchClicked) {
      videosDispatch({
        type: "SEARCH_BY_VIDEO_NAME",
        payload: searchValue,
      });
    }
  };

  const getStyles = ({ isActive }) => {
    if (isActive) {
      return {
        backgroundColor: "#f5f3ff",
        color: "#45198b",
      };
    }
  };

  return (
    <>
      <nav className="navbar bg-white border-light-grey flex-between no-wrap pd-xsm">
        <Link to="/" className="nav-left">
          <h3
            className={`pd-sm nav-logo ${
              pathname === "/" ? "primary-color" : "secondary-color"
            }`}
          >
            Zingy Tube
          </h3>
        </Link>
        {displaySearch && (
          <div>
            <input
              className="input input-secondary search"
              type="search"
              placeholder="search by video name"
              value={searchValue}
              name="search"
              id="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
            />
            <button
              onClick={(e) => handleSearch(e, true)}
              className="btn btn-secondary outline-none search-btn"
            >
              Search
            </button>
          </div>
        )}
        <div className="flex-evenly pd-sm col-gap-2 nav-right">
          <button className="btn btn-action">Login</button>
          <Link to="/liked-videos">
            <div className="badge-container icon-badge">
              <button>
                <i
                  className={`fa like-icon fa-thumbs-o-up pointer nav-icon ${
                    pathname === "/liked-videos"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">0</span>
            </div>
          </Link>
          <Link to="/watch-later">
            <div className="badge-container icon-badge">
              <button className="wishlist">
                <i
                  className={`fa fa-2x heart-icon fa-heart-o pointer nav-icon ${
                    pathname === "/watchlist"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">0</span>
            </div>
          </Link>
          <Link to="/watch-history">
            <div className="badge-container icon-badge">
              <button>
                <i
                  className={`fa fa-2x fa-history secondary-dark nav-icon ${
                    pathname === "/watch-history"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">0</span>
            </div>
          </Link>
          <Link to="/playlist">
            <div className="badge-container icon-badge">
              <button>
                <i
                  className={`fa playlist-icon fa-caret-square-o-right pointer secondary-dark nav-icon ${
                    pathname === "/playlist"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">0</span>
            </div>
          </Link>
        </div>
        <div className="mobile-menu flex-evenly align-center">
          <button
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
            className="btn hamburger mobile-item secondary-color"
          >
            {isMobileMenuVisible ? (
              <i className="fa fa-close fa-2x h-100"></i>
            ) : (
              <i className="fa fa-bars fa-2x h-100"></i>
            )}
          </button>
        </div>
      </nav>
      {isMobileMenuVisible && (
        <div className="sidebar sidebar-mobile pd-md">
          <ul className="sidebar-items flex-vertical align-center">
            <NavLink style={getStyles} to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink style={getStyles} to="/liked-videos">
              <li>Liked videos</li>
            </NavLink>
            <NavLink style={getStyles} to="/watch-later">
              <li>Watch later</li>
            </NavLink>
            <NavLink style={getStyles} to="/watch-history">
              <li>Watch history</li>
            </NavLink>
            <NavLink style={getStyles} to="/playlist">
              <li>Playlist</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};
