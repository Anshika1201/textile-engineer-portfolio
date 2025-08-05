import React from "react";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../data/serviceData";
import useResetAnimation from "../hooks/useAnimationOnSectionChange";

function Services () {

     const fadeInRef = useResetAnimation("fade-in-up", []);

  return (
  <section  id="services" className="py-8 bg-blue-500">
    <div className="max-w-6xl mx-auto px-4 ">
      <h2   ref={fadeInRef} className="text-3xl font-bold text-center text-white mb-8">
        My Textile Engineering Skills & Services
      </h2>
      <div className="flex flex-row gap-6 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-bg-blue-900 py-1 " style={{ overflowY: "visible" }}>
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            color={service.color}
            title={service.title}
          >
            {service.content}
          </ServiceCard>
        ))}
      </div>
    </div>
  </section>
 );
}

export default Services;
