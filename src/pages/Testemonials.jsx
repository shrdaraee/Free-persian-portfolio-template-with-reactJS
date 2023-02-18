import LineGradiente from "../Components/LineGradiente";
import QuoteIcon from "../Components/Icons/quoteIcon";

import { motion } from "framer-motion";
import ArrowLeft from "../Components/Icons/ArrowLeft";
import ArrowRight from "../Components/Icons/ArrowRight";

export default function Testemonials() {
  return (
    <section id="testimonials" className="pt-24 pb-16">
      <motion.div
        className="text-center md:mx-16 mx-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-semibold text-3xl mb-3 text-red">
          نظرات <span className="text-yellow">مشتریان</span>
        </p>
        <LineGradiente width="mx-auto w-24 " />
        <p className="mt-5 mb-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است سطرآنچنان که لازم است از طراحان
          گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-2 mt-8 md:mx-14">
        <div>
          <img
            className="w-[400px] md:my-24 md:mr-12"
            src="assets/testemonial-img.png"
            alt="testemonial-img"
          />
        </div>
        <div>
          <div className="flex justify-end">
            <ArrowRight />
            <ArrowLeft />
          </div>
          <motion.div
            className="bg-white  rounded-xl shadow-testi md:w-[550px]  my-3 px-8 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="flex justify-between items-center ">
              <h2>علی احمدی</h2>
              <div>
                <QuoteIcon />
              </div>
            </div>
            <p className="mt-5 pb-4 text-gray-500 text-sm">
              از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است سطرآنچنان که لازم
              است از طراحا
            </p>
          </motion.div>
          <motion.div
            className="bg-white  rounded-xl shadow-testi md:w-[550px] my-3 px-8 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="flex justify-between items-center ">
              <h2>علی احمدی</h2>
              <div>
                <QuoteIcon />
              </div>
            </div>
            <p className="mt-5 pb-4 text-gray-500 text-sm">
              از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است سطرآنچنان که لازم
              است از طراحا
            </p>
          </motion.div>
          <motion.div
            className="bg-white  rounded-xl shadow-testi md:w-[550px] my-3 px-8 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="flex justify-between items-center ">
              <h2>علی احمدی</h2>
              <div>
                <QuoteIcon />
              </div>
            </div>
            <p className="mt-5 pb-4 text-gray-500 text-sm">
              از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است سطرآنچنان که لازم
              است از طراحا
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
