"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full`}
              >
                {item.date}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {item.location}
            </p>
            <p className="text-gray-500">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
