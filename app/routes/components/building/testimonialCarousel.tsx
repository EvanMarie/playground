import React, { useState } from "react";
import {
  FlexFull,
  HStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";

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
    <FlexFull className="p-4 border border-gray-300 rounded shadow-md">
      <VStackFull>
        <FlexFull className="text-lg font-bold">{testimonial.name}</FlexFull>
        <FlexFull className="text-sm italic text-gray-600">
          {testimonial.testimonial}
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numTestimonials = testimonials.length;

  const goToNext = () => setCurrentIndex((currentIndex + 1) % numTestimonials);
  const goToPrev = () =>
    setCurrentIndex((currentIndex - 1 + numTestimonials) % numTestimonials);

  return (
    <VStackFull className="relative">
      {/* Testimonial Display */}
      <TestimonialCard testimonial={testimonials[currentIndex]} />

      {/* Navigation Controls */}
      <FlexFull className="justify-between items-center mt-4">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          {"<"}
        </button>
        <HStack className="space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-cyan-300" : "bg-slate-300/50"
              }`}
            />
          ))}
        </HStack>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          {">"}
        </button>
      </FlexFull>
    </VStackFull>
  );
}
