
import { Link } from "react-router-dom";
import React from "react";

const ErrorPage= () => {
  return (
    <div className="py-10 h-screen mt-20">
      <div className="text-center">
        <p className=" font-semibold text-cyan-700 text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-black ">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
        <div className="flex items-center justify-center mt-6 gap-x-3">
          <button className="rounded-full bg-cyan-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
