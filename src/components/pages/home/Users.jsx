import { useSelector } from "react-redux";
import UserCard from "./users/UserCard";

const Users = () => {
  const usersData = useSelector((state) => state.usersData);
  return (
    <div className="p-0 m-0 mt-3 d-flex align-items-center justify-content-center">
      <div className="p-0 m-0 w-75 row">
        {usersData?.items?.map((user) => (
          <div className="p-2 m-0 col-12 col-sm-6 col-lg-4 col-xl-3">
            <UserCard key={`userCard${user?.id}`} {...user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
