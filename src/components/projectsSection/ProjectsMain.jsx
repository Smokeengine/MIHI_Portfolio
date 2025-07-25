import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Power BI – Enrollment and Academic Performance Analytics",
    align: "right",
    image: "/images/website-img-1.jpg",
    text: "Built a dynamic Power BI dashboard using SQL and DAX to monitor enrollment and academic performance trends, empowering academic teams to identify at-risk programs and take corrective action.",
  },
  {
    name: "Traffic Management for Emergency Vehicles",

    align: "left",
    image: "/images/website-img-2.webp",
    text: "Designed a Python and OpenCV-based emergency vehicle detection system integrated with Flask and PyTesseract, reducing average response times by 40% for urban emergency services.",
  },
  {
    name: "Smart Governance Through Big Data",
   
    align: "right",
    image: "/images/website-img-3.jpg",
    text: "Developed a Hadoop-MapReduce application for real-time government data analysis, improving operational efficiency by 40% and cutting staff training needs by 50 hours annually.",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              text={project.text}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
