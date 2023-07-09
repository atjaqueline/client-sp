import PropTyps from "prop-types";
import homeCard from "../../data/homeCard.json";

const HomeCard = () => {
  return (
    <div className="home-container">
      {homeCard.map((data) => (
        <div className="home-card">
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
