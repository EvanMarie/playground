import React, { useState, useEffect } from "react";
import {
  FlexFull,
  HStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";
import Icon from "~/buildingBlockComponents/icon";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

export type TestimonialType = {
  name: string;
  testimonial: string;
};

export function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <VStackFull className="p-1vh">
      <FlexFull className="text-xl font-bold">{testimonial.name}</FlexFull>
      <FlexFull className="text-lg italic text-cyan-300 textShadow">
        {testimonial.testimonial}
      </FlexFull>
    </VStackFull>
  );
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);
  const numTestimonials = testimonials.length;

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % numTestimonials);
    setAutoCycle(false); // Stop auto-cycling on user interaction
  };

  const goToPrev = () => {
    setCurrentIndex((index) => (index - 1 + numTestimonials) % numTestimonials);
    setAutoCycle(false); // Stop auto-cycling on user interaction
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setAutoCycle(false); // Stop auto-cycling on user interaction
  };

  // Set up auto-cycling using useEffect
  useEffect(() => {
    if (autoCycle) {
      const interval = setInterval(() => {
        setCurrentIndex((index) => (index + 1) % numTestimonials);
      }, 5000); // Change testimonial every 5 seconds
      return () => clearInterval(interval); // Clean up on component unmount or when autoCycle changes
    }
  }, [autoCycle, numTestimonials]);

  return (
    <FlexFull className="py-5vh">
      <VStackFull className="relative px-1vh" gap="gap-0px">
        {/* Testimonial Display with Fade Transition */}
        <FlexFull className="p-1vh md:p-2vh xl:p-3vh border-[0.3vh] border-col-230 rounded-lg bg-col-950 insetShadow5xl">
          <motion.div
            key={currentIndex} // Change key to trigger re-render on index change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }} // Adjust duration as needed
            className="w-full"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </FlexFull>

        {/* Navigation Controls */}
        <FlexFull className="justify-between items-center p-2vh">
          <button
            onClick={goToPrev}
            className="p-0.5vh hover:cursor-pointer hover:scale-102 transition-300 hover:-translate-x-0.5vh"
          >
            <Icon
              icon={IoChevronBackCircleOutline}
              iconClassName="text-cyan-300 text-4vh bg-slate-800/50 rounded-3vh hover:bg-slate-800/90 transition-300 shadowNarrowNormal"
            />
          </button>
          <HStack className="gap-2vh items-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => goToIndex(index)}
                className={`rounded-full cursor-pointer shadowNarrowNormal ${
                  index === currentIndex
                    ? "bg-cyan-300 w-1.8vh h-1.8vh "
                    : "bg-slate-300/50 w-1.3vh h-1.3vh "
                } transition-300 hover:scale-110`}
              />
            ))}
          </HStack>
          <button
            onClick={goToNext}
            className="p-0.5vh hover:cursor-pointer hover:scale-102 hover:translate-x-0.5vh transition-300"
          >
            <Icon
              icon={IoChevronForwardCircleOutline}
              iconClassName="text-cyan-300 text-4vh bg-slate-800/50 rounded-3vh hover:bg-slate-800/90 shadowNarrowNormal"
            />
          </button>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
