import { useColorModeValue } from "@chakra-ui/system";
import { SEO } from "components/seo";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  const color = useColorModeValue("#231f20", "#fff");
  return (
    <section className="">
      <SEO title="404 | Page not found" description="Page Not Found " />
      <div className="container flex justify-center items-center min-h-[85vh] px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1
            className="mt-3 text-2xl font-semibold md:text-3xl"
            style={{ color: color }}
          >
            We can’t find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            {/* <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button> */}

            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#8952e0] rounded-lg shrink-0 sm:w-auto hover:bg-[#8952e0]/80"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
