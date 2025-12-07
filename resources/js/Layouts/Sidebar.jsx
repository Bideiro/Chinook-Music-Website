import { Link } from "@inertiajs/react";

import { ChevronLeftIcon, ChevronRightIcon, MusicalNoteIcon, UserIcon, ShoppingBagIcon, UserGroupIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

export default function Sidebar({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className="flex">
                <div
                    className={`h-screen fixed bg-[#DBBEA1] text-black transition-all duration-300 
        ${collapsed ? "w-16" : "w-56"}`}
                >
                    <div className="flex items-center justify-between p-4">
                        <img src="images/Chinook.jpg" className="h-8 w-8" />
                        {!collapsed && <h1 className="text-lg font-bold">Chinook</h1>}
                        {/* Toggle Button with Animated Icon Swap */}
                        <button onClick={() => setCollapsed(!collapsed)} className="relative">
                            <AnimatePresence mode="wait">
                                {collapsed ? (
                                    <motion.div
                                        key="open-icon"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.7 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <ChevronLeftIcon className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="close-icon"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.7 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <ChevronRightIcon className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Menu */}
                    <nav className="mt-4">
                        <SidebarItem href={"/dashboard"} icon={<ArchiveBoxIcon className="w-6 h-6" />} text="Dashboard" collapsed={collapsed} />
                        <SidebarItem href={"/"} icon={<MusicalNoteIcon className="w-6 h-6" />} text="Library" collapsed={collapsed} />
                        <SidebarItem href={"/"} icon={<ShoppingBagIcon className="w-6 h-6" />} text="Orders" collapsed={collapsed} />
                        <SidebarItem icon={<UserGroupIcon className="w-6 h-6" />} text="Users" collapsed={collapsed} />
                        <SidebarItem href={"/account"} icon={<UserIcon className="w-6 h-6" />} text="Account" collapsed={collapsed} />
                    </nav>
                </div>
                <div className={`transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-56'}`}>
                    {children}
                </div>
            </div>

        </>
    )
};

function SidebarItem({ icon, text, collapsed, href }) {
    return (
        <Link
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 cursor-pointer transition"
            href={href}
        >
            {icon}
            {!collapsed && <span>{text}</span>}
        </Link>
    );
}