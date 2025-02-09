"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaCodepen,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdAddBox, MdNotifications } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import {
  TbLayoutDashboardFilled,
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import { MdHistoryEdu, MdVoiceChat } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { PiPaintBrushBold } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  const handleOutsideClick = (e) => {
    if (isMobile && isOpen && !e.target.closest('.sidebar-content')) {
      setIsOpen(false);
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>      
      {/* Blur overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={handleOutsideClick}
        />
      )}      
      
      <div className={`sidebar-content fixed top-20 left-0 h-full bg-orange-50 transition-all duration-300 z-50 shadow-2xl ${
        isOpen ? "translate-x-0" : isMobile ? "-translate-x-[85%]" : ""
      }`}>
        <nav className="flex flex-col w-56 p-4 pr-12 space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <TbLayoutDashboardFilled className="mr-2" />
            Dashboard
          </Link>
          <Link
            href="/stories"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <MdHistoryEdu className="mr-2" />
            Stories
          </Link>
          <Link
            href="/canvas"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <PiPaintBrushBold className="mr-2" />
            Canvas
          </Link>
          <Link
            href="/bengali-chat"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <MdVoiceChat className="mr-2" />
            Bangali AI
          </Link>
          <Link
            href="/profile"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <FaRegUserCircle className="mr-2" />
            Profile
          </Link>
          <Link
            href="/contribute"
            className="flex items-center text-gray-900 hover:text-orange-600 text-lg p-2"
          >
            <BiDonateHeart className="mr-2" />
            Contribute
          </Link>
          
        </nav>
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-2 top-2 text-orange-600 hover:text-orange-700"
          >
            {isOpen ? (
              <TbLayoutSidebarLeftCollapseFilled className="w-6 h-6" />
            ) : (
              <TbLayoutSidebarLeftExpandFilled className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;