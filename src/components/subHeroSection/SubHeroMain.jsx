const SubHeroMain = () => {
  return (
    <><style>
    {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .scrolling-animation {
        animation: marquee 15s linear infinite;
      }
    `}
  </style>
    <div className="overflow-hidden mt-10 lg:mt-20 w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
    <div className=" md:inline-block whitespace-nowrap scrolling-animation">
          <span className="mx-14 font-semibold">analyze</span>
          <span className="mx-10">•</span>
          <span className="mx-14 font-semibold">visualize</span>
          <span className="mx-10">•</span>
          <span className="mx-14 font-semibold">optimize</span>
        </div>
    </div>
    </>
  );
};

export default SubHeroMain;
