"use client";

import { cleaners, client_links, provider_link, shared_links, SIDEBAR_LINKS } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarContext } from "@/context/sidebarContext";
import { ChevronDown, ChevronRight } from "lucide-react";



function SidebarContent({ children }) {
  return <div className="w-full h-full">{children}</div>;
}

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const router = useRouter();
  const pathname = usePathname(); 
  const { isOpen, setIsOpen , clientType , setClientType} = useContext(SidebarContext);
  const [sideData, setSideData] = useState(SIDEBAR_LINKS);
  const hoverTimeoutRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    // Access localStorage after component mounts in browser
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);
   
  useEffect(() => {
    if(user?.data?.user_type == 3 ) {
      setClientType("client");
    } else if( user?.data?.user_type == 5 || user?.data?.user_type == 4) {
      setClientType("cleaner");
    } else if( user?.data?.user_type == 6) {
      setClientType("provider");
    } 
  } , [user , clientType ])
  

  const data = [
    {
      id: 1,
      gray_icon: "/images/service-section/Image-2.svg",
      white_icon: "/images/service-section/Image-2.svg",
      title: "Omar Mohamed Alrajihi",
      onClick:() => {
        router.push("/clients/profile")
      }
    },
    {
      id: 2,
      gray_icon: "/images/dash/setting-2-gray.svg",
      white_icon: "/images/dash/setting-2.svg",
      title: "Settings"
    },
    {
      id: 3,
      gray_icon: "/images/dash/gray-logout.svg",
      white_icon: "/images/dash/logout.svg",
      title: "Logout",
      onClick : () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem("access_token");
          router.push("/login");
        }
      }
    },
    {
      id: 4,
      gray_icon: "/images/dash/gray-undo.svg",
      white_icon: "/images/dash/undo.svg",
      title: "Back to main",
      href:"/dash-home"
    },
  ];

  useEffect(() => {
    if(clientType === "client") {
      setSideData(client_links);
    } else if(clientType === "provider") {
      setSideData(provider_link);
    } else if(clientType === "cleaner") {
      setSideData(cleaners);
    } else {
      setSideData(SIDEBAR_LINKS);
    }
  }, [clientType]);

  const toggleDropdown = (linkId) => {
    setExpandedItems(prev => ({
      ...prev,
      [linkId]: !prev[linkId]
    }));
  };

  const isChildActive = (children) => {
    if (!children) return false;
    return children.some(child => child.href === pathname);
  };

  const handleMouseEnter = (link, event) => {
    if (!isOpen && link.children && link.children.length > 0) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      const rect = event.currentTarget.getBoundingClientRect();
      setPopupPosition({
        top: rect.top,
        left: rect.right + 8
      });
      setHoveredItem(link);
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
      }, 150);
    }
  };

  const handlePopupMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handlePopupMouseLeave = () => {
    setHoveredItem(null);
  };

  // Popup component for closed sidebar
  const DropdownPopup = () => {
    if (!hoveredItem || isOpen) return null;

    return (
      <div
        ref={popupRef}
        className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]"
        style={{
          top: `${popupPosition.top}px`,
          left: `${popupPosition.left}px`,
        }}
        onMouseEnter={handlePopupMouseEnter}
        onMouseLeave={handlePopupMouseLeave}
      >
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Image 
              src={hoveredItem.active_icon} 
              alt={hoveredItem.label} 
              width={20} 
              height={20} 
            />
            <span className="text-sm font-medium text-gray-800">
              {hoveredItem.label}
            </span>
          </div>
        </div>
        <div className="py-1">
          {hoveredItem.children.map(child => (
            <Link 
              href={child.href} 
              key={child.id}
              className={`flex items-center px-3 py-2 text-sm hover:bg-gray-50 ${
                pathname === child.href ? "text-[#FF7E21] bg-orange-50" : "text-gray-700"
              }`}
              onClick={() => setHoveredItem(null)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const sidebarContent = !isOpen ? (
    <div className="flex flex-col justify-between gap-[32px] items-center ">
      <div className="pt-6 !w-full">
        <Image
          className="mx-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          src="/logo.svg"
          alt="On Next Stay Logo"
          width={29}
          height={42}
        />

        <div className="flex flex-col mt-4 gap-4 !w-full">
          {sideData.map((link) => {
            const isActive = pathname === link.href || isChildActive(link.children);
            const hasChildren = link?.children && link.children?.length > 0;
            
            return (
              <div
                key={link?.label}
                className={`flex w-full items-center gap-3 h-[54px] justify-center relative cursor-pointer ${
                  isActive 
                    ? "bg-white/10 border-l-[2px] border-l-[#FF7E21]" 
                    : "hover:bg-blue-50/30"
                }`}
                onClick={() => !hasChildren && link?.href && router.push(link.href)}
                onMouseEnter={(e) => handleMouseEnter(link, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center relative">
                  <Image 
                    src={isActive ? link?.active_icon : link?.close_icon} 
                    alt={link?.label} 
                    width={24} 
                    height={24} 
                  />
                  {/* {hasChildren && (
                    <ChevronRight className="w-3 h-3 text-white absolute -right-2 -top-1" />
                  )} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full mt-auto">
        {data?.map(item => 
          <div 
            key={item?.id} 
            className="h-[54px] flex justify-center items-center cursor-pointer"
            onClick={() => (item?.onClick && item?.onClick()) || (item?.href && router.push(item.href))}
          >
            <Image
              src={item?.white_icon}
              alt={item?.title}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-[32px] justify-between items-center">
      <div className="w-full">
        <div className="pt-6 p-[32px] w-full flex items-center h-[70px] border-b border-b-black/8 justify-between">
          <Image
            src="/images/dash/Frame 2121458554.svg"
            alt="On Next Stay Logo"
            width={75}
            height={42}
          />
          <Image
            onClick={() => setIsOpen(!isOpen)}
            src="/images/dash/Menu Cheesesburger.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          {sideData.map((link) => {
            const isActive = pathname === link.href;
            const hasChildren = link?.children && link.children?.length > 0;
            const isExpanded = expandedItems[link.id];
            const isParentOrChildActive = isActive || isChildActive(link.children);
            
            return (
              <div key={link.id || link.label}>
                <div 
                  className={`flex items-center justify-between gap-3 p-[8px_16px] border-b border-b-black/8 h-[54px] cursor-pointer ${
                    isParentOrChildActive
                      ? " border-l-[2px] border-l-[#FF7E21]" 
                      : "hover:bg-blue-50/30"
                  }`}
                  onClick={() => {
                    if (hasChildren) {
                      toggleDropdown(link.id);
                    } else if (link.href) {
                      router.push(link.href);
                    }
                  }}
                >
                  <div className="flex items-center gap-[10px]">
                    <Image 
                      src={isParentOrChildActive ? link.active_icon : link.open_icon} 
                      alt={link.label} 
                      width={24} 
                      height={24} 
                    />
                    <span className={`text-[16px] ${isParentOrChildActive ? "font-medium text-[#FF7E21]" : "font-normal text-[#4F617D]"}`}>
                      {link.label}
                    </span>
                  </div>

                  {hasChildren && (
                    <ChevronDown className={`w-4 h-4 text-[#4F617D] transition-transform ${isExpanded ? "transform rotate-180" : ""}`} />
                  )}
                </div>
                
                {hasChildren && isExpanded && (
                  <div className="bg-[#F5F8FD] flex flex-col gap-2 p-[8px_24px]">
                    {link.children.map(child => (
                      <Link 
                        href={child.href} 
                        key={child.id}
                        className={`flex  rounded-lg items-center !h-[48px] p-2 hover:bg-[#F1F4F6]/70 ${
                          pathname == child.href ? "!text-[#FF7E21] bg-[#F1F4F6]" : "text-[#4F617D]"
                        }`}
                      >
                        <span className={`text-[14px] font-normal`}>
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col w-full mt-auto">
        {data?.map(item => 
          <div 
            onClick={() => (item?.onClick && item?.onClick()) || (item?.href && router.push(item.href))}
            key={item.id} 
            className="flex items-center gap-3 p-[8px_16px] border-b border-b-black/8 h-[54px] hover:bg-blue-50/30 cursor-pointer"
          >
            <Image 
              src={item?.gray_icon} 
              alt={item.title} 
              width={24} 
              height={24} 
              className="object-cover"
            />
            <span className="text-[16px] font-normal text-[#4F617D]">
              {item.title}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`transition-all duration-300 overflow-auto fixed min-h-screen max-h-svh ${
          isOpen
            ? "w-[271px] bg-[#F5F8FD]"
            : "w-[72px] m-2 bg-[#013365] rounded-2xl"
        } ${isOpen ? "text-black" : "text-white"} scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent`}
      >
        <SidebarContent>{sidebarContent}</SidebarContent>
      </div>
      
      {/* Dropdown Popup */}
      <DropdownPopup />
    </>
  );
}