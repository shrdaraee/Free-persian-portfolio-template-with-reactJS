import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, faname }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
                hover:text-yellow transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {faname}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav
      className={`${
        isTopOfPage ? "" : "bg-[#FFF6F3]"
      } z-40 w-full fixed top-0 py-3`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* DESKTOP NAV */}

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-12 font-opensans  text-sm font-semibold">
            <Link
              faname="درباره من"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              faname="مهارت ها "
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              faname="نمونه کارها"
              page="Project"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              faname="نظرات مشتریان "
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              faname="تماس با من"
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full shadow-testi bg-yellow p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* mobile menu popup */}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-[#FFF8E3] w-[350px] ">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            <div className="flex flex-col gap-10 mr-[33%] text-xl text-deep-blue">
              <Link
                faname=" درباره من"
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                faname="مهارتها"
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                faname=" نمونه کارها "
                page="Project"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                faname=" نظرات مشتریان "
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                faname="تماس با من"
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
        {/* logotype */}
        <div className="font-opensans text-xl font-bold ">
          {" "}
          <img src="assets/SD-logo.png" className="w-24 h-14" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
