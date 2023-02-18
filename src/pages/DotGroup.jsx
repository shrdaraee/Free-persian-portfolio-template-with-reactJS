import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedstyle = `relative bg-yellow before:absolute before:w-6 before:h-6 
                        before:rounded-full before:border-2 before:border-yellow 
                        before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-4 fixed top-[40%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedstyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedstyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "project" ? selectedstyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#project"
        onClick={() => setSelectedPage("project")}
      />
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedstyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedstyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
