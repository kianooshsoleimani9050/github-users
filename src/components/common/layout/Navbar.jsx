import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="p-0 m-0 w-100 navbar_div__container d-flex align-items-center justify-content-center">
      <FaGithub className="mx-2" />
      <h2 className="p-0 m-0 navbar_text_h2__container">GITHUB USERS</h2>
    </div>
  );
};

export default Navbar;
