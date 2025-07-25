import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm <b>Pranava Mihi Laasya Rao Peddi</b>, a results-driven <b>Data Analyst</b> pursuing my Master's in
        Computer Information Systems at Colorado State University, with proven
        expertise in transforming complex datasets into actionable business
        insights that drive measurable results. At CSU, I developed <b>4
        interactive Power BI dashboards</b> achieving a 40% increase in data-driven
        decision-making and streamlined data processes with Python/Excel,
        reducing processing time by 30% for 200+ evaluations, while my previous
        role at Hexagon Asset Lifecycle Intelligence involved engineering 3D
        graphics with .NET/C# that improved rendering speed by 40% and project
        completion by 25%. I've built impactful projects including an emergency
        vehicle detection system using OpenCV/Python that reduced response times
        by 40% and a Big Data governance application with Apache Hadoop
        processing 1TB+ real-time data with 40% operational efficiency gains.
        With expertise spanning <b> Python, SQL, Power BI, Tableau, Snowflake,
        Databricks,</b> and strong <b>Scrum project management</b> skills, I excel at
        bridging technical capabilities with business objectives to deliver
        cost-saving solutions that optimize processes and drive organizational
        growth.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
