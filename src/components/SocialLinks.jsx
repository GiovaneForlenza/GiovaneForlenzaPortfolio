import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    { name: "Github", icon: FaGithub, href: "#" },
    { name: "Linkedin", icon: FaLinkedin, href: "#" },
    { name: "Portfolio", icon: BsPersonLinesFill, href: "#" },
    { name: "Contact", icon: HiOutlineMail, href: "#" },
  ];
  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {links.map((link, id) => {
          return (
            <li
              className="from-accent to-primary text-text ml-[-100px] flex h-14 w-40 cursor-pointer items-center justify-between bg-gradient-to-r px-4 text-lg font-semibold  duration-700 first:rounded-tr-md last:rounded-br-md hover:ml-0 hover:rounded-r-md"
              key={id}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-between text-white"
              >
                <>
                  {link.name} <link.icon size={30} />
                </>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
