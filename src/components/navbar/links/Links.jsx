import NavLink from "./navLink";
import styles from "../navbar.module.css"

const Links = () => {
  const paths = [
    {
      link: "/",
      pathName: "Home",
    },
    {
      link: "/about",
      pathName: "About",
    },
    {
      link: "/contact",
      pathName: "Contact",
    },
    {
      link: "/blog",
      pathName: "Blogs",
    },
  ];

  const isAdmin = true;

  return (
    <ul className="navbar-nav">
      {paths.map((path) => (
        <NavLink
          key={path.pathName}
          pathName={path.pathName}
          link={path.link}
        />
      ))}
      {isAdmin ? (
        <>
        <NavLink
          pathName="Admin"
          link="/admin"
        />
        <button className="btn">Logout</button>
        </>
      ) : (
        <NavLink
          pathName="Login"
          link="/login"
        />
      )}
    </ul>
  );
};

export default Links;
