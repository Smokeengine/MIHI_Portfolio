import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="p.m.laasya.rao@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1 970-581-5395" Image={FiPhone} />
      <SingleInfo text="Colorado, USA" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
