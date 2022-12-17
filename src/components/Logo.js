const Logo = (props) => {
  return (
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-magenta-900">
      <img
        className="w-20"
        src={require("../assets/img/logo_icono.png")}
        alt="logo"
      />
      <span className={`ml-3 ${props.style_span}`}>Pet Society</span>
    </div>
  );
};

export default Logo;
