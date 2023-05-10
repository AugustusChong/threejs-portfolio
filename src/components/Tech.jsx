import { Tooltip } from "flowbite-react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <Tooltip
          content={technology.name}
          placement="top"
          className="select-none pl-2 pr-2"
          key={`${technology.name}-${index}`}
        >
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

const TechWithWrapper = SectionWrapper(Tech, "tech");

export default TechWithWrapper;
