
// components/ResumeSkeleton.tsx
// @ts-nocheck
import React from 'react';

const ResumeSkeleton = () => {
  return (
    <div className="col-span-12 md:col-span-8animate-pulse">
      <section className="space-y-12">
        {/* Resume Heading */}
        <div>
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
          <div className="mt-2 w-24 h-1 bg-gray-400"></div>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <section className="flex flex-col gap-7">
            <div>
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
              <div className="mt-1 w-32 h-1 bg-gray-400"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4 gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="h-5 w-48 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-4 w-40 bg-gray-200 rounded ml-1"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="flex flex-col gap-7">
            <div>
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
              <div className="mt-1 w-32 h-1 bg-gray-400"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4 gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="h-5 w-48 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-4 w-40 bg-gray-200 rounded ml-1"></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="w-24 h-1 bg-gray-400 mb-4"></div>
          <div className="flex flex-wrap gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="px-4 py-2 bg-gray-300 rounded-lg w-28 h-6"></div>
            ))}
          </div>
        </div>

        {/* Work Skills */}
        <div>
          <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="w-24 h-1 bg-gray-400 mb-4"></div>
          <div className="flex flex-wrap gap-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="px-4 py-2 bg-gray-300 rounded-lg w-28 h-6"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeSkeleton;
