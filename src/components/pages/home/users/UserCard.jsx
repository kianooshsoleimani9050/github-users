import { FaGithub } from "react-icons/fa";

const UserCard = ({ avatar_url, login, html_url }) => {
  return (
    <div className="p-0 m-0 h-100 shadow user_card_div__container">
      <div className="p-4 m-0 user_card_content_div__container w-100 h-100 d-flex flex-column align-items-center justify-content-between">
        <img
          src={avatar_url}
          alt="avatar"
          className="user_card_img__container"
        />
        <span className="my-2 user_card_text__container">{login}</span>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer noopener"
          className="user_card_icon_a__container"
        >
          <FaGithub />
        </a>
        <a
          href={`/user/${login}`}
          className="p-2 px-4 mt-3 m-0 user_card_a__container"
        >
          More detail
        </a>
      </div>
    </div>
  );
};

export default UserCard;
