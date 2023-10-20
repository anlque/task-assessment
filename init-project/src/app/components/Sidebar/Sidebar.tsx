'use client'

import { NavItem } from "../NavItem/NavItem";
import { usePathname } from "next/navigation";

interface navItem {
    href: string;
    label: string;
};

export const navMap: navItem[] = [
    {
        href: "/dashboard/list",
        label: "Post List"
    }, 
    {
        href: "/dashboard/card",
        label: "Post Card"
    }
]

export const Sidebar = () => {
    const pathName = usePathname()
    
    return <aside className="w-2/12 flex flex-col p-5 border-r border-gray-200 h-full overflow-hidden">
            <h3 className="text-gray-300 mb-3">Dashboards</h3>
            <nav className="flex flex-col h-20 justify-around">
                {navMap.map((navItem) => {
                return <NavItem key={navItem.href} item={navItem} activeItem={pathName}  />
                })}
            </nav>
        </aside>
}