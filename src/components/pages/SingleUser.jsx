import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../common/web/loading/Loading";
import PersonalProfile from "./single-user/PersonalProfile";
import Repositories from "./single-user/Repositories";

const SingleUser = () => {
  const { login } = useParams();
  const {
    loading: detailLoading,
    error: detailError,
    result: detailResult,
  } = useFetchData({
    path: `users/${login}`,
    query: "client_id=undefined&client_secret=undefined",
  });
  const {
    loading: repoLoading,
    error: repoError,
    result: repoResult,
  } = useFetchData({
    path: `users/${login}/repos`,
    query:
      "per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined",
  });
  return (
    <div className="p-0 m-0 pages_div__container">
      {detailLoading || repoLoading ? (
        <Loading />
      ) : (
        <div className="p-0 m-0 row">
          <PersonalProfile
            detailError={detailError}
            imgSrc={detailResult?.avatar_url}
            bio={detailResult?.bio}
            name={detailResult?.name}
            username={detailResult?.login}
            location={detailResult?.location}
            followers={detailResult?.followers}
            followers_url={detailResult?.followers_url}
            following={detailResult?.following}
            following_url={detailResult?.following_url}
            GHprofileLink={detailResult?.html_url}
          />
          <Repositories
            repoError={repoError}
            repos={repoResult}
            login={login}
          />
        </div>
      )}
    </div>
  );
};

export default SingleUser;
