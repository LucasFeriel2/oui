import imgUser from "../images/cock.png";
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  const Signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log(auth);
        let path = `/`;
        navigate(path);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav
      className="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-1
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light
    "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            aria-hidden="true"
            data-prefix="fas"
            data-icon="bars"
            className="w-28"
            role="img"
            src="https://i.goopics.net/c2girn.png"
          ></img>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a
            className="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-1
        "
            href="#"
          ></a>
          <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <Link
                to="/campagne"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                Campagne
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                to="/profil"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                to="/ficheperso"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                Personnage
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center relative">
          <div className="dropdown relative">
            <a
              onClick={Signout}
              className="
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            mr-4
            dropdown-toggle
            hidden-arrow
            flex items-center
          "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-door-open"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
              </svg>
            </a>
            <ul
              className="
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
        left-auto
        right-0
      "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={imgUser}
                className="rounded-full w-12"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
