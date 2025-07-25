import SingleSkill from "./SingleSkill";
import { FaPython } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { FaRegSnowflake } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { FaInfinity } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "SQL",
    icon: TbSql,
  },
  {
    skill: "C#",
    icon: TbBrandCSharp,
  },
  {
    skill: "PowerBI",
    icon: BsFileBarGraphFill,
  },
  {
    skill: "SnowFlake",
    icon: FaRegSnowflake,
  },
  {
    skill: "Databricks",
    icon: SiDatabricks,
  },
  {
    skill: "SCRUM",
    icon: DiScrum,
  },
  {
    skill: "CI/CD ",
    icon: FaInfinity,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
