import LineGradiente from "../Components/LineGradiente";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        className="flex justify-start w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-opensans font-semibold text-3xl mb-5 ">
            ارتباط با من
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradiente width="w-1/2 " />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/b8d70d8ba9c5c70d8135f879154465fa"
            method="POST"
          >
            <div className="flex items-center justify-between">
              <input
                className="w-full border-2 border-yellow bg-white rounded-lg font-semibold placeholder-opaque-black p-3 ml-3"
                type="text"
                placeholder="نام و نام خانوادگی"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "this filde is required"}
                  {errors.name.type === "maxLength" && "max length is 100 char"}
                </p>
              )}

              <input
                className="w-full border-2 border-yellow bg-white rounded-lg font-semibold placeholder-opaque-black p-3 "
                type="email"
                placeholder="آدرس ایمیل"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "this filde is required"}
                  {errors.email.type === "pattern" && "invalid email adress"}
                </p>
              )}
            </div>

            <textarea
              className="w-full bg-white border-2 border-yellow rounded-lg  font-semibold placeholder-opaque-black p-3 mt-2"
              type="text"
              placeholder="پیغام..."
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "this filde is required"}
                {errors.message.type === "maxLength" &&
                  "max length is 2000 char"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold  mt-5 w-full text-white
                          hover:shadow-md transition duration-500 rounded-lg"
            >
              ارسال پیام برای من
            </button>
          </form>
        </motion.div>

        <motion.div
          className="basis-1/2 flex justify-center items-end md:-mt-32 mt-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            alt="contact"
            src="../assets/contact-message-img.png"
            className="w-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
