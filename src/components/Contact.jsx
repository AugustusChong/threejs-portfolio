import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const validationSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-Z ]*$/, "Please enter a valid name")
      .min(2, "Name must be at least 2 characters"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // watch,
  } = useForm({ resolver: yupResolver(validationSchema) });

  // console.log(watch("name"));
  // console.log(watch("email"));
  // console.log(watch("message"));

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const inputClasses =
    "bg-tertiary py-4 px-6 placeholder:select-none text-white rounded-lg outline-none border-none font-medium";

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        "service_yjq5ipm",
        "template_d8xkzkr",
        {
          from_name: data.name,
          to_name: "Augustus",
          from_email: data.email,
          reply_to: data.email,
          to_email: "augustus.chong.dev@gmail.com",
          message: data.message,
        },
        "PDMFFARlxpZJ2tq7K"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Message failed to send!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-white font-medium mb-4">Name</span>
              <span className="text-red-600">{errors.name?.message}</span>
            </div>
            <input
              {...register("name")}
              placeholder={
                !errors.name ? "Your Name" : "How will I know who you are?"
              }
              className={`${inputClasses} ${
                !errors.name
                  ? "placeholder:text-secondary"
                  : " placeholder:text-amber-400"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </label>
          <label className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-white font-medium mb-4">Email</span>
              <span className="text-red-600">{errors.email?.message}</span>
            </div>
            <input
              {...register("email")}
              placeholder={
                !errors.email
                  ? "Your Email"
                  : "How am I going to reply back to you?"
              }
              className={`${inputClasses} ${
                !errors.email
                  ? "placeholder:text-secondary"
                  : "placeholder:text-amber-400"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </label>
          <label className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-white font-medium mb-4">Message</span>
              <span className="text-red-600">{errors.message?.message}</span>
            </div>
            <textarea
              {...register("message")}
              rows={6}
              placeholder={
                !errors.message
                  ? "Your Message"
                  : "How will I know what you want to say? I can't read minds you know..."
              }
              className={`${inputClasses} ${
                !errors.message
                  ? "placeholder:text-secondary"
                  : "placeholder:text-amber-400"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl select-none"
            >
              {!loading ? "Submit" : "Sending..."}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactWithWrapper = SectionWrapper(Contact, "contact");

export default ContactWithWrapper;
