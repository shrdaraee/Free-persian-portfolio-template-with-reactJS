import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Github from "./Icons/Github";
const SocialMedia = ({ flex }) => {
  return (
    <div className={`${flex} justify-center items-center gap-3`}>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com/in/sahar-daraee-bb2a62219/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/shrdaraee"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/sahardaraee_"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
    </div>
  );
};

export default SocialMedia;
