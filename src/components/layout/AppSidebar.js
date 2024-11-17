"use client";
import Link from "next/link";
import LogoutButton from "../buttons/LogoutButton";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <nav
      className="inline-flex mx-auto flex-col text-center mt-12 gap-2
text-gray-500"
    >
      <Link
        href={"/account"}
        className={
          "flex gap-4 p-2 " + (path === "/account" ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon
          className="w-6 h-6"
          fixedWidth={true}
          icon={faFileLines}
        />
        <span>My Page</span>
      </Link>
      <Link
        href={"/analytics"}
        className={
          "flex gap-4 p-2 " + (path === "/analytics" ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className={"w-6 h-6"}
        />
        <span>Analytics</span>
      </Link>
      <LogoutButton
        iconLeft={true}
        className={"flex gap-4 items-center text-gray-500 p-2"}
        iconClasses={"w-6 h-6"}
      />
      <Link
        href={"/"}
        className="flex items-center gap-2 text-xs
    text-gray-500 border-t pt-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className={"w-3 h-3"} />
        <span>Back to website</span>
      </Link>
    </nav>
  );
}
