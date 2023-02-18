import LineGradiente from "../Components/LineGradiente";
import Project from "../Components/Project";

import { motion } from "framer-motion";

const conteiner = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Projects() {
  return (
    <section id="project" className="py-20 ">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl mb-5 mt-6">
            <span className="text-yellow"> نمونـــــــه </span>کارها
          </p>
          <div className="flex justify-center mt-5">
            <LineGradiente width="w-1/2" />
          </div>
        </div>

        <p className="my-8 leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </motion.div>

      {/*projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={conteiner}
        >
          <div
            className="flex justify-center text-center items-center
                            p-10 bg-yellow max-w-[400px] max-h-[400px] text-2xl
                             font-semibold text-white"
          >
            پروژه های طراحی سایت
          </div>
          <Project title="Project-1" />
          <Project title="Project-2" />
          <Project title="Project-3" />
          <Project title="Project-4" />

          <div
            className="flex justify-center text-center items-center
                            p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl
                             text-white font-semibold "
          >
            برنامه نویسی و ری اکت
          </div>
          <Project title="Project-5" />
          <Project title="Project-6" />
          <Project title="Project-7" />
        </motion.div>
      </div>
    </section>
  );
}
