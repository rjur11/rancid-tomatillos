import tomatillo from "../../Images/blackfilled.png";
import emptyTomatillo from "../../Images/whiteclear.png";
import "./RatingDisplay.css";

export default function RatingDisplay({ rating }) {
  return (
    <div className="rating">
      {[...Array(rating)].map(() => (
        <img src={tomatillo} className="tomatillo" alt="tomatillo" />
      ))}
      {[...Array(5 - rating)].map(() => (
        <img
          src={emptyTomatillo}
          className="empty-tomatillo"
          alt="empty-tomatillo"
        />
      ))}
    </div>
  );
}
