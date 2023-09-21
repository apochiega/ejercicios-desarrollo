import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function App() {
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [rankingActual, setRankingActual] = useState(0);
  const [rankingHover, setRankingHover] = useState(0);
  const [activated, setActivated] = useState(false);

  const handleStars = (starValue) => {
    if (activated) {
      setRankingActual(starValue);
    } else {
      setRankingHover(starValue);
    }
  };

  const handleStarClick = (starValue) => {
      if (!activated || rankingActual !== starValue) {
        setActivated(true);
        setRankingActual(starValue);
        setStars(stars.map((star, index) => star <= starValue ? starValue : star));
      } else {
        setActivated(false);
        setRankingActual(0);
        setStars([1, 2, 3, 4, 5]);
      }
    };
  

  

  const handleStarLeave = () => {
    if (!activated) {
      setRankingHover(0);
    }
  };

  return (
    <div>
      <div>
        {stars.map((star, index) => (
          <FaStar
            key={index}
            size={24}
            style={{
              marginRight: "5px",
              cursor: "pointer",
              color: star <= (activated ? rankingActual : rankingHover) ? "yellow" : "gray"
            }}
            onMouseOver={() => handleStars(star)}
            onMouseLeave={handleStarLeave}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
      <p>Tu calificación: {activated ? rankingActual : rankingHover} estrella(s)</p>
    </div>
  );
}

export default App;
