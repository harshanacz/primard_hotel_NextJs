import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div>
      <h1 className="bg-black w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-1">
        {children}
      </h1>
    </div>
  );
};

export default SectionHeading;
