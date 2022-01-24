import { FaBook } from "react-icons/fa";

const SingleRepository = ({ repoName, repoUrl, repoDesc, repoLang }) => {
  return (
    <div className="p-2 m-0 col-12 col-lg-6">
      <div className="p-3 m-0 single_repo_div__container d-flex flex-column justify-content-between">
        <div className="p-0 m-0">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="single_repo_a__container"
          >
            <FaBook size={16} />
            <span className="mx-1">{repoName}</span>
          </a>
          <p className="single_repo_p__container">{repoDesc}</p>
        </div>
        <div className="p-0 m-0 d-flex align-items-center">
          {repoLang && (
            <>
              <div className="single_repo_lang_div__container" />
              <span className="mx-2 single_repo_lang_span__container">
                {repoLang}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRepository;
