import { motion } from "framer-motion";

export default function Project({
  title,
  subtitle = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
  link = "#",
}) {
  const projectVar = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-90
   transition duration-500 bg-grey z-30 flex flex-col justify-center items-center p-16 text-deep-blue cursor-default`;
  const projectname = title.split(" ").join("_").toLowerCase();
  return (
    <motion.div variants={projectVar} className="relative">
      <div className={overlayStyle}>
        <p className="text-2xl ">{title}</p>
        <p className="mt-7 text-center">{subtitle}</p>
        <a
          href={link}
          className="mt-8 py-3 px-7 rounded-lg bg-gradient-rainblue text-white  cursor-pointer  hover:text-white transition duration-500  flex items-center"
        >
          لینک دسترسی به پروژه
        </a>
      </div>
      <img src={`../assets/${projectname}.png`} alt={projectname} />
    </motion.div>
  );
}
