import { Link } from "react-router-dom";

// Importación de rutas
import routes from "../helpers/routes";

// Importación de componentes
import Button from "../components/Button";
import CardDetail from "../components/CardDetail";

const HomePage = () => {
  return (
    <main>
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-6 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left lg:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Socializa más a tus </span>
                  <span className="block text-color-2 xl:inline">mascotas</span>
                </h1>
                <p className="mt-4 text-base text-gray-500 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">
                  ¿Quieres socializar a tus mascotas? ¿Quieres adoptar una
                  mascota? ¿O conoces a alguien que quiera adoptar? Descuida,
                  todo esto y mucho más lo encuentras aquí en Pet Society
                </p>
                <p className="mt-2 text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0">
                  En esta red social podrás compartir, publicar, comentar y ver
                  mucho contenido sobre mascotas. No solo eso, tambien participa
                  de los diferentes eventos que tenemos para ti y tus mascotas
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link to={routes.services}>
                    <Button
                      style_button="inline-flex items-center font-medium text-white bg-color-2 px-8 py-3 md:py-4 md:text-lg md:px-10"
                      option="EXPLORAR"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover lg:w-full lg:h-full"
            src={require("../assets/img/banner_1.png")}
            alt="banner"
          />
        </div>
      </section>

      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-5/12 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <h2 className="text-lg">ACERCA DE NOSOTROS</h2>
            <h1 className="mt-2 text-4xl font-bold">
              Bienvenido a Pet Society
            </h1>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:max-w-lg sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              Somos una red social de mascotas donde podras compartin
              información de ellos, comentar, enterarte de las últimas
              novedades, tips, noticias y muchas más cosas del mundo de las
              mascotas.
              <br />
              <br />
              Con el objetivo de conectar a tus mascotas con el mundo de las
              redes sociales y así brindar más oportunidades para ti y tu
              mascota
              <br />
              ¡No te lo pierdas y vive esta gran experiencia!
            </p>
          </div>
          <div className="flex flex-wrap lg:py-6 -mb-10 lg:w-7/12 lg:pl-12 lg:text-left text-center">
            <div className="p-4 md:w-1/2">
              <CardDetail
                icon="bi bi-camera"
                detail="Comparte fotos"
                description="Publica fotos de tus mascotas y contartela con los demás usuarios"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <CardDetail
                icon="bi bi-card-text"
                detail="Comenta"
                description="No te olvides de dejar tu comentario en los demás posts"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <CardDetail
                icon="bi bi-geo-fill"
                detail="Participa de eventos"
                description="Date y dale la oportunidad a tu mascota"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <CardDetail
                icon="bi bi-chat-left-heart"
                detail="Adopta"
                description="Porque las mascotas alegran nuestra vida, animate y adopta"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
