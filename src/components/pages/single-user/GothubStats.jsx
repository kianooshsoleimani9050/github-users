const GothubStats = ({ login }) => {
  return (
    <figure className="p-2 m-0 col-12">
      <img
        alt="user-github-status"
        src={`https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&count_private=true&theme=radical`}
        className="w-100 p-0 m-0"
      />
    </figure>
  );
};

export default GothubStats;
