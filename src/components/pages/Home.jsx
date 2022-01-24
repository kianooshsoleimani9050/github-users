import Search from "./home/Search";
import Users from "./home/Users";

const Home = () => {
  return (
    <div className="p-0 py-3 py-md-5 m-0 pages_div__container">
      <Search />
      <Users />
    </div>
  );
};

export default Home;
