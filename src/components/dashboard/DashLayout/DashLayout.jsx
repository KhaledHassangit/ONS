"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarContext } from "@/context/sidebarContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useRef } from "react";

export default function DashLayout({ children }) {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const pathname = usePathname();
  const router = useRouter();
  const [title, setTitle] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  
  const handleProfile = () => {
    router.push("/cleaners/calender/profile");
    setShowModal(false);
  };

  const handleSettings = () => {
    // Navigate to settings page when implemented
    router.push("/settings");
    setShowModal(false);
  };

  const handleLogout = () => {
    // Handle logout - redirecting to login page
    router.push("/login");
    setShowModal(false);
    // Additional logout logic can be added here like clearing tokens, etc.
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Handle click outside to close dropdown
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/cleaners/training") {
      setTitle("Add Training");
    } else if (pathname === "/cleaners/legal/policies") {
      setTitle("Company Policies");
    } else if (pathname === "/cleaners/legal/work_agreement") {
      setTitle("Work Agreement");
    } else if (pathname === "/cleaners/notification") {
      setTitle("Notifications");
    } else if (pathname === "/cleaners/ratings/guest_reviews") {
      setTitle("Rating of Guests");
    } else if (pathname === "/cleaners/calender" || pathname === "/cleaners/calender/profile") {
      setTitle("Calendar & Availability");
    } else if (pathname === "/cleaners/service-management/material-request") {
      setTitle("Materials Request");
    } else if (pathname === "/provider/report-problem") {
      setTitle("Report a Problem");
    }else if(pathname=="/clients/contact-us") {
     setTitle("Contact Us");
    }
  }, [pathname]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Sidebar with mobile overlay */}
      <div className={`${isMobile ? 'fixed inset-0 z-40 bg-black/50 bg-opacity-50' : ''} ${isMobile && !isOpen ? 'hidden' : ''}`} onClick={isMobile ? () => setIsOpen(false) : undefined}>
        <Sidebar />
      </div>

      <div className={`transition-all duration-300 w-full ${!isMobile && isOpen ? "md:ml-[271px] md:w-[calc(100%-271px)]" : !isMobile ? "md:ml-[92px] md:w-[calc(100%-92px)]" : "w-full"}`}>
        <header className="flex p-[13.5px_12px] md:p-[13.5px_24px] border-b border-b-black/8 justify-between items-center w-full">
          <div className="flex items-center gap-3">
            {/* Mobile menu button moved here - visible on all screens */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-[var(--main-dark-color)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
            <h4 className="text-lg md:text-xl font-bold text-[var(--main-dark-color)] truncate">
              {title || "Dashboard"}
            </h4>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex gap-[8px] text-[#4F617D] items-center">
              <Image
                src="/images/dash/global.svg"
                alt="global"
                width={16}
                height={16}
              />
              <p className="text-sm font-normal text-[var(--main-dark-color)]">
                English
              </p>
            </div>

            <div onClick={() => router.push("/cleaners/notification")} className={`w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-lg flex justify-center items-center ${pathname === "/cleaners/notification" ? "bg-[var(--main-orange-color)]" : "bg-[#F7F8F9]"} p-[8px] md:p-[10px]`}>
             {
              pathname === "/cleaners/notification" ? 
                <Image
                src="/images/dash/white-notification2.svg"
                alt="notification"
                width={24}
                height={24}
              /> :  <Image
              src="/images/dash/notification.svg"
              alt="notification"
              width={24}
              height={24}
            />
             }
            </div>

            <div ref={buttonRef} onClick={() => setShowModal(!showModal)} className="h-[42px] cursor-pointer bg-[#F7F8F9] flex items-center gap-1 md:gap-2 rounded-lg p-[8px] md:p-[10px]">
              <Image
                src="/images/dash/arrow-down.svg"
                alt="arrow-down"
                width={16}
                height={16}
                className="hidden sm:block cursor-pointer"
              />
              <p className="text-sm md:text-base cursor-pointer font-normal text-[var(--main-dark-color)] truncate max-w-[80px] sm:max-w-full">
                Mohamed Alrajihi
              </p>
              <Image
                src="/images/dash/Ellipse 3.svg"
                alt="avatar"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </div>

            {showModal && (
              <div 
                ref={modalRef} 
                className="fixed w-[180px] h-[168px] bg-white flex-col rounded-2xl p-[16px_8px] shadow-[0px_4px_20px_0px_#00000012] z-50 right-5 top-[70px] flex justify-center gap-4 items-center"
              >
                <button 
                  onClick={handleProfile}
                  className="h-10 min-w-[164px] text-base text-[#4F617D] font-normal p-[10px_16px] bg-[#F7F8F9] hover:bg-gray-200 rounded-lg flex gap-[10px] items-center transition-colors"
                >
                  <Image src="/images/user-square.svg" alt="user square" width={24} height={24} />
                  <span>Profile</span>
                </button>

                <button 
                  onClick={handleSettings}
                  className="h-10 min-w-[164px] text-base text-[#4F617D] font-normal p-[10px_16px] bg-[#F7F8F9] hover:bg-gray-200 rounded-lg flex gap-[10px] items-center transition-colors"
                >
                  <Image src="/images/setting-2.svg" alt="settings" width={24} height={24} />
                  <span>Settings</span>
                </button>

                <button 
                  onClick={handleLogout}
                  className="h-10 min-w-[164px] text-base text-[#4F617D] font-normal p-[10px_16px] bg-[#F7F8F9] hover:bg-gray-200 rounded-lg flex gap-[10px] items-center transition-colors"
                >
                  <Image src="/images/logout.svg" alt="logout" width={24} height={24} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </header>
        <main className={`min-h-screen ${(pathname === "/cleaners/legal/work_agreement" || pathname === "/cleaners/legal/policies") ? "p-0" : "p-3 md:p-6"}`}>{children}</main>
      </div>
    </div>
  );
}
