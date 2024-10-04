import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

import ServiceCard from "./ServiceCard";

const Services = () => {
  const SERVICES = [
    {
      image: image1,
      title: "Aircraft Design & Manufacturing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!",
    },
    {
      image: image2,
      title: "Space Exploration Technology",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!",
    },
    {
      image: image3,
      title: "Space Exploration Technology",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eligendi a expedita dolore quod possimus nesciunt rem nisi incidunt autem dolor quo eius dolorum, amet soluta. Ea molestiae possimus distinctio!",
    },
  ];
  return (
    <div>
      <section className="container mx-auto p-9 py-16" id="services">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
          {SERVICES.map((project, index) => (
            <ServiceCard
              key={index}
              project={project}
              className="w-full md:w-3/4 lg:w-2/3"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
