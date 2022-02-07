import tomatillo from "./blackfilled.png";
import emptyTomatillo from "./whiteclear.png";
import "./RatingDisplay.css";

export default function RatingDisplay({ rating }) {
  return (
    <>
      {[...Array(rating)].map(() => (
        <img src={tomatillo} className="tomatillo" />
      ))}
      {[...Array(5 - rating)].map(() => (
        <img src={emptyTomatillo} className="empty-tomatillo" />
      ))}
    </>
  );
}
