"use client";
import Link from "next/link";
import React from "react";
import ModeToggle from "../ModeToggle";

export default function NavBar() {
  const NaveLinks = () => {
    return (
      <>
        <li>
          <Link
            className="hover:text-cyan-600 hover:font-bold dark:text-white"
            href="#home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 hover:font-bold dark:text-white"
            href="#about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 hover:font-bold dark:text-white"
            href="#skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 hover:font-bold dark:text-white"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-600 hover:font-bold dark:text-white"
            href="#contact"
          >
            Contact
          </Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 dark:bg-cyan-500 shadow-sm  text-base-content sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content dark:bg-cyan-500  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NaveLinks()}
          </ul>
        </div>
        <Link href="#home" className=" text-xl dark:text-white pr-1 md:pr-2">
          Himon
        </Link>
        <ModeToggle />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NaveLinks()}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Download Resume</a>
      </div>
    </div>
  );
}
