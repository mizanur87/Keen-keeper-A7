import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        {/* Minimalist Graphic */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-black text-gray-100 leading-none select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800 mt-8">
            Oops! Page missing.
          </p>
        </div>

        {/* Supporting Text */}
        <div className="max-w-sm mx-auto mb-10">
          <p className="text-gray-500 text-lg">
            We can't seem to find the page you're looking for. It might have
            been moved or deleted.
          </p>
        </div>

        {/* Single Focused Action */}
        <a
          href="/"
          className="inline-block bg-[#1a8862] text-white px-10 py-4 rounded-md font-medium tracking-wide hover:bg-[#244d3fFF] transition-colors duration-300 shadow-xl shadow-gray-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
