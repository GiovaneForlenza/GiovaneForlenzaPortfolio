import React from "react";

function NavBarLinks({ links, linkId }) {
  const namesOfSectionsIds = ["#home", "#about", "#skills", "#portfolio"];
  links.map((link, id) => {
    return (
      <a
        className="mx-2 cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105 hover:text-white"
        key={id}
        href={namesOfSectionsIds[linkId]}
      >
        a{link}
      </a>
    );
  });
}

export default NavBarLinks;
