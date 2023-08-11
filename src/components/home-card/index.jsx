import PropTyps from "prop-types";

const HomeCard = ({ title }) => {
  return (
    <div className="home-card">
      <div className="home-title"><h3><b>{title}</b></h3></div>
    </div>
  );
};

HomeCard.propTypes = {
  title: PropTyps.string,
};

export default HomeCard;
