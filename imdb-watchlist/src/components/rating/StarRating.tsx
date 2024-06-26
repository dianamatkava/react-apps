import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  allognItems: "center",
  gap: "16px",
};

const startContainerStype = { display: "flex" };

interface StarRatingProds {
  maxStarts?: number;
  color?: string;
  size?: number;
  userRating?: number | null;
  setRating: (val: number) => void;
}

const StarRating: React.FC<StarRatingProds> = ({
  maxStarts = 5,
  color = "red",
  size = 48,
  setRating,
  userRating= 0,
}) => {
  const textStyle = {
    lineHeight: 1,
    marginTop: 6,
    color: color,
    fontSize: `${size / 1.5}px`,
  };
  const [currentRating, setCurrentRating] = useState(userRating || 0);
  const [tempRating, setTempRating] = useState(currentRating);

  function handleRating(val: number) {
    setCurrentRating(val);
    setRating(val);
  }

  return (
    <div style={containerStyle}>
      <div style={startContainerStype}>
        {Array.from({ length: maxStarts }, (_, i) => (
          <Start
            key={i}
            startNum={i + 1}
            onHover={() => setTempRating(i + 1)}
            onHoverExit={() => setTempRating(currentRating)}
            onClick={(val) => handleRating(val)}
            full={i + 1 <= tempRating}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || currentRating || ""}</p>
    </div>
  );
};

interface StarProds {
  key: number;
  startNum: number;
  onHover: () => void;
  onHoverExit: () => void;
  onClick: (val: number) => void;
  full: boolean;
  color?: string;
  size?: number;
}

function Start({
  onHover,
  onClick,
  onHoverExit,
  startNum,
  full,
  color,
  size,
}: StarProds) {
  const startStyle = {
    width: `${size}px`,
    height: `${size}px`,
    color: "red",
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={startStyle}
      onMouseEnter={onHover}
      onMouseLeave={onHoverExit}
      onClick={() => onClick(startNum)}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <EmptyStar />
      )}
    </span>
  );
}

function EmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#000"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="{2}"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

export default StarRating;
