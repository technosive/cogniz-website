import Link from "next/link";
import React, { useEffect, useState } from "react";

const CookieBanner = () => {
  const [show, setShow] = useState<boolean | null>(null); // Start with null to indicate loading state

  useEffect(() => {
    // This effect runs only on the client side after mounting
    const isNoticeAccepted = localStorage.getItem("cookie-notice") === "true";
    setShow(isNoticeAccepted);
  }, []);

  if (show === null) {
    // Optionally render nothing or a placeholder while loading
    return null;
  }

  const handleButtonClick = (state) => {
    setShow(true);
    localStorage.setItem("cookie-notice", `${state}`);
  };

  return !show ? (
    <section
      className={`fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 right-4 bottom-4 lg:right-12 lg:bottom-16 dark:border-gray-700 rounded-2xl z-[99]`}
    >
      <h2 className="font-semibold text-gray-800 dark:text-white">
        🍪 Cookie Notice
      </h2>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <Link
          href="https://technosive.co.uk/privacy-policy"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          Read cookie policy
        </Link>
        .{" "}
      </p>
      <div className="flex items-center justify-end mt-4 gap-x-4 shrink-0">
        <button
          className="text-xs bg-white font-medium rounded-lg hover:bg-slate-300 text-gray-900 px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={() => handleButtonClick(false)}
        >
          Close
        </button>
        <button
          className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={() => handleButtonClick(true)}
        >
          Accept
        </button>
      </div>
    </section>
  ) : null;
};

export default CookieBanner;
