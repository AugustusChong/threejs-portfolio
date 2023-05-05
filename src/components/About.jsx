import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
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
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
