import PropTyps from "prop-types";

const HomeCard = ({ title }) => {
  return (
    <div className="home-card">
      <h1>{title}</h1>
    </div>
  );
};

HomeCard.propTypes = {
  title: PropTyps.string,
};

export default HomeCard;
