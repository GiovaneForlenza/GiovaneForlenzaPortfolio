import React from "react";

function NavBarLinks({ links, linkId }) {
  const namesOfSectionsIds = ["#home", "#about", "#skills", "#portfolio"];
  links.map((link, id) => {
    return (
      <a
        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 mx-2 hover:text-white"
        key={id}
        href={namesOfSectionsIds[linkId]}
      >
        a{link}
      </a>
    );
  });
}

export default NavBarLinks;
