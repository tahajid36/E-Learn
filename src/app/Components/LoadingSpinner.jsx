import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"

    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-20 h-20">
          <svg
            className="animate-spin"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#8b5cf6"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              className="opacity-25"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#6366f1"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="90, 150"
              style={{ filter: "drop-shadow(0 0 5px #6366f1)" }}
            />
          </svg>
        </div>

        <div className="text-xl font-semibold text-gray-100 tracking-wider animate-pulse">
          Loading Authentication...
        </div>

        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-indigo-500 animate-slide-right"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide-right {
          animation: slide-right 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
