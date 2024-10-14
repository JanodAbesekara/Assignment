import React from "react";

function Footer() {
  return (
    <footer className="bg-[#6B3CC9] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <svg
              width="47"
              height="37"
              viewBox="0 0 47 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
                fill="white"
              />
            </svg>

            <span className="text-2xl font-semibold">AT DIGITAL</span>
          </div>

          <p className="mt-4 text-sm">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective – your
            business results.
          </p>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Our Technologies</h3>
          <ul className="space-y-2">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-t border-white/40 mx-8"></div>
        <div className="pt-4 text-center">
          <nav aria-label="Footer Legal Links">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>|</li>
              <li>
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
