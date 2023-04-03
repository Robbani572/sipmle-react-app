import React from "react";

const Link = ({route}) => {
    return (
        <li className="md:ml-12 p-3 rounded hover:bg-gray-950 text-2xl">
            <a href={route.path}>{route.name}</a>
        </li>
    )
};

export default Link;