'use client'

import { motion } from "framer-motion";

const SquishyCard = () => {
  return (
    <section className="bg-[var(--bg)] px-4 py-24">
      <div className="mx-auto w-fit">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-3xl bg-indigo-600 p-8 shadow-2xl"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
          Pro Plan
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-4 block origin-top-left font-mono text-6xl font-black leading-[1.1]"
        >
          $299/
          <br />
          Month
        </motion.span>
        <p className="text-white/80 text-sm leading-relaxed">
          Unlock full access to our premium design system, priority support, and unlimited project exports.
        </p>
      </div>
      <button className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-white/30 bg-white/10 py-3 text-center font-mono font-bold uppercase text-white backdrop-blur-md transition-all hover:bg-white hover:text-indigo-600">
        Get started now
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="rgba(0,0,0,0.2)"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="rgba(0,0,0,0.2)"
      />
    </motion.svg>
  );
};

export default SquishyCard;
