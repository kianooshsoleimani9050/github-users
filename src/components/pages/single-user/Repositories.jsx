import GothubStats from "./GothubStats";
import SingleRepository from "./SingleRepository";

const Repositories = ({ repoError, repos = [], login }) => {
  return (
    <div className="p-0 m-0 col-12 col-sm-6 col-md-8 col-xl-9">
      {repoError?.isError ? (
        <span className="text-white">
          Can not find this user repos {repoError?.errMsg}
        </span>
      ) : (
        <div className="p-2 p-md-3 m-0 row">
          <h3 className="text-white">Repositories</h3>
          <GothubStats login={login} />
          {repos.map((repo) => (
            <SingleRepository
              key={`singleRepo${repo?.id}`}
              repoName={repo?.name}
              repoUrl={repo?.html_url}
              repoDesc={repo?.description}
              repoLang={repo?.language}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;
