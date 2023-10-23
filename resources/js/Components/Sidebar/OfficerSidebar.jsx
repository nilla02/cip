import React, { useState, useEffect } from "react";
const of = ({users}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);
    const isLargeScreen = windowWidth >= 1368; // Change the value to your desired breakpoint


  


    if (!isLargeScreen) {
        return null;
    }
    return (
        <div className="fixed w-[290px] h-[880px] p-[15px] bg-cyan-600 justify-center items-center gap-[5px] mt-[64px] ">
            <div className="w-[260px] flex-col justify-start pt-20 items-start gap-[15px] inline-flex">
     
                <a
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                    className={`self-stretch h-[50px] hover:bg-gray-600 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                        route().current("dashboard")
                            ? "bg-gray-600"
                            : "bg-cyan-600"
                    }`}
                    onClick={() => handleLinkClick("dashboard")}
                >
                    <div className="w-5 h-5 relative">
                        <div className="w-5 h-5 left-0 top-0 absolute">
                            <svg
                                aria-hidden="true"
                                class="flex-shrink-0 w-6 h- text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="text-white text-xl font-normal capitalize leading-[23px]">
                        Dashboard
                    </div>
                </a>

                {/* Dashboard ends */}


                <a
                    href={route("profile.edit")}
                    className={`self-stretch h-[50px] hover:bg-gray-600  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                        route().current("profile.edit")
                            ? "bg-gray-600"
                            : "bg-cyan-600"
                    }`}
                    onClick={() => handleLinkClick("profile.edit")}
                >
                    <div className="w-5 h-5 relative">
                        <div className=" w-5 h-5 left-0 top-0 absolute  text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-white text-xl font-normal capitalize leading-[23px]">
                        Profile
                    </div>
                </a>
      
            
                <a
                    href={route("Draft")}
                    className={`self-stretch h-[50px] hover:bg-gray-600  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                        route().current("Draft") ? "bg-gray-600" : "bg-cyan-600"
                    }`}
                    onClick={() => handleLinkClick("Draft")}
                >
                    <div className="w-5 h-5 relative">
                        <div className="w-5 h-5 left-0 top-0 absolute  text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-white text-xl font-normal capitalize leading-[23px]">
                        Submissions
                    </div>
                </a>
       
           


               
            </div>
        </div>
    );
};

export default of;
