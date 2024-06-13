"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";
import useMedia from "@/hooks/use-media";
import AddIcon from "@/icons/add-icon";
import StatisticIcon from "@/icons/statistic-icon";
import FeedIcon from "@/icons/feed-icon";
import ExitIcon from "@/icons/exit-icon";
import Link from "next/link";
import styles from "./account-header.module.css";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/account/post":
      return "Publish a new photo";
    case "/account/statistics":
      return "Statistics";
    default:
      return "My account";
  }
}

export default function AccountHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUser } = useUser();
  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/account"
          className={pathname === "/account" ? "active" : ""}
        >
          <FeedIcon />
          {mobile && "My Posts"}
        </Link>
        <Link
          href="/account/statistics"
          className={pathname === "/account/statistics" ? "active" : ""}
        >
          <StatisticIcon />
          {mobile && "Statistics"}
        </Link>
        <Link
          href="/account/post"
          className={pathname === "/account/post" ? "active" : ""}
        >
          <AddIcon />
          {mobile && "Add Photo"}
        </Link>
        <button onClick={handleLogout}>
          <ExitIcon />
          {mobile && "Exit"}
        </button>
      </nav>
    </header>
  );
}
