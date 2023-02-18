import SocialMedia from "../Components/SocialMedia";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-red pt-5">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="text-lg  py-5">
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
          
          </p>
          <SocialMedia flex="flex" />
        </div>
      </div>
    </footer>
  );
}
