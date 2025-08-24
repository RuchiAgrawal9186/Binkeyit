import React from "react";
import {
  IconBrandLinktree,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <fragment>
      <footer className="border-t-1 shadow-md">
        <div className="container mx-auto p-4 text-center lg:flex-row lg:justify-between flex flex-col gap-2">
          <p className="font-bold">&copy; 2025 Ruchi Agrawal. All Rights Reserved. </p>
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ruchi-agrawal-6a2585214/"
              className="cursor-pointer"
              target="_blank"
            >
              <IconBrandLinkedin stroke={2} />
            </a>
            <a
              href="https://github.com/RuchiAgrawal9186"
              className="cursor-pointer"
              target="_blank"
            >
              <IconBrandGithub stroke={2} />
            </a>
            <a
              href="https://linktr.ee/ruchi_agrawal"
              className="cursor-pointer"
              target="_blank"
            >
              <IconBrandLinktree stroke={2} />
            </a>
          </div>
        </div>
      </footer>
    </fragment>
  );
};

export default Footer;
