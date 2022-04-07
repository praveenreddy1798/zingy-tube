import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useVideos, useAuth, useToast } from "../context";
import { MESSAGES, NAV_ACTIVE_BACKGROUND, NAV_ACTIVE_COLOR } from "../utils";
export const Navbar = ({ displaySearch = false }) => {
  const {
    videosDispatch,
    videosState: { likes, playlists, history, watchlater },
  } = useVideos();
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();
  const { toastDispatch } = useToast();
  const navigate = useNavigate();
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
        backgroundColor: NAV_ACTIVE_BACKGROUND,
        color: NAV_ACTIVE_COLOR,
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ isAuth: false, token: null, userDetails: {} });
    videosDispatch({ type: "RESET_TO_INITIAL_STATE" });
    toastDispatch({
      type: "SHOW_TOAST",
      payload: {
        successMessage: MESSAGES.LOGOUT.SUCCESS,
        errorMessage: null,
      },
    });
    navigate("/login");
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
          <button
            onClick={() => (isAuth ? logout() : navigate("/login"))}
            className="btn btn-action"
          >
            {isAuth ? "Logout" : "Login"}
          </button>
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
              <span className="rounded">{likes.length}</span>
            </div>
          </Link>
          <Link to="/watch-later">
            <div className="badge-container icon-badge">
              <button className="wishlist">
                <i
                  className={`fa fa-2x heart-icon fa-heart-o pointer nav-icon ${
                    pathname === "/watch-later"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">{watchlater.length}</span>
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
              <span className="rounded">{history.length}</span>
            </div>
          </Link>
          <Link to="/playlists">
            <div className="badge-container icon-badge">
              <button>
                <i
                  className={`fa playlist-icon fa-caret-square-o-right pointer secondary-dark nav-icon ${
                    pathname === "/playlists"
                      ? "primary-color"
                      : "secondary-color"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
              <span className="rounded">{playlists.length}</span>
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
              <li>{isAuth ? "Logout" : "Login"}</li>
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
