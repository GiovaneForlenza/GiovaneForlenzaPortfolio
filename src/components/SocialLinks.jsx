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
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link, id) => {
          return (
            <li
              className="flex justify-between items-center w-40 h-14 px-4  bg-gradient-to-l from-cyan-700 to-blue-500 ml-[-100px] text-lg duration-700 font-semibold  cursor-pointer first:rounded-tr-md last:rounded-br-md hover:rounded-r-md hover:ml-0"
              key={id}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full text-white"
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
