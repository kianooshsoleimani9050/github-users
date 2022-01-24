import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSearchUsers } from "../../../hooks/useSearchUsers";
import { getUsersData } from "../../../redux/actions/users";
import Loading from "../../common/web/loading/Loading";
const Search = ({ setData }) => {
  const dispach = useDispatch();
  const { mutate, error, loading } = useSearchUsers({
    onSuccess: (data) => {
      dispach(getUsersData(data));
    },
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(searchQuery);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 py-0 m-0 d-flex flex-column align-items-center justify-content-center"
    >
      <input
        type="text"
        name="search"
        id="search"
        value={searchQuery}
        className="p-3 m-0 search_input__container w-75"
        placeholder="Search for users..."
        onChange={handleSearchQueryChange}
      />
      {loading ? (
        <Loading />
      ) : (
        <button
          type="submit"
          className="p-0 m-0 mt-2 w-75 d-flex align-items-center justify-content-center search_button__container"
        >
          <FaSearch className="mx-2" />
          <span>Search</span>
        </button>
      )}
      {error.isError && <span className="text-danger">{error.errorMsg}</span>}
    </form>
  );
};

export default Search;
