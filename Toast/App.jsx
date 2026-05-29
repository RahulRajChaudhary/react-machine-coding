import React, { useState } from "react";
import "./index.css";

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const handleAddToast = (message, type) => {
    const id = Date.now();

    const newToast = {
      id,
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      handleCloseToast(id);
    }, 3000);
  };

  const handleCloseToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getToastColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-screen h-screen">
      {/* Toast Stack */}
      <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-enter min-w-[300px] flex items-center justify-between p-4 text-white rounded-lg shadow-lg ${getToastColor(
              toast.type
            )}`}
          >
            <span>{toast.message}</span>

            <button
              onClick={() => handleCloseToast(toast.id)}
              className="ml-4 font-bold text-lg cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-4 text-white text-xl font-semibold border-2 border-gray-300 p-4 rounded-lg">
          <button
            className="bg-green-500 px-6 py-3 rounded"
            onClick={() =>
              handleAddToast("Success Toast Created!", "success")
            }
          >
            Success
          </button>

          <button
            className="bg-red-500 px-6 py-3 rounded"
            onClick={() =>
              handleAddToast("Something went wrong!", "error")
            }
          >
            Error
          </button>

          <button
            className="bg-yellow-500 px-6 py-3 rounded"
            onClick={() =>
              handleAddToast("Warning: Check your input!", "warning")
            }
          >
            Warning
          </button>

          <button
            className="bg-blue-500 px-6 py-3 rounded"
            onClick={() =>
              handleAddToast("Information Toast", "info")
            }
          >
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ToastContainer />;
};

export default App;