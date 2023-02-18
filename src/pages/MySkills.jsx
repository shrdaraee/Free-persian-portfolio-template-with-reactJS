import LineGradiente from "../Components/LineGradiente";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function MySkills({ setSelectedPage }) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 ">
      <div className="md:flex md:justify-between md:gap-8 mt-12  ">
        <div className="mt-4 md:mt-0">
          <div className=" z-0 md:ml-20 ">
            <img
              alt="skills"
              className="z-10 w-[435px]"
              src="assets/skils-img.png"
            />
          </div>
        </div>
        <motion.div
          className="md:w-2/3 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-semibold text-4xl mb-5">
            مهــــــارت‌های <span className="text-yellow">من </span>
          </p>
          <LineGradiente width="w-1/3" />
          <p className="mt-10 mb-7 leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </motion.div>
      </div>

      {/* skills */}
      <div className="md:flex md:justify-between mt-4 gap-8">
        <motion.div
          className="md:w-1/3 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 my-24 md:mt-0">
            <div className=" justify-center items-center flex mx-auto -mb-16 z-10">
              <p className="px-16 py-12 rounded-md bg-white shadow-lg text-blue text-xl">
                طراحی رابط کاربری (UI)
              </p>
            </div>
            <div className="md:w-[360px]  h-32 rounded-md bg-blue shadow-lg justify-center items-end z-0 pb-4 text-white flex">
              <a href="#">اطلاعات بیشتر</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 my-24 md:mt-0">
            <div className=" justify-center items-center flex mx-auto -mb-16 z-10">
              <p className="px-16 py-12 rounded-md bg-white shadow-lg text-green text-xl">
                طراحی سایت وردپرسی
              </p>
            </div>
            <div className="md:w-[360px] h-32 rounded-md bg-green shadow-lg justify-center items-end z-0 pb-4 text-white flex">
              <a href="#">اطلاعات بیشتر</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 my-24 md:mt-0">
            <div className=" justify-center items-center flex mx-auto -mb-16 z-10">
              <p className="px-16 py-12 rounded-md bg-white shadow-lg text-yellow text-xl">
                برنامه نویسی فرانت اند
              </p>
            </div>
            <div className="md:w-[360px] h-32 rounded-md bg-yellow shadow-lg justify-center items-end z-0 pb-4 text-white flex">
              <a href="#">اطلاعات بیشتر</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
