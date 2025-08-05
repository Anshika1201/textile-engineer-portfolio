import React from "react";

const ServiceCard = ({ icon, title, children, color }) => (
  <div
     className="bg-blue-50 rounded-2xl shadow-lg p-8 shadow-blue-800 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl duration-300 w-[350px] h-[480px] mb-2 flex-shrink-0"
    style={{ background: color || "#e0f2fe" }}
  >
    <div className="mb-4 rounded-full text-3xl">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-4 text-blue-700">{title}</h3>
    <div className="text-blue-900 font-semibold">{children}</div>
  </div>
);

export default ServiceCard;
