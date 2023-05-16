/* eslint react/no-unknown-property: 0 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "@dotlottie/player-component";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  const ref = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  useEffect(() => {
    const dotlottiePlayer = ref.current;
    const readyHandler = () => {
      ref.current.play();
    };

    dotlottiePlayer.addEventListener("ready", readyHandler);

    return () => {
      dotlottiePlayer.removeEventListener("ready", readyHandler);
    };
  }, []);

  return (
    <Tilt
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
      scale={isMobile ? 1.1 : 1.2}
      transitionSpeed={450}
      className="xs:w-[240px] w-full max-[450px]:pl-2 max-[450px]:pr-2"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full sky-sea-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="w-36 h-36 object-contain">
            <dotlottie-player loop speed={1} src={icon} ref={ref} />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-justify mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a full stack software engineer with experience in both
        front-end and back-end technologies, such as JavaScript, React, C#,
        .NET, and SQL. I&apos;m a quick learner and I&apos;m always seeking out
        challenges to learn new technologies and improve my skills. I&apos;m
        passionate about working with others to create efficient, scalable, and
        user-friendly applications that solve real-world problems. Let&apos;s
        create something amazing together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutWithWrapper = SectionWrapper(About, "about");

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default AboutWithWrapper;
