import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="www.linkedin.com/in/annavarapu-harsha-sri-vardhan-972602280" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Harshasri08" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/__harsha.21__?igsh=MXh2MzIwcnNiZXVzeA==" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
