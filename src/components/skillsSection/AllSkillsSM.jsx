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
    skill: "CI/CD Pipeline",
    icon: FaInfinity,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
