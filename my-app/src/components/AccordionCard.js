import React, { useRef } from "react";
import { icons } from "./icons/IconSVGs";

function AccordionCard({
  title,
  iconName,
  children,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) {
  const IconComponent = icons[iconName];
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`
        overflow-hidden cursor-pointer transform transition-all duration-300
        ${isOpen ? "scale-100 max-h-96" : "scale-100 max-h-24"}
        bg-blue-50 shadow-lg hover:shadow-xl
        shadow-[0_4px_32px_0_rgba(30,64,175,0.4)]
        hover:shadow-[0_8px_40px_0_rgba(30,64,175,0.6)]
        rounded-xl p-6 mb-4
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center space-x-4">
        <div className="rounded-full p-2 bg-blue-100 text-blue-500">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="font-bold text-lg text-blue-900">{title}</h3>
      </div>

      <div
        className={`
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "opacity-100 max-h-80 mt-4" : "opacity-0 max-h-0 mt-0"}
        `}
      >
        <div
          className="
            text-blue-700 text-sm text-left
            max-h-24 overflow-y-auto pr-2
            scrollbar-thin
            scrollbar-thumb-blue-800
            scrollbar-track-blue-100
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionCard;
