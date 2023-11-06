import Logo from "../Logo/Logo";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const FooterContainer = () => {
  return (
    <footer className=" py-10 bg-black text-white px-2 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="flex items-center">
          <Logo />
        </div>
        <div>
          <h3 className="my-3 text-2xl font-semibold">Contact Us</h3>
          <ul className="font-semibold text-cyan-500 text-left">
            <li className="flex mt-1 items-center gap-3 ">
              <BiSolidPhoneCall />
              <h4>+88 0183330001</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiOutlineMail />
              <h4>skill@approved.com</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiLocationMarker />
              <h4>Dhaka, Bangladesh</h4>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-3 text-2xl font-semibold">Legal</h3>
          <ul className="font-semibold text-cyan-500 text-left space-y-1">
            <li>
              <h4>Terms of use</h4>
            </li>
            <li>
              <h4>Privacy policy</h4>
            </li>
            <li>
              <h4>Cookie policy</h4>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-3 text-2xl font-semibold">Follow Us</h3>
          <div className="flex text-2xl gap-3 text-cyan-700 ">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
          </div>
        </div>
      </div>
      <div className=" mt-16 text-center">
        <hr className="w-11/12 mx-auto mb-6" />
        <span>Copyright © 2023 - All right reserved</span>
      </div>
    </footer>
  );
};

export default FooterContainer;
