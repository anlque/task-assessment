import Link from "next/link";
import ChartPieSlice from "@/public/chartPieSlice-d.svg";
interface navItem {
  href: string;
  label: string;
}
interface NavItemProps {
  className?: string;
  item: navItem;
  activeItem: string | null;
}

export const NavItem = (props: NavItemProps) => {
  const { className, item, activeItem } = props;
  const activeLink = item.href === activeItem;

  const iconColors = {
    lightGray: "#6b7280",
    gray: "#374151",
  };

  return (
    <Link
      className={`flex items-center bg-gray-100 rounded-lg px-2 py-1 border-l-4 ${
        activeLink
          ? "text-gray-600 border-gray-600"
          : "text-gray-400 border-gray-400"
      } ${className}`}
      href={item.href}
    >
      <ChartPieSlice
        fill={activeLink ? iconColors.gray : iconColors.lightGray}
      />
      <span className="pl-2">{item.label}</span>
    </Link>
  );
};
