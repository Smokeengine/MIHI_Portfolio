import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Typewriter from 'typewriter-effect';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        data Analyst
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Mihi <br className="sm:hidden md:block" />
        Laasya
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl font-bold uppercase tracking-wides mt-4"
      >
       <Typewriter
        options={{
            strings: ['I turn data into insights', 'I find patterns in chaos', 'I bridge the gap between data and decisions'],
            autoStart: true,
            loop: true,
        }}
        />
      </motion.p>
    </div>
  );
};

export default HeroText;
