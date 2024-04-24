"use client";

import Link from "next/link";
import styles from "../navbar.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ pathName, link }) => {
  const pagePath = usePathname();

  return (
    <li
      className={`nav-item ${pagePath === link && 'active'} ${
        styles.link
      }`}
    >
      <Link className="nav-link" href={link}>
        {pathName}
      </Link>
    </li>
  );
};

export default NavLink;
