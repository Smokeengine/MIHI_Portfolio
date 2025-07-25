import { MdArrowDownward } from "react-icons/md";

const NavbarBtn = () => {
  return (
    
      href="/images/Laasya_CV.pdf"
      download="Pranava_MIHI_Resume.pdf"
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-95 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
        <MdArrowDownward />
      </div>
    </a>
  );
};

export default NavbarBtn;
