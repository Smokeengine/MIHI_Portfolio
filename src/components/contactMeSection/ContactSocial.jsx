import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/laasyapeddi/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/laasyarao12" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/pranava_mihi_12/?utm_source=qr" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
