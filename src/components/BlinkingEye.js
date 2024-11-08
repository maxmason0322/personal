import React, { useState } from "react";

const BlinkingEye = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="eye-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        color="#ffffff"
        fill="none"
        className={`eye ${isHovering ? "blink" : ""}`}
      >
        <path
          d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="eyelid"
        />
        <path
          d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="pupil"
        />
      </svg>
      <style jsx>{`
        .eye-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          cursor: pointer;
        }
        .eye {
          transition: transform 0.1s ease-in-out;
        }
        .eye.blink {
          animation: blink 0.2s ease-in-out;
        }
        .eyelid {
          transform-origin: center;
        }
        @keyframes blink {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default BlinkingEye;
