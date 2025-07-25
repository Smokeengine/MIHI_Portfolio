
import { MdArrowDownward } from "react-icons/md";


const NavbarBtn = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/images/Laasya_CV.pdf"; // Public folder path
    link.download = "Pranava_MIHI_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button

    onClick={onButtonClick}
    className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-95 hover:border-orange cursor-pointer hover:shadow-cyanShadow ">
      
        Resume
      
      <div className="sm:hidden md:block">
      <MdArrowDownward />

      </div>
    </button>
  );
};

export default NavbarBtn;
