import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="6+" text="Projects" />
      </div>
      <p className="text-center">
      With 2+ years of experience developing
Power BI dashboards and
analytical applications.
      </p>
      <ExperienceInfo number="40%" text="Efficiency Gain" />
    </div>
  );
};

export default ExperienceTopLeft;
