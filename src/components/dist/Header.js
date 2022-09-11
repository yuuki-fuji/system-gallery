"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function Header() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container mx-auto flex flex-wrap flex-col md:flex-row items-center h-[80px]" },
            React.createElement(link_1["default"], { href: '/', passHref: true },
                React.createElement("a", { className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" },
                    React.createElement("span", { className: "text-xl text-gray-700" }, "System-gallery"))),
            React.createElement("nav", { className: "hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center " },
                React.createElement("a", { className: "ml-5 text-gray-700 hover:text-gray-900" }, "ABOUT"),
                React.createElement("a", { className: "ml-5 text-gray-700 hover:text-gray-900" }, "BLOG"),
                React.createElement("a", { className: "ml-5 text-gray-700 hover:text-gray-900" }, "GITHUB"),
                React.createElement("a", { className: "ml-5 text-gray-700 hover:text-gray-900" }, "CONTACT")))));
}
exports["default"] = Header;
