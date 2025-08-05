import React from "react";

const ModalProjectDetail = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative p-7">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-indigo-700 text-3xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover rounded-lg mb-4 border"
        />
        <h3 className="text-2xl font-bold text-indigo-800 mb-1">{project.title}</h3>
        <p className="text-gray-700 mb-2">{project.description}</p>
        <div className="text-gray-700 ">{project.details}</div>
      </div>
    </div>
  );
};

export default ModalProjectDetail;
