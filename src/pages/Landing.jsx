import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMedia from "../Components/SocialMedia";
import Hand from "../Components/Icons/Hand";
import Heart from "../Components/Icons/Heart";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-12 md:h-full py-20"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreen ? (
          <div className="relative z-0">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[350px]"
              src="assets/landing-img.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[350px]"
            src="assets/landing-img.png"
          />
        )}
      </div>
      {/*main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 md:mr-16">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex md:text-6xl text-5xl z-10 md:ml-28 text-start">
            <p>ســــــــلام</p>
            <Hand />
          </div>
          <div className="flex md:text-4xl pt-8 text-xl z-10 text-start">
            <p>به وبسایت من خوش اومدی</p>
            <Heart />
          </div>

          <p className="mt-6 mb-7 text-sm text-start leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-white rounded-r-md 
                        px-6 md:px-10 py-3 font-semibold hover:bg-blue hover:text-white 
                        transition duration-500"
            onClick={() => setSelectedPage("project")}
            href="#project"
          >
            نمونه کارها
          </AnchorLink>

          <AnchorLink
            className="bg-gradient-rainbow py-0.5 pl-0.5 rounded-l-md "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-white hover:text-red transition duration-500 w-full h-full flex items-center
                            justify-center px-5 md:px-10"
            >
              درخواست همکاری !
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Landing;
