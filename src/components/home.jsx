import React, { useState } from "react";
import {
  FaGithub,
  FaCloud,
  FaCode,
  FaCogs,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSearch,
  FaRedo,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa"; 
import logo from "./logo.png";

const RepositoryScreen = () => {
  const repositories = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      updated: "updated 1 day ago",
      type: "Public",
    },
    {
      name: "codeant-ci-app",
      language: "JavaScript",
      size: "5871 KB",
      updated: "updated 2 days ago",
      type: "Private",
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "updated 5 days ago",
      type: "Private",
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      updated: "updated 3 days ago",
      type: "Private",
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      updated: "updated 4 days ago",
      type: "Private",
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "updated 4 days ago",
      type: "Public",
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      updated: "updated 7 days ago",
      type: "Private",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div
        className={`w-full md:w-1/4 bg-gray-100 p-4 flex flex-col ${
          navOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex items-center space-x-2 mb-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h2 className="text-lg font-bold">CodeAnt AI</h2>
        </div>
        <div className="mb-4">
          <select className="w-full p-2 border rounded">
            <option selected>Dhanada</option>
          </select>
        </div>

        {/* Repository Section */}
        <div className="text-black p-4 rounded mb-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaGithub />
              <span>Repositories</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCode />
              <span>All Code Review</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCloud />
              <span>Cloud Security</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaQuestionCircle />
              <span>How To Use</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCogs />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="mt-auto space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <FaQuestionCircle />
            <span>Support</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h2 className="text-lg font-bold">CodeAnt AI</h2>
        </div>
        <button onClick={toggleNav} className="p-2">
          {navOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Repositories Section */}
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Repositories</h1>
          <div className="flex space-x-4">
            {/* Refresh All Button */}
            <button className="flex items-center space-x-2 bg-blue-500 text-white py-1 px-3 text-sm rounded hover:bg-blue-600">
              <FaRedo />
              <span>Refresh All</span>
            </button>

            {/* Add Repository Button */}
            <button className="flex items-center space-x-2 bg-green-500 text-white py-1 px-3 text-sm rounded hover:bg-green-600">
              <FaPlus />
              <span>Add Repository</span>
            </button>
          </div>
        </div>
        <div className="mb-4 text-gray-600">
          <span>Total Repositories: 33</span>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 border rounded p-2">
            <FaSearch />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border-none focus:outline-none"
              style={{ width: "200px" }}
              placeholder="Search repository"
            />
          </div>
        </div>

        {/* Repository List */}
        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <div key={index} className="p-4 border rounded bg-white shadow">
              {/* First Line: Name and Type */}
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="font-semibold">{repo.name}</h2>
                <span
                  className={`py-1 px-3 text-white text-xs ${
                    repo.type === "Public" ? "bg-green-500" : "bg-gray-500"
                  } rounded-full`}
                >
                  {repo.type}
                </span>
              </div>

              {/* Second Line: Language, Blue Dot, Size, Updated */}
              <div className="flex items-center space-x-2 mt-2 text-sm">
                <span>{repo.language}</span>
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{repo.size}</span>
                <span className="ml-4 text-gray-500">{repo.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryScreen;
