import React from "react";

const ServiceCard = ({ project }) => {
  return (
    <div className="border-2 border-white p-4 rounded">
      <img
        src={project.image}
        alt={project.title}
        className="border-2 border-white  mx-auto w-120 h-50 sm:w-120 sm:h- lg:w-120 lg:h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-center">
          {project.title}
        </h3>
        <p className="text-sm text-justify pt-4">{project.description}</p>
      </div>
      <div className="flex justify-center py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
