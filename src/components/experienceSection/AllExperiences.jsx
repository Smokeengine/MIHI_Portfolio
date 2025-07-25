import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer",
    company: "Hexagon Asset Lifecycle Intelligence ",
    date: "January 2022 - June 2023",
    responsibilities: [
      "Engineered advanced 3D graphics for CAD applications utilizing .NET and C#, resulting in a 40% enhancement in rendering speed and increasing user satisfaction scores by over 30%.",
      "Spearheaded unit testing processes and integrated Scrum methodologies, which boosted project completion rates by 25% while reducing bug counts in final releases by 15%. Contributing to the development of three new software solutions that improved client project efficiency by an average of $500,000 annually."
    ],
  },
  
  {
    job: "Graduate Teaching Assistant",
    company: "Colorado State University",
    date: "August 2023 - December 2024",
    responsibilities: [
      "Developed and deployed 4 interactive Power BI dashboards that visualized critical student academic metrics, leading to a 40% increase in data-driven decision-making among faculty and administration.",
"Streamlined data preparation processes by utilizing Excel and Python for class performance analysis, resulting in a 30% reduction in processing time and enabling timely insights for over 200 students' performance evaluations.",
    ],
  },
  
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
