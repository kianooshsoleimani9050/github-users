import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
const PersonalProfile = ({
  detailError,
  imgSrc,
  name,
  username,
  bio,
  following,
  following_url,
  followers,
  followers_url,
  location,
  GHprofileLink,
}) => {
  return (
    <div className="p-2 px-3 p-md-3 m-0 col-12 col-sm-6 col-md-4 col-xl-3">
      {detailError?.isError ? (
        <span className="text-white">
          Can not find this profile {detailError?.errMsg}
        </span>
      ) : (
        <>
          <div className="p-0 m-0 user_profile_div__container d-flex flex-column align-items-center justify-content-center">
            <img src={imgSrc} alt="avatar" className="mb-2" />
            <h4>{name}</h4>
            <h5>{username}</h5>
            <p className="w-100">{bio}</p>
            <div className="p-0 m-0 w-100">
              <FaUserFriends className="mb-1" size={20} />
              <span className="mx-2">
                {followers}{" "}
                <a href={followers_url} className="user_profile_a__container">
                  Folowers
                </a>{" "}
                , {following}{" "}
                <a href={following_url} className="user_profile_a__container">
                  Followings
                </a>
              </span>
            </div>
            {location && (
              <div className="p-0 m-0 w-100">
                <FaMapMarkerAlt className="mb-1" /> {location}
              </div>
            )}
            <a
              href={GHprofileLink}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 px-3 mt-3 w-100 text-center user_card_a__container"
            >
              Github Profile
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalProfile;
