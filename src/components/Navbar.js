import { Link } from "react-router-dom";

// Importación de rutas
import routes from "../helpers/routes";
import useAuth from "../auth/useAuth";

// Importación de componentes
import Button from "./Button";
import Logo from "./Logo";
import Option from "./Option";

const Navbar = () => {
  const { user, isLogged } = useAuth();
  const { logout } = useAuth();

  const signOff = () => {
    localStorage.removeItem("tl-user");
    localStorage.removeItem("tl-token");
    logout();
  };

  return (
    <header className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
        <Logo style_span="text-xl" />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
          <Option
            link={routes.home}
            style_link="mr-5 text-gray-400 hover:text-gray-900"
            option="Inicio"
          />
          <Option
            link={routes.tutors}
            style_link="mr-5 text-gray-400 hover:text-gray-900"
            option="Posts"
          />
          <Option
            link={routes.services}
            style_link="mr-5 text-gray-400 hover:text-gray-900"
            option="Eventos"
          />
        </nav>
        {!isLogged() ? (
          <div className="inline-flex items-center">
            <Link to={routes.login}>
              <Button
                style_extra="mr-2 mt-4 md:mt-0"
                style_button="inline-flex items-center bg-gray-200 hover:bg-gray-300 px-3 py-2"
                option="Iniciar Sesión"
              />
            </Link>
            <Link to={routes.register}>
              <Button
                style_extra="mt-4 md:mt-0"
                style_button="inline-flex items-center text-white bg-color-2 px-3 py-2"
                option="Regístrate"
              />
            </Link>
          </div>
        ) : (
          <div className="dropdown relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border-0 shadow-sm px-3 py-2 bg-white hover:bg-gray-50 focus:outline-none"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <span>{user.name}</span>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className="dropdown-menu absolute hidden origin-top-right right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-[100]"
              aria-labelledby="menu-button"
            >
              <li className="py-1" role="none">
                <Option
                  link={routes.panel.profile}
                  style_link="text-gray-700 block px-4 py-2 text-sm"
                  option="Mi perfil"
                />
                <Option
                  link={routes.panel.courses}
                  style_link="text-gray-700 block px-4 py-2 text-sm"
                  option="Posts"
                />
              </li>
              <li className="py-1" role="none">
                <Option
                  link={routes.home}
                  style_link="text-gray-700 block px-4 py-2 text-sm"
                  option="Cerrar sesión"
                  onClick={signOff}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
