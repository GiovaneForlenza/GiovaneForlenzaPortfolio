import React from "react";

function NavBarLinks({ links, headerStyle }) {
  links.map((link, id) => {
    return (
      <li
        className=// {
        //   headerStyle === "header"
        //     ? "px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 mx-2 hover:text-white"
        //     : "px-4 cursor-pointer capitalize py-6 text-4xl border"
        // }
        "px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 mx-2 hover:text-white"
        key={id}
      >
        {link}
      </li>
    );
  });
}

export default NavBarLinks;
