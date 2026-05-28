import React, { useEffect, useState } from "react";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // START
  const handleStart = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Enter valid time");
      return;
    }

    setIsStart(true);
    setIsPaused(false);
  };

  // PAUSE
  const handlePause = () => {
    setIsPaused(true);
  };

  // RESUME
  const handleResume = () => {
    setIsPaused(false);
  };

  // RESET
  const handleReset = () => {
    setIsStart(false);
    setIsPaused(false);

    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  // INPUT
  const handleInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    const id = e.target.id;

    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  // TIMER LOGIC
  useEffect(() => {
    let interval;

    if (isStart && !isPaused) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          clearInterval(interval);
          alert("Timer Finished");
          handleReset();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStart, isPaused, hours, minutes, seconds]);

  // FORMAT
  const format = (time) => String(time).padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col mb-4 items-center justify-center">
        <span className="text-6xl font-bold mx-2">⏰</span>
        <h1 className="text-4xl font-bold">Countdown Timer</h1>
      </div>

      {!isStart ? (
        <div className="mx-4 bg-white p-6 rounded shadow-md">
          <div className="flex space-x-4 p-4">
            <input
              id="hours"
              type="number"
              placeholder="HH"
              className="border p-2 rounded w-20 text-center"
              onChange={handleInput}
            />

            <input
              id="minutes"
              type="number"
              placeholder="MM"
              className="border p-2 rounded w-20 text-center"
              onChange={handleInput}
            />

            <input
              id="seconds"
              type="number"
              placeholder="SS"
              className="border p-2 rounded w-20 text-center"
              onChange={handleInput}
            />
          </div>

          <button
            className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 w-full"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div>
            <span className="text-5xl font-bold mx-2">
              {format(hours)}
            </span>

            <span className="text-5xl font-bold">:</span>

            <span className="text-5xl font-bold mx-2">
              {format(minutes)}
            </span>

            <span className="text-5xl font-bold">:</span>

            <span className="text-5xl font-bold mx-2">
              {format(seconds)}
            </span>
          </div>

          <div className="mt-4">
            {!isPaused ? (
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mx-2"
                onClick={handlePause}
              >
                Pause
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
                onClick={handleResume}
              >
                Resume
              </button>
            )}

            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mx-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
