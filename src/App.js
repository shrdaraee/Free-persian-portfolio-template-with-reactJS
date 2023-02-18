import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import MySkills from "./pages/MySkills";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Testemonials from "./pages/Testemonials";
import LineGradiente from "./Components/LineGradiente";
import SocialMedia from "./Components/SocialMedia";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradiente />
      <div className="w-5/6 mx-auto md:h-min-full">
        <MySkills />
      </div>
      <LineGradiente />
      <div className="w-5/6 mx-auto md:h-min-full">
        <Projects />
      </div>

      <LineGradiente />
      <div className="w-5/6 mx-auto md:h-min-full">
        <Testemonials />
      </div>
      <LineGradiente />
      <div className="w-5/6 mx-auto md:h-min-full">
        <Contact />
      </div>
      <LineGradiente />
      <div className="mx-auto md:h-min-full">
        <Footer />
      </div>
      <div className="fixed top-[40%] left-2 md:left-7">
        <SocialMedia flex="flex-col" />
      </div>
    </div>
  );
}

export default App;
