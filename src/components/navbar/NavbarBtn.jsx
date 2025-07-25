import { MdArrowDownward } from "react-icons/md";

const NavbarBtn = () => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/images/Laasya_CV.pdf';
    link.download = 'Pranava_MIHI_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-95 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
        <MdArrowDownward />
      </div>
    </button>
  );
};

export default NavbarBtn;
